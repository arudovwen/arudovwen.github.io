var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");

var words = document.getElementsByClassName("word");
var project_background = document.getElementsByClassName("project-background");
var project_name = document.getElementsByClassName("project-name");
var project_desc = document.getElementsByClassName("project-desc");
var project_stack = document.getElementsByClassName("project-stack");
var project_contribution = document.getElementsByClassName("project-contribution");
var opening_text = document.getElementById('opening-text')
var first = document.getElementById('first')
var second = document.getElementById('second')
var loader = document.getElementById('loader')
var demo_src = document.getElementsByClassName("demo-src");
var slideIndex = 0;


var abay = './assets/images/projects/project2.jpg';
var isl = './assets/images/projects/project6.jpg';
var bizzy = './assets/images/projects/project4.jpg';
var mini = './assets/images/projects/project8.jpg';

document.getElementById('year').innerHTML = new Date().getFullYear()
window.addEventListener('load',()=>{
 loader.classList.add('animated','slideOutUp')

})


for (let i = 0; i < words.length; i++) {
  words[i].style.display = "none";
  words[slideIndex].style.display = "block";
}

rightarrow.addEventListener("click", () => {
  if (slideIndex < words.length-1 ) {
   
    slideIndex++;
  
    words[slideIndex - 1].style.display = "none";
    words[slideIndex].style.display = "block";
  } else {
    slideIndex = 0;
    words[words.length - 1].style.display = "none";
    words[0].style.display = "block";
  }
  
  
});

leftarrow.addEventListener("click", () => {
  if (slideIndex !== 0) {
    slideIndex--;
  
    words[slideIndex].style.display = "block";
    words[slideIndex+ 1].style.display = "none";
  }
});


var i = 0;
var j = 0;
var k = 0;
var txt = "Hello, I'm Success. Nice to meet you."; /* The text */
var name = 'Success';
var second_name = 'Arodowoghene Ahon'
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

  if (i < txt.length) {
    opening_text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }


}

function lastWriter() {

  if (k< second_name.length) {
    second.innerHTML += second_name.charAt(k);
    k++;
    setTimeout(lastWriter, speed);
  }


}

  

function nameWriter() {


  if (j < name.length) {
    first.innerHTML += name.charAt(j);
    j++;
    if (j == name.length) {
     lastWriter()
    }
    setTimeout(nameWriter, speed);
  }

}
setTimeout(()=>{
 
    typeWriter()
},4000)
nameWriter()
