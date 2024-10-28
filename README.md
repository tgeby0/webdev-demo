# webdev-demo

In this tutorial you are going to build a simple to do list using HTML, CSS, and JS!

### Setup

Before starting the tutorial, either create your own repo, or fork this one. To fork, navigate to the top of this repo page and click the "Fork" button.

You should have three main files, `index.html`, `script.js`, and `style.css`.

### Getting Started

We're going to start out with HTML. Open the `index.html` file and add the following code.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    
</head>
</html>
```
`<!DOCTYPE html>` tells us that this file contains HTML, `<link rel="stylesheet" href="style.css">` tells this HTML file to pull its style information from our CSS file called `style.css`, and `<script src="script.js" defer></script>` links the HTML functionality to our `script.js` file and allows the HTML to fully render before responding.

If you were to run this file right now, either by navigating to it in your file editor and opening it manually or by typing the filename into your terminal and running it, you would see a blank screen. Let's change that!

Between the closing tags `</head>` and `</html>`, we are going to add a `<body>` tag. Notice how when you finish typing the opening body tag, the matching closing tag generates for you!

Inside the `<body></body>` element, let's create a divison or `<div>`. A `<div>` is essentially just a subsection of an HTML document and can be very helpful for orgnization and styling. We're also going to add an id to the `<div>` element, so we can access it easier later. Within the `<div>` let's add a large heading element. The `<h1>` element will automatically create a heading for you on the page! 

```html
<body>
    <div id="container">
        <h1>To Do List</h1>
    </div>
</body>
```
After saving and refreshing or reloading the `index.html` file, you should see your header appear!

### Adding some CSS

Our page is looking a little boring right now, so let's add some styling. Open the `style.css` file and add a `body` selector.
```css
body{
    /* we'll add our styling here */
}
```
In CSS there are three primary ways to reference elements you want to style from an HTML file using [selectors](https://www.w3schools.com/css/css_selectors.asp). What you have just done is called an element selector. This means that every element in the HTML file with a `<body>` tag will be styled with whatever specification you put within this section. We will discuss the other two primary selectors later. 

Let's start by changing the `background-color` of the page. Add the following line inside the body section. Feel free to pick whatever color you want! 

```css
background-color:darkseagreen;
```

We also want to align the header to the center of the screen. In our css file, let's use another selector to access our `<div>` container. `#container{}` is an example of an id selector. This will find the element with the given id value and apply your styling to it. Ids are unique to single elements

To align our section to the cetner of the screen, we can use `text-align: center;`. After adding these lines to the container styling you should see the header shift to the center of the screen.

```css
#container{
    text-align:center;
}
```
### Adding Tasks
Now that we have a pretty header, lets's add some functionality to this page.

First we need to make a textbox that accepts user input. This is much simpler than it sounds using  `<input></input>`. We can add this line below our `<h1>` header within the`<div>` section we just created so that it aligns to the center along with the header. We can then specify the type of input the form will accept as follows.

```html
<input id="taskInput" type="text" placeholder="Enter a new task">
```
Now you should see a text-box with the placeholder directing you to enter a new task 

Let's also add a simple button for the user to submit with. Below our input, we can add 
```html
<button id= "submitButton" class="button">Add Task</button>
```
Let's now style our button. Go back to `style.css` and add the following section 
```css
.button{

}
```
This is the final type of selector we are going to use in this tutorial. This is an example of a class selector. This will apply styling to all elements of class type button in our HTML file. We obviously only have one, but if you want to play around and add more, notice how they will all format the same. 

Let's make our button less boxy and add some rounded edges using the `border-radius` attribute. Try setting it to different values such as `10px`, `20px`, and `30px` to see how the button changes! Also try messing around with other attributes such as `background-color`, `border`, `font-size`.

We can also add some reaction properties just by adding the following css section
```css
.button:hover{
    background-color:/*enter any color you want the button to change to on hover*/
}
```
Now when you hover your cursor over the button, it should change to whatever color you specified!

