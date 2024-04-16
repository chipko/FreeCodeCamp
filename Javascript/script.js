/* JavaScript interacts with the HTML using the Document Object Model, or DOM.
The DOM is a tree of objects that represents the HTML. You can access the HTML 
using the document object, which represents your entire HTML document.

One method for finding specific elements in your HTML is using the querySelector() method.
The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:
    let h1 = document.querySelector("h1");
*/

/*
The innerText property controls the text that appears in an HTML element. For example:

<p id="info">Demo content</p> 
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
The following example would change the text of the p element from Demo content to Hello World.
*/

// OBJECTS and acccessing Keys/Pairs

/*
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

object.property;
Here is a sample of using dot notation (.) to read the name property of the developer object:

const developer = {
  name: "Jessica",
}

// Output: Jessica
console.log(developer.name); 
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

objectName["property name"];
Here is a sample of using bracket notation to read an object's property:

const spaceObj = {
  "Space Name": "Kirk",
};

spaceObj["Space Name"]; // "Kirk"
*/

/*

The shift() method on an array removes the first element in the array and returns it.

const numbers = [1, 2, 3];
const firstNumber = numbers.shift(); // returns 1

Math.random() * 5
gives a random number between 0 and 5 

Math.floor() rounds the number down to the nearest integer

*/

/*
In order for the &#x2620; emoticon text to properly display on the page, you will need to use the innerHTML property.

The innerHTML property allows you to access or modify the content inside an HTML element using JavaScript.

Here is an example of updating the content for this paragraph element using the innerHTML property.

<p id="demo">This is a paragraph.</p>
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
*/

/*
The ternary operator is a conditional operator and can be used as a one-line if-else statement. The syntax is: condition ? expressionIfTrue : expressionIfFalse.

Here is an example of returning a value using an if-else statement and a refactored example using a ternary operator:

// if-else statement
if (score > 0) {
  return score
} else {
  return default_score
}

// ternary operator
return score > 0 ? score : default_score
*/

/*

document.getElementById('HTML ID');

const regex = /hello/;
Pattern is wrapped in forward slashes
regex of +-  needs a backslash for the + as  it has another meaning:
const regex = /\+-/;
would search for + or - in a string
\s would search for spaces (whitespace character)
to search each character indidually, turn them into a character class by encasing in []
const regex = /[helo]/;
Regex can take speific flags to alter pattern matching:
Flags are added after the closing / 
/[helo]/g   "global" - this tells it to continue looking after finding a match.

.replace()
method that allows you to replace characters in a string with another string - 2 arguments.
"hello".replace(/l/g, "1");
replaces the L's with 1's
/e/i  - "insensitive" - lowercase / uppercase
[0-9] searches for any digit 
+ modifier allows you to match a pattern that occurs one or more times .. eg /[0-9]+/
\d matches any digit


JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string.

For example:

const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);
The console will show the string "Hello, my name is Naomi~!".

USE backticks ``````  not single quotes (''')!!!!!!!!!!!!



The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation.




******** Pass the string input[type="text"] to the querySelectorAll() method. Remember that you will need to use single quotes for your string, so that you can use double quotes within.

This will return a NodeList of all the text inputs in the form. You can then access the length property of the NodeList to get the number of entries. Do this on the same line.



To see your new HTML content for the targetInputContainer, you will need to use the innerHTML property.

The innerHTML property sets or returns the HTML content inside an element.

Here is a form element with a label and input element nested inside.

<form id="form">
  <label for="first-name">First name</label>
  <input id="first-name" type="text">
</form>



In the Role Playing Game project, you learned how to set a button's behavior by editing its onclick property. You can also edit an element's behavior by adding an event listener.

The following example uses the addEventListener method to add a click event to a button. When the button is clicked, the printName function is called.

<button class="btn">Print name</button>
const button = document.querySelector('.btn');
function printName() {
  console.log("Jessica");
}
button.addEventListener('click', printName);
The addEventListener method takes two arguments. The first is the event to listen to. (Ex. 'click') The second is the callback function, or the function that runs when the event is triggered.

Call the .addEventListener() method on the addEntryButton. Pass in the string "click" for the first argument and the addEntry function for the second argument.

Note that you should not call addEntry, but pass the variable (or function reference) directly.

*&^%$%^&*&^%$%^&*&^%$

addEventListener()

.insertAdjacentHTML()
The insertAdjacentHtml method takes two arguments. The first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.

For the first argument, pass the string "beforeend" to insert the new element as the last child of targetInputContainer.

***** ^^^^^ 
*&^%$^&*(&^%&*(&^%))


The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList is a list of elements like an array. It contains the elements that match the query selector. You will need to loop through these elements in the list.

In previous steps, you learned how to loop through an array using a for loop. You can also use a for...of loop to loop through an array and a NodeList.

A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.

for (const element of elementArray) {
  console.log(element);
}


The Number constructor is a function that converts a value to a number. If the value cannot be converted, it returns NaN which stands for "Not a Number".

Here is an example:

Number('10'); // returns the number 10
Number('abc'); // returns NaN

eclare an empty calculateCalories function, which takes a parameter named e. This function will be another event listener, so the first argument passed will be the browser event – e is a common name for this parameter.




When you need to lower case a string, you can use the toLowerCase() method. This method returns the calling string value converted to lower case.

const firstName = 'JESSICA';
console.log(firstName.toLowerCase()); // Output: jessica






Finally, you need to make the #output element visible so the user can see your text. Your output variable is an Element, which has a classList property. This property has a .remove() method, which accepts a string representing the class to remove from the element.

const paragraphElement = document.getElementById('paragraph');
paragraphElement.classList.remove('hide');
Use the .remove() method of the output variable's classList property to remove the hide class. Don't forget to place the word hide inside quotes.



Remember that document.querySelectorAll returns a NodeList, which is array-like but is not an array. However, the Array object has a .from() method that accepts an array-like and returns an array. This is helpful when you want access to more robust array methods, which you will learn about in a future project.

The following example takes a NodeList of li elements and converts it to an array of li elements:

<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>
const listItemsArray = Array.from(document.querySelectorAll('li'));

console.log(listItemsArray); //Output: (3) [li, li, li]


The difference between innerText and innerHTML is that innerText will not render HTML elements, but will display the tags and content as raw text.


The classList property has an .add() method which is the opposite of the .remove() method. It accepts a string representing the class to add to the element.
*/