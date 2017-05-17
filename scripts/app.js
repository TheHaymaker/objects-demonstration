var APP = APP || {};

(function(){

  // Tuck code here after you've troubleshooted
  // inside the console and feel good enough
  // to move forward
  // ...



// Using new syntax
// APP.list = new Object();


// Object-literal Syntax
APP.list = {};

APP.body = document.getElementsByTagName('body')[0];


APP.list.message = "Goodbye, World!";

if( document.querySelectorAll('.list-item') ) {

  APP.list.numberOfListItems = document.querySelectorAll('.list-item').length;

  APP.list.allTheItems = document.querySelectorAll('.list-item');
  APP.list.listParent = document.querySelectorAll('.list')[0];


  APP.list.listParent.onmouseenter = function(){
    //var body = document.getElementsByTagName('body')[0];

    if( !APP.body.classList.contains('background-change') ) {
      APP.body.classList.add('background-change');
    }
  }

  APP.list.listParent.onmouseleave = function(){
    //var body = document.getElementsByTagName('body')[0];

    if( APP.body.classList.contains('background-change') ) {
      APP.body.classList.remove('background-change');
    }
  }

}

APP.list.showMeThis = function(){
  console.log(this);
}


APP.list.toggleMessage = function(){
  if( this.message === "Hello, World!" ) {
    this.message = "Goodbye, World!";
  } else {
    this.message = "Hello, World!";
  }
}

APP.list.replaceListWithMessage = function(){

  for (var i = 0; i < this.allTheItems.length; i++) {
    this.allTheItems[i].innerHTML = this.message;
  }

  this.toggleMessage();

}

APP.list.toggleParentGrowth = function(){

  if( !this.listParent.classList.contains('grow') ) {

    this.listParent.classList.add('grow');

  } else {

    this.listParent.classList.remove('grow');

  }

}


console.log(APP);

}())


// var APP = APP || {};


// // Using new syntax
// // APP.list = new Object();


// // Object-literal Syntax
// APP.list = {};


// APP.list.message = "Hello, World!";

// if( document.querySelectorAll('.list-item') ) {

//   APP.list.numberOfListItems = document.querySelectorAll('.list-item').length;

// }

// console.log(APP);


