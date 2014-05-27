var express = require('express');
var router = express.Router();

router.get(/^\/*/, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/address', function(req, res) {
	
	var data = [
	{
		name: '李琦',
		city: '重庆市沙坪坝区',
		address: '虎溪镇大学城四川美术学院',
		apartment: '7号楼',
		isChecked: 'yes'
	},
	{
		name: '李琦',
		city: '杭州市余杭区',
		address: '翡翠城东北区芦苑3幢2单元',
		apartment: '501',
		isChecked: 'no'
	}
	];
	
	res.send(JSON.stringify(data));
});

router.get('/todos', function(req, res) {
	
	var data = [
	{
		date: '4月16日~18日',
		content: '草莓需要您去浇水'
	},	
	{
		date: '4月25日~28日',
		content: '西瓜需要杀虫'
	}
	];
	
	res.send(JSON.stringify(data));
});

module.exports = router;
