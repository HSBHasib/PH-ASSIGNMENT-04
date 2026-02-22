# PH-ASSIGNMENT-04

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
```js
• Genarally, these 4 methods are do same work to select any element from html document
but these are used in different types of selection. 

• GetElementById is used to select a single element in the html document based on id attribute.
it is used to select id which is unique name in html document.

• GetElementsByClassName is used to select multiple elements in the html document based on class attribute.
GetElementsByClassName html collection of all elements that we selected based on class name.

• QuerySelector is also used to select a single element in html document
but one big and important difference between getElementById and querySelector is that querySelector just like css selector
we can select any element based on id, class, attribute even just element name.
One Important thing is that querySelector is just select the first element that matches the selector.

• QuerySelectorAll is used to select multiple elements in the html
it return a node list of all the elements that we selected based on the name.
Mainly we use it for multiple selection.
```


### 2. How do you create and insert a new element into the DOM?
```js
• For creating a new element using js we use document.createElement() method
it create a element in html and for inserting that element we use appendChild(), preprend() etc
basically these methods are used to insert the element in the html document.
```


### 3. What is Event Bubbling? And how does it work?
```js
• Event bubbling is a concept in javascript when we add an event listener any element,
first runs even capturing phase, than event start event bubbling phase.
Event bubbling is like when we add event listener in any element and tigger that event,
the event will go to the parent element and then to the grandparent element and so on until it reache the root element.
It is how bubbling works.
mainly when bubbling happenes, it just jumps to the parent element and so on until it reache the root element.
```


### 4. What is Event Delegation in JavaScript? Why is it useful?
```js
• Event delegation is also a js concept that allows to handle events efficiently by attaching a single event listener to a parent element
instead of multiple listeners to individual child elements.
Like if we have a list of items and we want if i click on any item then
it some action will happen then instead of attaching event listenet to each item we set event listener to the parent
```


### 5. What is the difference between preventDefault() and stopPropagation() methods?
```js
• preventDefault() is used to stop the default behavior of an event,
like if we have a form and we add an event listener on form event is submit by default
it will refresh the page if page is refresh then we will not access the form data
that user entered in form so in that case we use preventDefault() method to stop
the default behavior of form submit event and we can access the form data that user entered in form.

• stopPropagation() is used to stop the bubbling phase
that happens when an event is triggered on an element sometimes
we have need to stop the event bubbling to parent elements
because we want to handle just the target element that time we use stopPropagation() method
to stop the event bubbling to parent elements and we can handle just the target element.
```


