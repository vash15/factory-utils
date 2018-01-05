
let g = global || window;
if ( g.__factory__ === void 0 )
	g.__factory__ = {};

var Factory = function Factory(clazzname, ...options){
	return Factory.create(clazzname, ...options);
}

Factory.registeredTypes = g.__factory__;

Factory.register = function register(clazzname, clazz) {
	if ( typeof clazzname == 'object' ){
		for (var key in clazzname) {
			this._register(key, clazzname[key]);
		}
	}else{
		this._register(clazzname, clazz);
	}
};

Factory._register = function _register(clazzname, clazz){
	if (!clazzname) return;
	if (this.registeredTypes[clazzname]) throw new Error('Class name '+clazzname+' already registered!');
	this.registeredTypes[clazzname] = clazz;
};

Factory.override = function override(clazzname, clazz) {
	if (!clazzname) return;
	this.registeredTypes[clazzname] = clazz;
};

Factory.getClass = function getClass(clazzname){
	return this.registeredTypes[clazzname];
};

Factory.create = function create(clazzname, ...options) {
	let clazz = this.registeredTypes[clazzname];
	if(!clazz) return;
	return new clazz(...options);
};

export default Factory;
