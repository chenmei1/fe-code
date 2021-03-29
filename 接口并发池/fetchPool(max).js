/*var fetch2 = fetchPool(2)
fetch2('http://baidu.com').then
fetch2('http://baidu.com').then
fetch2('http://baidu.com').then
fetch2('http://baidu.com').then
fetch2('http://baidu.com').then
fetch2.setPool(5) */

class fetchPool{
  constructor(limit){
    this.limit = limit;
    this.queue = [];
    this.promiseArr = [];
    return function(url){
      this.queue.push(fetch(url));
      this.run();
    }
  }
  run(){
    if(this.promiseArr.length <= this.limit && this.queue.length){
      let task = this.queue.shift();
      let promise = task().then(res => {
        this.run();
        this.promiseArr.splice(this.promiseArr.indexOf(promise));
      })
      this.promiseArr.push(promise);
    }
  }
  setPool(limit){
    this.limit(limit);
  }
}

function task(url,callback){
  return new Promise((resolve,reject) => {
    
  })
}