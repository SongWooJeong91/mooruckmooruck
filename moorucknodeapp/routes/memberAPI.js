var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

//ORM 참조하기
var db = require('../models/index');
var Member = db.Member;

// 회원정보 조회 API
// localhost:3005/member/
router.get('/', async (req, res) => {
	console.log('---------------회원정보 전체조회 API 호출');
	try {
		const result = await Member.findAll();
		console.log(result);
		const memberList = result;
		console.log('조회된 회원', memberList);
		return res.json({
			code: '200',
			data: { memberList },
			msg: 'Ok',
		});
	} catch (err) {
		//에러 무시하기
		console.log('서버에러 발생');
		return res.json({
			code: '500',
			data: [],
			msg: '회원정보 조회 API 서버에러발생',
		});
	}
});

// 회원가입 API
// localhost:3005/member/
router.post('/', async (req, res) => {
	console.log('-------------- 회원가입 --------------');
	let member = {
		email: req.body.email,
		password: req.body.password,
		username: req.body.username,
		phone: req.body.phone,
		usertype: 1,
	};
	// console.log('등록 데이터', member);
	try {
		const savedMember = await Member.create(member);
		return res.json({ code: '200', data: savedMember, msg: 'ok' });
	} catch (err) {
		console.log('서버 에러', err);
		return res.json({
			code: '500',
			data: {},
			msg: '회원가입 API 서버에러발생',
		});
	}
});

// 단일 회원정보 조회 OPEN API
// localhost:3005/member/1
router.get('/:id', async (req, res) => {
	try {
		let member = await Member.findOne({ where: { id: req.params.id } });
		console.log('단일 회원정보 조회 OPEN API');
		return res.json({
			code: '200',
			data: member,
			msg: 'Ok',
		});
	} catch (err) {
		result.code = '500';
		result.data = [];
		result.msg = '서버에러발생';

		return res.json(result);
	}
});

// 이메일, 휴대전화 중복 검사 API
// http://localhost:3005/member/search/${member.email}
router.get('/search/:searchValue', async (req, res) => {
	console.log('이메일 중복 확인 OPEN API');
	try {
		var member = await Member.findOne({
			where: {
				[Op.or]: [
					{ email: req.params.searchValue },
					{ phone: req.params.searchValue },
				],
			},
		});
		if (member) {
			return res.json({
				code: '200',
				data: { result: false },
			});
		} else {
			return res.json({
				code: '200',
				data: { result: true },
			});
		}
	} catch (err) {
		result.code = '500';
		result.data = [];
		result.msg = '이메일, 휴대전화 중복 검사 API 서버에러발생';

		return res.json(result);
	}
});

module.exports = router;
