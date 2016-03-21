var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = array.filter(function(elem){
  return elem % 2 ===0;
})

console.log(filtered);
