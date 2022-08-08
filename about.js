const menu = document.querySelector(".menubutton")
const list = document.querySelector(".list")

menu.addEventListener("click", ()=>{list.classList.toggle("listStyle")})

window.addEventListener("load", ()=> {window.innerHeight > 970 ? addFooter() : ""})

const footer = document.getElementById("footer1") 

function addFooter(){
    footer.removeAttribute("id", "footer1")
   footer.setAttribute("id", "footer2")
}