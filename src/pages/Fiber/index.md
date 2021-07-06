/* 
原型链继承
*/

function Father() {
    this.property = true;
}
Father.prototype.getFatherValue = function() {
    return this.property;
}
function Son() {
    this.sonProperty = false;
}
// son的原型对象是构造函数Father的实例
Son.prototype = new Father();

// 确定原型与实例的关系
 
if((new Son()) instanceof Son){

}

if (Son.prototype.isPrototypeOf(new Son())) {

}

/* 
缺点： 属性共享性造成的。prototype上的属性会共享给实例

1.当原型链中包含引用类型值的原型时，该引用类型值会被所有实例共享
2.创建子类型不能向超类型的构造函数中传入参数；
*/

/* 
借用构造函数
*/

function Father1 () {
    this.colors = ['red','blue'];
}

function Son1() {
    // 继承Father1
    Father1.call(this);
}

/* 
方法都在构造函数中定义, 因此函数复用也就不可用了.
*/

/* 
组合继承 原型链和构造函数继承同事应用
*/

function Father2 () {

}

function Son2() {
    Father2.call(this);
}
Son2.prototype = new Father2();

/* 
 原型式继承
*/

function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

// 等价于 相当于浅复制
Object.create();

/* 
寄生式继承
*/

function createAnother(original){
	var clone = object(original);//通过调用object函数创建一个新对象
	clone.sayHi = function(){//以某种方式来增强这个对象
		alert("hi");
	};
	return clone;//返回这个对象
}

/* 
不能够复用
*/

/* 
寄生组合继承
*/

function extend(subClass,superClass){
	var prototype = object(superClass.prototype);//创建对象
	prototype.constructor = subClass;//增强对象
	subClass.prototype = prototype;//指定对象
}