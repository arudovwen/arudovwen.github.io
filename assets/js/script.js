var overlay = document.getElementById("overlay");
var imagename = document.getElementById("sitename");
var siteimage = document.getElementById("siteimage");
var image = document.getElementsByClassName("mini_image");
var close =document.getElementById("close");
var main = document.getElementById('main')







var i = 0;
var txt = 'SUCCESS AHON - A highly motivated full stack developer, Familiar with development and deployment process for many web-based technologies.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
   
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

}
setTimeout(()=>{
    document.getElementById("demo").innerHTML = ''
    typeWriter()
},4000)
Array.from(image).forEach((element) => {
  element.addEventListener("click", (el) => {
    siteimage.src = el.srcElement.src;

   
    imagename.innerHTML =  el.srcElement.alt
    if (el.srcElement.alt == "bizguruh website") {
        imagename.href = 'https://bizguruh.com'
    }
    if (el.srcElement.alt == "Abaytour website") {
        imagename.href = 'https://a-baytours.com'
    }
    if (el.srcElement.alt == "PMS website") {
        imagename.href = 'https://arudovwen.github.io'
    }
    if (el.srcElement.alt == "IMS website") {
        imagename.href = 'https://ministryofeducation.im.gov.ng'
    }
    if (el.srcElement.alt == "ilc") {
        imagename.href = 'https://isl-center.herokuapp.com'
    }
    if (el.srcElement.alt == "Memory match website") {
        imagename.href = 'https://brolik-pms.herokuapp.com'
    }
    overlay.style.display = "flex";
    overlay.style.zIndex = 3;
    main.style.height = '100vh'
    main.style.overflow = 'hidden'
  });
});


close.addEventListener('click',()=>{
    overlay.style.display = "none";  
    overlay.style.zIndex = 0;
    main.style.height = '100%'
    main.style.overflow = 'none'
    document.getElementById('project').scrollIntoView()
   
})