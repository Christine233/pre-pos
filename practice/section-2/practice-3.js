'use strict';

function countSameElements(collection) {
  var arr = [];
  for (var i = 0; i < collection.length; i++){
    var str1 = collection[i].replace(/[^a-zA-Z]/ig,"");
    if(temp == str1) continue;
    var temp = str1;
    var count = 0;
    for(var j = 0; j < collection.length; j++){
      var str2 = collection[j].replace(/[^a-zA-Z]/ig,"");
      var num = collection[j].replace(/[^0-9]/ig,"");
      if(temp == str2){
        if(num != "")
          count += parseInt(num);
        else
          count++;
      }
    }
    var obj = {};
    obj.name = temp;
    obj.summary = count;
    arr.push(obj);
  }
  return arr;
}
