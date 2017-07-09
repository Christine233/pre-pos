'use strict';

function collectSameElements(collectionA, objectB) {
  var array = new Array();
  var i = 0;
  var colB = objectB.value;
  for(let n = 0; n < collectionA.length; n++){
    for(let m = 0; m < colB.length; m++){
      if(collectionA[n].key == colB[m])
        array[i++] = collectionA[n].key; 
    }
  }
  return array;
}
