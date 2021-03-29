function merge(a1,a2){
  let i=0;
  let j=0;
  let result = [];
  while((i<a1.length) && (j<a2.length)){
    if(a1[i]<=a2[j]){
      result.push(a1[i]);
      i++;
    }else{
      result.push(a2[j]);
      j++;
    }
  }
  return result.concat(i<a1.length ? a1.slice(i):a2.slice(j))
}

console.log(merge([5,5,6],[4,5]));
