var ms = require('ms'),
	co = require('co');

function wait(ms){
	console.log('sf');
	return function(done){
		setTimeout(done,ms);
	}
}

module.exports = function(ms,fn){
	//console.log(fn.constructor.name);
	co(function* (){
		yield wait(1000);
	})();
};