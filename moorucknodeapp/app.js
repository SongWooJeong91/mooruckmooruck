var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

//cors 노드 팩키지를 참조한다.
const cors = require('cors');

//.env 설정기능 참조적용
require('dotenv').config();

//MVC(Model영역 모듈 참조) 시퀄라이즈 ORM 객체 참조하기
var sequelize = require('./models/index.js').sequelize;

//라우팅 파일에 대한 참조
//MVC(Controller=Routes영역 모듈 참조 )
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 회원 정보 제공 API 라우터 제공
var memberAPIRouter = require('./routes/memberAPI');
// 식물 정보 제공 API 라우터 제공
var plantAPIRouter = require('./routes/plantAPI');

var app = express();

//모든 리소스 접근 CORS 허용하기
app.use(cors());

//시퀄라이즈 ORM객체를 이용해 지정한 MySQL 연결 동기화하기
sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use("/upload", express.static("public/upload")); //업로드 경로 정적으로 설정
app.use(cookieParser());

//정적 웹페이지들 저장 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// API 라우터 파일 기본주소 정의
app.use('/member', memberAPIRouter);
app.use('/plant', plantAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
