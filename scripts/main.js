let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dirtypenis.jpeg') {
      myImage.setAttribute ('src','images/image.png');
    } else {
      myImage.setAttribute ('src','images/dirtypenis.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'This is a filthy penis, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is a filthy penis, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}