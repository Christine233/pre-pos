'use strict';

function collectSameElements(collectionA, collectionB) {
  var array = new Array();
  var i = 0;
  for(let m in collectionA){
    for(let n in collectionB){
        if(collectionA[m]==collectionB[n]) 
        {
          array[i] = collectionA[m];
          i++;
        }
    }
  }
  return array;
}
