Function.prototype.a = () => alert(1);

Object.prototype.b = () => alert(2);

function A() {};

var a = new A();

a.a();  //报错，找不到

a.b();   // alert 2 因为new 的实现最后会返回一个object，然后在构造函数里面找不到才需要去原型上面去查找，所以就会alert 2



//new 内部的实现原理
function createInstance(Fn, ...args) {
    let object = {};
    object._proto_ = Fn.prototype;
    object.apply(Fn,[...args]);
    return object;
}


function Foo() {

 this.a = 1;

 return {

   a: 4,

   b: 5,

 };

}


Foo.prototype.a = 6;

Foo.prototype.b = 7;

Foo.prototype.c = 8;


var o = new Foo();


console.log(o.a);   //4

console.log(o.b);    //5

console.log(o.c);    // 找不到，原因跟上面的new 一致

