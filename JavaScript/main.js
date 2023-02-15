let slideIndex = 1; //declared for setInterval function

function showPictureSlider(index) {
     slideIndex = index;
     // html collection
     let pictures = document.querySelector(".slides").children;
     // converting to array (HTML collection is not array!) in order to iterate it with forEach
     // it is also possible to use methode Array.from() to convert it to array
     let picturesArray = [...pictures];
     // forEach to remove active class
     picturesArray.forEach((element) => element.classList.remove('active'));
     // add active class to specific slide number
     document.querySelector(`#slide${index}`).classList.add('active');



}

// set interval for automatic slide
setInterval(() => {
     slideIndex += 1;
     if (slideIndex == 4) { slideIndex = 1 }
     showPictureSlider(slideIndex)
}, 5000);