Now we need to add a list element to our `<div>`. `<ul>` describes an unordered list, so we can use this for our tasks. Using the `<ul>` tag, add an unordered list with `id=taskList` underneath our button. Nothing needs to be contained in the list just yet since we are going to use JS to allow users to populate it themselves!

```js
<ul id="taskList"></ul>
```

### JS Functionality

Now that we have an input form and a button, let's add some functionality. In the `script.js` file, we will create a function that takes the input and displays it on the screen. First we need to `addEventListener`. as expected, an event listener "listens" for a particular action and respinds accordingly. In our example, we want to listen for a click of the button, and react by displying the user input on screen!
```js
document.getElementById("submitButton").addEventListener("click", addTask);
```

First we get the button using its id, then add fucntionality. `addTask` is the funciton we are about to create.

```js
function addTask(){
    /*here we need to access the content of the input and do something with it*/
}
```

Just like before we need to use `getElementById` to access the `taskInput` input element from our HTML file. We also need to use the `.value` to grab the actual content of the input. To make sure we correctly accessed it, try sending the name as an alert using `alert()`. If you're having difficulty the solution is below!

<details>
  <summary>Try it yourself</summary>

  > 
    function addTask(){
    const taskInput = document.getElementById('taskInput').value;
    alert(`New Task: ${taskInput}`);
    }
</details>

Since we know it's working now, we can remove the `alert` function and start adding tasks to our `taskList`. We can do this by creating new HTML elements within our function using `document.createElement('')`, where the argument is the type of HTML element you want to create. Since we are making a list, we will use the `li` element as follows
```js
const newTask = document.createElement('li');
```
Now we want to give our new list item the input value. 
```js
newTask.innerText= taskInput;
```
If you refresh right now, nothing will change. This is because we still need to append our list item to our unordered list. Once again we will use `getElementById` to access our unordered list. We can then append the item with `appendChild()`. Try it yourself, and check the solution below if you're having trouble!

<details>
  <summary>Solution</summary>

  > 
    function addTask(){
    const taskInput = document.getElementById('taskInput').value;
    const newTask = document.createElement('li');
    newTask.innerText= taskInput;
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask)
    }
</details>

Now you should be able to add tasks to your list!
But what if you finished a task? Let's add a removal function!

Within our same `addTask` function, we can use `createElement` to make a button that is attached to each new list item. Since we're making the element in JS, we can add attributes like id and class in separate statements.
```js
const deleteButton = document.createElement("button");
deleteButton.className="button";
deleteButton.innerText="x";
newTask.appendChild(deleteButton)
```

Now your tasks should have an X button! Notice how our button has the same formatting as the submit button from earlier since we added it to our `button` class! 

To actually delete tasks we can use another `EventListener`. We want out listener to watch our new button and `removeChild` from the `taskList` when clicked. Try creating the `EventListener` youself. The solution is below!

<details>
  <summary>Solution</summary>

  > deleteButton.addEventListener("click", () => taskList.removeChild(newTask));

</details>

Now your tasks should delete!

We can also add a few more lines to help with the user experience. First, we can put the bulk of our function in to an if statment based on the `taskInput` varible, just to ensure that users aren't adding blank tasks. We can also then reset the text box after a user submits a new task, just so they can easily enter their next task!

```js
function addTask(){
    const taskInput = document.getElementById('taskInput').value;
    if(taskInput){
        const newTask = document.createElement('li');

        newTask.innerText= taskInput;

        const taskList = document.getElementById('taskList');
        taskList.appendChild(newTask)
        
        const deleteButton = document.createElement("button");
        deleteButton.className="button";
        deleteButton.innerText="x";
        newTask.appendChild(deleteButton)
        deleteButton.addEventListener("click", () => taskList.removeChild(newTask));

        document.getElementById('taskInput').value=''
    }
}

```

### Last Step!

Go to your `style.css` file and use another element selector to remove the bullet points from the list. 
```
ul{
    list-style-type: none;
}
```
## Yay You're Done!
Now you have a working todo list! Feel free to mess around with styling and functionality more on your own!


