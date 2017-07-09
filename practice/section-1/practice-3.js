'use strict';

function collectSameElements(collectionA, objectB) {
  var array = new Array();
  var colB = objectB.value;
  var i = 0;
  for(let n in collectionA){
    for(let m = 0; m < colB.length; m++){
      if(collectionA[n] == colB[m]){
        array[i] = colB[m];
        i++;
      }
    }
  }
  return array;
}
