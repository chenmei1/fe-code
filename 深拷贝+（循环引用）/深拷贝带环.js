function deepClone(obj,map =new Map()){
     if(obj !== null && typeof obj === "object"){
        let result = Array.isArray(obj) ? []: {};
        if(map.has(obj)){
            return map.get(obj);
        }
        map.set(obj,result);
        for(var key in obj){
            result[key] = deepClone(obj[key],map)
        }
        return result;
     }else {
         return obj
     }
 }