export const uniqueObject = arrayOfObjects =>{
      const ids = new Set();
      const results = [];
      for(let i=0; i<arrayOfObjects.length; i++){
            if(ids.has(arrayOfObjects[i].id)) continue;
            else{
                results.push(arrayOfObjects[i]);
                ids.add(arrayOfObjects[i].id)
            }
      }
      return results;
}