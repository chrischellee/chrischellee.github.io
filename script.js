var spanText = $(`.names`);
var button = $(`.button`);
button.on("click", addNames);
var button1 = $(`.button1`);
button1.on("click", clear);
var cardContainer = $('.card-container');


function clear(){
  $('#add').val("");
  $('#add1').val("");
  spanText.html("");
  cardContainer.html("");
}
  var islandName= [];
  var goodIslandNames = [];
  var uniqueNames = [];


function addNames(){
  var add= document.getElementById("add");
  islandName.push(add.value);
  var add1= document.getElementById("add1");
  islandName.push(add1.value);
  // console.log(islandName);


   //Seperates Names with 10 or more characters
  islandName.forEach(function(islandName){
    var length = islandName.length;
    if (length < 10){
    goodIslandNames.push(islandName);
    }

  })
   //Removes duplicate element from array
  $.each(goodIslandNames, function(i, el){
    if($.inArray(el, uniqueNames) === -1){
      uniqueNames.push(el);
    }
});


      uniqueNames.forEach(function(entry){

      cardContainer.append(`
        <p class="name-card">${entry}</p>
         `);
  })

  // console.log(goodIslandNames);


  // console.log(uniqueNames);


}
