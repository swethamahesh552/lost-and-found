const items = [
  { id: 1, type: "lost", title: "Blue water bottle", category: "bottle", location: "Block C" },
  { id: 2, type: "found", title: "Black wallet", category: "wallet", location: "Library" },
  { id: 3, type: "lost", title: "Steel bottle", category: "bottle", location: "Canteen" },
  { id: 4, type: "found", title: "Steel water bottle", category: "bottle", location: "Block C" }
];

function getLostItems() {
  return items.filter(function (item) {
    return item.type === "lost";
  });
}

function getFoundItems() {
  return items.filter(function (item) {
    return item.type === "found";
  });
}

function getItemById(id) {
  return items.find(function (item) {
    return item.id === id;
  });
}

function getAllTitles() {
  return items.map(function (item) {
    return item.title;
  });
}

function getItemsByLocation(location) {
  return items.filter(function (item) {
    return item.location === location;
  });
}

console.log("Lost items:", getLostItems());
console.log("Found items:", getFoundItems());
console.log("Item with id 2:", getItemById(2));
console.log("All titles:", getAllTitles());
console.log("Items at Block C:", getItemsByLocation("Block C"));