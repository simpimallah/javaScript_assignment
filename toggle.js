// 2. Implement the Toggle Message button such that it will display “Welcome to JavaScript” 
// initially. Clicking on the button should show the message “Friday it is !!!”. Clicking the button 
// again should show the original message – “Welcome to JavaScript”. So basically I should 
// keep on toggling

function changemessage() {

  var x = document.getElementById("demo")
    
  if (x.innerHTML === "Welcome to javascript") {
    x.innerHTML = "Friday it is!!"
    
    
  } else {
    x.innerHTML = "Welcome to javascript"
  }
}

function printToconsole(){
    var z = document.getElementById("b")
    console.log(z.innerHTML)
}