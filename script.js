/* .js files add interaction to your website */
var factList = [
  "In North America, about half of the forests in the eastern part of the continent were cut down from the 1600s to the 1870s for timber and agriculture.",
  "It is estimated that within 100 years, there will be no rainforests.",
  "Loss of forests contributes between 12 percent and 17 percent of annual global greenhouse gas emissions",
  "According to the Rainforest Action Network, the United States has less than 5% of the world’s population yet consumes more than 30% of the world’s paper.",
  "20% of the world’s oxygen is produced in the Amazon forest.",
  " Industrialized countries consume 12 times more wood and its products per person than the non-industrialized countries.",
]; 
//list of the facts that will show up when the button is clicked//
console.log(factList[5]);
var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn){
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
//function that allows for the facts to show up when button is clicked//
