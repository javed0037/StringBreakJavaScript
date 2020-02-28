let  StringBreak = (warpString, breakLength) => {
    let array =  warpString.split(' ');
    console.log('array', array);
    
 let newString = '';
 for (let index = 0; index < array.length; index++) {
 
     let element = array[index];
      while (element.length > 11) {
         let bakString =    element.slice(0, breakLength);
         newString = newString + ' ' + bakString +'-';
         let remainingString =    element.slice(breakLength);
         element = '-'+remainingString;
          
      }
      newString = newString + ' ' + element;
 }
  console.log('newString', newString);
     
 }
 StringBreak('javed khan gfdsgjc dgfgdsfgsudgfyusgfgsufg hello khan bhai kese ho',10)