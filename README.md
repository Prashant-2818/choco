This code is a JavaScript program that creates a simple shopping cart for chocolates.
It uses the Document Object Model (DOM) to interact with HTML elements and update the user interface in real-time.

The code defines several variables to store references to HTML elements, such as the list of chocolates, the selected chocolates sidebar, the total price sidebar, and the cart container.
It also initializes two variables, "total" and "itemCount", to keep track of the total price and the number of items in the cart.

The code then adds an event listener to each chocolate element, which listens for click events. When a chocolate is clicked, the event listener checks 
if the maximum number of items (8) has been reached. If not, it retrieves the price and name of the chocolate, creates a new list item, and appends 
it to the selected chocolates sidebar. 

It then updates the total price, increments the item count, disables the clicked chocolate, and changes its appearance to indicate that it has been added to the cart. 
Finally, it displays a popup message to confirm that the chocolate has been added.

The code also adds an event listener to the selected chocolates sidebar, which listens for click events on list items. When a list item is clicked, 
it retrieves the price of the corresponding chocolate, updates the total price, decrements the item count, removes the list item from the sidebar,
re-enables the corresponding chocolate, and changes its appearance back to normal. 
Finally, it displays a popup message to confirm that the chocolate has been removed from the cart.

The showPopUp function is used to display popup messages to the user. It creates a new div element, adds a class to it, sets its text content to the given message, 
appends it to the cart container, and removes it after a specified duration (2000 milliseconds).

In summary, this code creates a simple shopping cart for chocolates using JavaScript and the DOM. 
It allows users to add and remove chocolates from the cart, updates the total price and item count in real-time, and displays popup messages to confirm actions.



