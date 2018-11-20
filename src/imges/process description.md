1- Defining an array of ADD TO CARD buttons and make an event listener for them
2- Defining an array of REMOVE buttons and make an event listener for them
3- by clicking ADD button, a function triggers which grab the title and price of the item which is correspond to that button.then another function is called which grab that title and price and append them to an html element .at the end of the main function it calls another function which calculate. The total price.
4-by clicking the REMOVE buttons the grand parent! of the button is removed and the total price will be updated .  
5- there is an input field with which the user can choose the number of the selected items.by adding an event listener ‘change’ , the quantity would change and total price would be updated.
6-for calculating total price ,every item in the cart are selected , made a loop through them and add them to total which has an initial value of 0 .If they have quantity of more than 1 ,it would multiple by the quantity and added to to total: total= total+ price\*quantity
