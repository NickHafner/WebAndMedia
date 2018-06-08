# Web and Media Interview Code Samples #
**Last Edit: 6/7/2018**

## Objective ##
This is to contain the completed code sample for Student Programmer position interview <br>

You will need NodeJS for this to work properly

## Instructions ##
In GitBash (or similar program)
```bash
git clone (repo)
cd (into-repo)
npm install
npm start
```
Should then be hosted on localhost:8080 <br>
If it isn't hosted on that port you can check which one as it will be logged in the console towards the beginning 

## Specifications ##
Attach class property to Global Namespace called `WebAndMedia`<br>
This class will have two methods to complete the tasks

## How to use ##
Enter a number into the input <br>
Press `Fibonacci Sequence` button <br>
Results logged in console <br>
<br>
Press `MSU Bears` button <br>
Results logged in console

### Methods of WebAndMedia class: ###

```JavaScript
MathFun.fibonacci(input) {}
```
Takes an input and returns the fibonacci of that input

```js
MathFun.msuBears() {}
```
Prints the numbers from 1 to 100. However, for multiples of three print “MSU” instead of the number and for multiples of five print “Bears”. For numbers which are multiples of both three and five print “MSUBears”. 

**Example Usage:**
```js
MathFun.fibonacci(5); // returns 8  
MathFun.fibonacci(0); // returns 1  
MathFun.msuBears(); // console.logs 1 to 100 with %3 logging MSU, %5 logging Bears, and both log MSUBears
```