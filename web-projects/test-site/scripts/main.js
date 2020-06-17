let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox.png') {
        myImage.setAttribute('src', 'images/other-firefox.png');
    } else {
        myImage.setAttribute('src', 'images/firefox.png');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');

    if(!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}