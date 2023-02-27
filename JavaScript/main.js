let slideIndex = 1; //declared for setInterval function
let remainingTime = 70000;

function setTime() {
     if (remainingTime == 0) return;
     let h = Math.floor(remainingTime / 3600);
     let m = Math.floor(remainingTime % 3600 / 60);
     let s = (remainingTime % 3600) % 60;
     document.querySelector('#hours').innerHTML = h;
     document.querySelector('#minutes').innerHTML = m;
     document.querySelector('#seconds').innerHTML = s;
}

setInterval(() => {
     remainingTime -= 1;
     setTime();
}, 1000)




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

