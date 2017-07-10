'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = [];
  for (var i = 0; i < collectionA.length; i++){
    if(temp == collectionA[i]) continue;
    var temp = collectionA[i];
    var count = 0;
    for(var j = 0; j < collectionA.length; j++){
      if(temp == collectionA[j])
        count++;
    }
    var obj = {};
    if(temp.charAt(1) == '-'){
      obj.key = temp.charAt(0);
      obj.count = parseInt(temp.charAt(2));
    }
    else{
      obj.key = temp;
      obj.count = count;
    }
    arr.push(obj);
  }
  var objArr = objectB.value;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < objArr.length; j++){
      if(arr[i].key == objArr[j]){
        let count = parseInt(arr[i].count);
        count = Math.floor(count / 3);
        arr[i].count -= count;
      }
    }
  }
  return arr;
}
