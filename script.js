const listElement = document.getElementById('shopping-list');
const inputElement = document.getElementById('item-input');
const addButton = document.getElementById('add-btn');
const resetButton = document.getElementById('reset-btn');

let items = [];

// טען מה-localStorage אם קיים
window.onload = function() {
    const storedItems = localStorage.getItem('shoppingList');
    if (storedItems) {
        items = JSON.parse(storedItems);
        renderList();
    }
};

function renderList() {
    listElement.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

addButton.addEventListener('click', function() {
    const newItem = inputElement.value.trim();
    if (newItem) {
        items.push(newItem);
        localStorage.setItem('shoppingList', JSON.stringify(items));
        renderList();
        inputElement.value = '';
    }
});

resetButton.addEventListener('click', function() {
    if (confirm('אתה בטוח שברצונך לאפס את הרשימה?')) {
        items = [];
        localStorage.removeItem('shoppingList');
        renderList();
    }
});
