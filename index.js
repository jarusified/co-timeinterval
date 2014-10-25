var	co = require('co'),
	Emitter = require('co-emitter');
var emitter = new Emitter();


function wait(ms){
 	return function(done){
 		setTimeout(done,ms);
 	}
 }

module.exports = function(ms,fn){
	if ('string' == typeof ms) ms = parse(ms);
	co(function* (){
		emitter.on('loop',function *(){
			yield wait(ms);
			fn.apply();
		});
		co(function* (){
		while(1){
			yield emitter.emit('loop')
			clearTimeout();
		}
		})();
	})();

};
