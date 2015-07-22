
function getVillainName(birthMonth, birthDay){
  var firstVillainName = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
  var lastVillainName = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  
  var firstName = firstVillainName[birthMonth];
  
  if (birthDay < 10) {
    var lastName = lastVillainName[birthDay]
  } else {
    var lastName = lastVillainName[(birthDay % 10)]}
  return firstName + " " + lastName
}