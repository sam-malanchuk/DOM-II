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

