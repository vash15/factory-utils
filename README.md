Factory utils
===
```
import Factory from "factory-utils";

class FooClass {
	constructor(options){
		console.log("Foo");
	}
}

Factory.register("FooClass", FooClass);
// or
Factory.register({
	"FooClass": FooClass,
	...
});

var foo = Factory('FooClass'/*, {options} */);

// Overide class
class FooClass2 extends FooClass{
	constructor(options){
		console.log("Foo 2");
	}
}

Factory.override("FooClass", FooClass2);

var foo = Factory('FooClass'/*, {options} */);

```
