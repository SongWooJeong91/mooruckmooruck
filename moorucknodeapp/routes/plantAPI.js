var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
var multer = require('multer');
const fs = require('fs');
const path = require('path');

// ORM 참조하기
var db = require('../models/index');
var Plant = db.Plant;

fs.readdir('public/uploads', (error) => {
	// uploads 폴더 없으면 생성
	if (error) {
		fs.mkdirSync('public/uploads');
	}
});

// 식물정보 전체 조회 API
// localhost:3005/plant/

// 식물 등록 API
// localhost:3005/plant/
router.post('/', async (req, res) => {
	console.log('------------------- 식물 등록 ');
	let plant = {
		plantType: req.body.plantType,
		plantName: req.body.plantName,
		wateringCycle: req.body.wateringCycle,
		nutrientsCycle: req.body.nutrientsCycle,
		splitCycle: req.body.splitCycle,
		wateringDate: req.body.wateringDate,
		nutrientsDate: req.body.nutrientsDate,
		splitDate: req.body.splitDate,
		sunshine: req.body.sunshine,
		temperature: req.body.temperature,
		saleDate: req.body.saleDate,
		plantImg: req.body.plantImg,
		plantMemo: req.body.plantMemo,
		memberId: 1,
	};
	console.log('등록 데이터', plant);
	try {
		const savedPlant = await Plant.create(plant);
		return res.json({ code: '200', data: savedPlant, msg: 'ok' });
	} catch (err) {
		console.log('서버 에러', err);
		return res.json({ code: '500', data: {}, msg: '서버에러발생' });
	}
});

// 회원 별 식물 목록 호출
router.get('/:id', async (req, res) => {
	let result = { code: '', data: [], msg: '' };
	const memberId = req.params.id;
	console.log('백엔드로 넘어온 멤버 아이디 :', memberId);
	//예외처리하기
	try {
		const userPlantList = await Plant.findAll({
			where: { memberId: memberId },
		});

		result.code = '200';
		result.data = userPlantList;
		result.msg = 'Ok';

		return res.json(result);
	} catch (err) {
		//에러 무시하기
		console.log('plantList 호출 서버에러 발생');

		result.code = '500';
		result.data = [];
		result.msg = 'plantList 호출 서버에러 발생';

		return res.json(result);
	}
});

// 1. multer 미들웨어 등록
// dest : 업로드 경로

const upload = multer({
	// 파일 저장 위치 (disk , memory 선택)
	storage: multer.diskStorage({
		destination: function (req, file, done) {
			done(null, 'public/uploads/');
		},
		filename: function (req, file, done) {
			const ext = path.extname(file.originalname);
			done(null, path.basename(file.originalname, ext) + Date.now() + ext);
			console.log(
				'-------------------------------------------ext',
				ext,
				Date.now()
			);
		},
	}),
	// 파일 허용 사이즈 (5 MB)
	// limits: { fileSize: 5 * 1024 * 1024 },
});
let uploadPath = '';

// 파일 업로드 처리 OPEN API 서비스
// 파일 업로드 처리
router.post('/upload', upload.single('plantResiImg'), (req, res) => {
	console.log('------------------------- plant 업로드 서버 호출');
	// 3. 파일 객체
	let file = req.file;
	console.log(
		'-------------------------------------------------file 받은 정보',
		file
	);
	console.log(
		'-------------------------------------------------저장된 파일 이름',
		file.filename
	);
	// 4. 파일 정보
	let result = {
		originalName: file.originalname,
		size: file.size,
	};
	// console.log(result.originalName);
	uploadPath = '/uploads/' + req.file.filename;
	console.log(
		'--------------------------------------------uploadPath',
		uploadPath
	);
	res.json(uploadPath);

	console.log('uploadPath', uploadPath);
	// res.json({ url: `/img/${req.file.filename}` });
});

module.exports = router;
