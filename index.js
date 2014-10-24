var ms = require('ms'),
	co = require('co');

function wait(ms){
	return function(done){
		setTimeout(done,ms);
	}
}

module.exports = function(ms,fn){
	if ('string' == typeof ms) ms = parse(ms);
	co(function* (){
		while(1){
			yield wait(ms);
			fn.apply();
		}
	})();
};
