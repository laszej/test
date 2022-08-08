const menu = document.querySelector(".menubutton")
const list = document.querySelector(".list")
const gallery = document.getElementById("gallery")
const photos = [`<img src="images/0.png"`, `<img src="images/1.jpg"`, `<img src="images/2.jpg"`,
 `<img src="images/3.png"`, `<img src="images/4.jpg"`, `<img src="images/5.jpg"`, `<img src="images/6.jpg"`]
 

menu.addEventListener("click", ()=>{list.classList.toggle("listStyle")})


let current = 0;

function changeImage(){
    current++
    if (current>photos.length){current=1}
    gallery.innerHTML = `${photos[current-1]} class="image" >`;
    console.log(photos[current-1])
}

setInterval(changeImage, 3000)

function takeMail() {
    /* Get the text field */
    var copyText = document.getElementById("myMail");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Adres email skopiowany: " + copyText.value);
  }

  function takePhone() {
    /* Get the text field */
    var copyText = document.getElementById("myPhone");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Numer telefonu skopiowany do schowka " + copyText.value);
  }


