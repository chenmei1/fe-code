//写一个控制接口发送的函数

function foo(list,limit){
  let count =0;
  let result =[];
  let request = function(){
    count++;
    const task = list.shift();
    task().then(res => {
      if(count ===list.length){
        return result;
      }
      result.push(res);
      request();
    })
  }


  for(let i =0;i<list.length;i++){
    request();
  }
}


//写一个类似接口发送的function，所有的接口发送完毕，进行callback
function request(urls,limit,callback){
  (function fn(res){
    urls.length ? Promise.all(urls.splice(0,limit).map(re => fn(res.concat(res)))) : callback(res);
  })([])
}


