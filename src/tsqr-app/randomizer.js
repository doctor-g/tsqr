
export const selectRandomlyFrom = function (cards, quantity, sort=false) {
  if (quantity <= 0) {
    throw "Illegal parameter, quantity must be positive.";
  }
  var selected = [];
  while (selected.length < quantity) {
    var index = Math.floor(Math.random() * cards.length);
    var card = cards[index];
    if (selected.indexOf(card) == -1) {
      selected.push(card);
    }
  }
  if (sort) {
    selected.sort((a, b) => a.Name.localeCompare(b.Name));
  }
  return selected;
}