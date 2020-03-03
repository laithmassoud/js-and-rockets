// Please run your solution from this file

console.log("Hello from %csrc/index.js", "font-weight:bold");

import  { renderData }  from './solution';


const result = renderData;
console.log(result());

let html = document.getElementById('out');
html.innerText = JSON.stringify(result);