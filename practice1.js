// console.log(document.head);
// console.log(document.domain);
// console.log(document.images);
// console.log(documnet.getElementById('header-title'));
//

// items[1].style.fontweight='bold';
// items[1].style.backgroundcolor = 'green';

//QUERY SELECTOR
// var itemsList = document.getElementById("items");
// var newItem = document.createElement("li");
// newItem.textContent = "Item 5";
// itemsList.appendChild(newItem);

var lastItem = document.querySelector('.list-group-item');
lastItem.style.color = 'green';

var secondItems = document.getElementById('items');
//var thirdItem = items.children[2];
thirdItem.style.display = 'none';