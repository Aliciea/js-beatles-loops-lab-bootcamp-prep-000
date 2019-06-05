// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i].length} + plays + ${instruments[i].length}`);
    
  }
  return arr;
}