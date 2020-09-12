var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");

var words = document.getElementsByClassName("word");
var slideIndex = 0;

for (let i = 0; i < words.length; i++) {
  words[i].style.display = "none";
  words[slideIndex].style.display = "block";
}

rightarrow.addEventListener("click", () => {
  if (slideIndex < words.length - 1) {
    slideIndex++;
    words[slideIndex - 1].style.display = "none";
    words[slideIndex].style.display = "block";
  } else {
    slideIndex = 0;
    words[0].style.display = "block";
  }
});

leftarrow.addEventListener("click", () => {
  if (slideIndex !== 0) {
    slideIndex--;
  
    words[slideIndex].style.display = "block";
  }
});

// var i = 0;
// var txt = 'SUCCESS AHON - A highly motivated full stack developer, Familiar with development and deployment process for many web-based technologies.'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {

//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }

// }
// setTimeout(()=>{
//     document.getElementById("demo").innerHTML = ''
//     typeWriter()
// },4000)
