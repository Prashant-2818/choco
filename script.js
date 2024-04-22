const chocolates = document.querySelectorAll('.chocolate .add');
const selectedChocolates = document.getElementById('selected-chocolates-sidebar');
const totalPrice = document.getElementById('total-price-sidebar');
const cartContainer = document.getElementById('cart-container');
let total = 0;
let itemCount = 0;

chocolates.forEach((chocolate) => {
    chocolate.addEventListener('click', () => {
        if (itemCount >= 8) {
            showPopUp("OOPS!! YOUR STOMACH IS FULL");
            return;
        }
        
        const price = parseFloat(chocolate.dataset.price);
        const name = chocolate.parentElement.querySelector('h2').innerText;
        const li = document.createElement('li');
        li.innerText = `${name} - ₹${price}`;
        selectedChocolates.appendChild(li);
        total += price;
        total = Math.min(total, 10000);
        totalPrice.innerText = total.toFixed(2);
        itemCount++;
        chocolate.disabled = true;
        chocolate.style.backgroundColor = '#ccc';
        chocolate.style.color = '#fff';
        chocolate.innerText = 'Added';
        showPopUp(`Added ${name} to the cart`);
    });
});

selectedChocolates.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const price = parseFloat(e.target.innerText.split('-')[1].trim().slice(1));
        total -= price;
        total = Math.max(total, 0);
        totalPrice.innerText = total.toFixed(2);
        itemCount--;
        e.target.remove();
        const chocolate = document.querySelector(`.chocolate h2:contains("${e.target.innerText.split('-')[0].trim()}")`).parentElement.querySelector('.add');
        chocolate.disabled = false;
        chocolate.style.backgroundColor = '#4CAF50';
        chocolate.style.color = '#fff';
        chocolate.innerText = 'Add';
        showPopUp(`Removed ${e.target.innerText.split('-')[0].trim()} from the cart`);
    }
});

function showPopUp(message) {
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    popUp.innerText = message;
    cartContainer.appendChild(popUp);
    setTimeout(() => {
        popUp.remove();
    }, 2000);
}
