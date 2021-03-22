class Scheduler {
  constructor(limit){
    this.limit = limit;
    this.queue = [];
    this.promiseArr = [];
  }
  addTask(task){
    this.queue.push(task);
    this.run();
  }
  run(){
    if(this.promiseArr.length<= this.limit && this.queue.length){
      const task = this.queue.shift();
      let promise = task().then(res => {
        this.promiseArr.splice(this.promiseArr.indexOf(promise),1);
        this.run();
      })
      this.promiseArr.push(promise);
    }
  }
}

var task = function(time,order){
  let fn = function(){
     console.log('开始执行'+order);
    return new Promise(resolve => {
      setTimeout(resolve,time)
    }).then(() => console.log('执行完毕'+order))
  }
  return fn;
}

var scheduler = new Scheduler(2);
scheduler.addTask(task(4000, '1'));
scheduler.addTask(task(500, '2'));
scheduler.addTask(task(500, '3'));
scheduler.addTask(task(400, '4'));
scheduler.addTask(task(300, '5'));
scheduler.addTask(task(300, '6')); 