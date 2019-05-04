// Your code goes here

// Mouse over the heading adds style, on mouse out sets to default
const siteHeading = document.querySelector('.logo-heading');
siteHeading.addEventListener('mouseover', function(e) {
    e.target.style.color = 'red';
    e.target.style.textDecoration = 'underline';
});
siteHeading.addEventListener('mouseout', function(e) {
    e.target.style.color = 'black';
    e.target.style.textDecoration = 'none';
});

// Add a border to the image on click
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('click', function(e) {
    e.target.style.border = "5px solid black";
});

//Double click anywhere on the body to change the background color
const documentHome = document.querySelector('body');
documentHome.addEventListener('dblclick', function(e) {
    documentHome.style.backgroundColor = "#c2b280";
});

// Rotate the main header image when the 'R' key is pressed
document.addEventListener('keydown', function(event) {
    if(event.key === 'r') {
        headerImg.style.transform = 'rotate(5deg)';
    }
});

// On window resize it will hide the 'Home' navigation link
const homeLink = document.querySelector('.nav').childNodes[1];
window.addEventListener("resize", function() {
    homeLink.style.display = 'none';
});

// on scroll alert
window.addEventListener('scroll', function() {
    alert('you just scrolled');
});

// on select of any text in the document
const formTextarea = document.getElementById('formTextarea');
formTextarea.addEventListener('select', function(event) {
    alert(`You selected the following text: "${event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)}"`);
});

// On focus of the main input field, add a border
const formName = document.getElementById('formName');
formName.addEventListener('focus', function(event) {
    event.target.style.borderColor = 'red';    
    event.target.style.borderSize = '3px';    
});

// On blur of the main input field, remove styling border to default
formName.addEventListener('blur', (event) => {
    event.target.style.borderColor = '';    
    event.target.style.borderSize = '';    
});

// Demonstrating event propagation 
const outsideLayer = document.getElementById('outsideLayer');
const insideLayer = document.getElementById('insideLayer');
const pLayer = document.getElementById('pLayer');
const displayResult = document.getElementById('formTextarea');

outsideLayer.addEventListener('click', function(e) {
    displayResult.value = 'You just clicked the outside layer\n' + displayResult.value;
});
insideLayer.addEventListener('click', function(e) {
    displayResult.value = 'You just clicked the inside layer\n' + displayResult.value;
    e.stopPropagation();
});
pLayer.addEventListener('click', function(e) {
    displayResult.value = 'You just clicked the paragraph layer\n' + displayResult.value;
    e.stopPropagation();
});

