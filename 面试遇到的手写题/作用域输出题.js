let count = 10;

function a() {
   return count + 10;
}


function b() {

   let count = 20;

   return a();

}


console.log(b());

// 作用域：定义的时候，还是执行的时候来决定的？是定义的时候来决定的，当自己的作用域找不到的时候，可以往上找父作用域，直到找到了，结束。。。

