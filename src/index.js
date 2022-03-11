module.exports = function check(str, bracketsConfig) {
// function check() {
  let bracketsArr = [];

  // let bracketsConfig = [['(', ')'], ['[', ']']];

  // let str = "||"

  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|') 
      counter++;
  }

  if (counter % 2 === 1)
    return false;

   str = str.replaceAll('|', '');
  
   if(str.length === 0)
     return true;

  

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        bracketsArr.push(bracketsConfig[j][1]);
        break;
      } else if (str[i] === bracketsConfig[j][1]) {
        if (bracketsArr[bracketsArr.length - 1] === str[i]) {
          bracketsArr.pop();
          break;
        } else {
          return false;
        }
      }
    }
    
  }
  if (bracketsArr.length === 0)
    return true;
  return false;








  // let arr = [];


  // for (let i = 0; i < bracketsConfig.length; i++) {
  //       arr.push(bracketsConfig[i][0]);
  //     for (let j = 0; j < str.length; j++) {
  //         if (str[j] === arr[0] || str[j]  )
  //       }
  //   }
 
//  if(bracketsConfig.includes(str)) {
//   return true;
//  }
//   return false;

// //     let count1 = 0;
//     let count2 = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === '(' || '[' || "'" || '|'){
//         count2++;
//       } else if (str[i] === ')' || ']' || "'" || '|'){
//         count2--;
//       }













 }  
//  check()


