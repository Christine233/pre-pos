'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = objectB.value;
  for(let i = 0; i < collectionA.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(collectionA[i].key == arr[j]){
        let count = parseInt(collectionA[i].count);
        count = Math.floor(count / 3);
        collectionA[i].count -= count;
      }
    }
  }
  return collectionA;
}
