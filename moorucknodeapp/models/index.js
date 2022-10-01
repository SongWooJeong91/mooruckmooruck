//node 프레임워크에서 제공한 폴더 경로 / 파일 관리 객체 참조
const path = require('path');

//시퀄라이즈 ORM 프레임워크 패키지 참조
const Sequelize = require('sequelize');

//DB연결 정보가 있는 config파일에서 development 항목의 DB 정보를 조회한다.
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[
	env
];

//DB 관리 객체 생성
const db = {};

//시퀄라이즈 객체 생성
const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.config = config;

db.Member = require('./member.js')(sequelize, Sequelize);
db.Plant = require('./plant.js')(sequelize, Sequelize);
db.Diary = require('./diary.js')(sequelize, Sequelize);
db.Notification = require('./notification.js')(sequelize, Sequelize);

// PK, FK 설정
// member
db.Member.hasMany(db.Plant, {
	foreignKey: 'memberId',
	sourceKey: 'id',
});

// plant
db.Plant.belongsTo(db.Member, {
	foreignKey: 'memberId',
	targetKey: 'id',
});
db.Plant.hasMany(db.Diary, {
	foreignKey: 'plantId',
	sourceKey: 'id',
});
db.Plant.hasMany(db.Notification, {
	foreignKey: 'plantId',
	sourceKey: 'id',
});

// diary
db.Diary.belongsTo(db.Plant, {
	foreignKey: 'plantId',
	targetKey: 'id',
});

// notification
db.Notification.belongsTo(db.Plant, {
	foreignKey: 'plantId',
	targetKey: 'id',
});

//DB 관리 객체 모듈 출력
module.exports = db;
