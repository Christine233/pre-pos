'use strict';

function countSameElements(collection) {   
var arr = [];
  for (var i = 0; i < collection.length; i++){
    if(temp == collection[i]) continue;
    var temp = collection[i];
    var count = 0;
    for(var j = 0; j < collection.length; j++){
      if(temp == collection[j])
        count++;
    }
    var obj = {};
    obj.key = temp;
    obj.count = count;
    arr.push(obj);
  }
return arr;
}
