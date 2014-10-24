	var timeinterval = require('./index.js');
	var assert = require('assert');
	var ms = require('ms');

	var a=new timeinterval(1000,function(){
		console.log('beep');
	});