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

// var lastItem = document.querySelector('.list-group-item');
// lastItem.style.color = 'green';

// var secondItems = document.getElementById('items');
// //var thirdItem = items.children[2];
// thirdItem.style.display = 'none';

//PARENTNODE
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//PARENT ELEMENT
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//child node
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'Green';

//First child
console.log(itemList.firstChild);
//first element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent  = 'Hellow!!';

//last element child
console.log(itemList.lastElement);
itemList.lastElementChild.textContent = 'Hi';

//next sibling
console.log(itemList.nextSibling);
//next element sibling
console.log(itemList.nextElementSinling);

//Previsou sibling
console.log(itemList.previouSibling);
//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = 'Yellow';

//Create a element
var newDiv =document.createElement('Div');
//Create a div
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1';

//add attributes
newDiv.setAttr ('title', 'hellow Div');
console.log(newDiv);