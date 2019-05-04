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

