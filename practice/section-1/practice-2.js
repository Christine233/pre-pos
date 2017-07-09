'use strict';

function collectSameElements(collectionA, collectionB) {
  var array = new Array();
  var i = 0;
  for(let n in collectionA){
    for(let m = 0; m < collectionB[0].length; m++){
      if(collectionA[n]==collectionB[0][m]){
        array[i] = collectionA[n];
        i++;
      }
    }
  }
  return array;
}
