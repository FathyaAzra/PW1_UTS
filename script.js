const tomboltema= document.querySelectorAll('[type="tema"]')
const divnav= document.querySelectorAll(".navbar")
const logo= document.querySelectorAll(".logo a")
const category=document.querySelector(".category")
const divIsi= document.querySelector(".isi")
const JudulKategori= document.querySelectorAll(".JudulKategori")

const pilihan= document.querySelector(".cardbody a")



let judulnews=""
let isiNews = ""
let tema=0  //tema pink

function GantiTema(){
if (tema===0){//tema pink
divIsi.style.backgroundColor= "rgb(20, 20, 20)"
tema=1
}
else{ //tema dark
divIsi.style.backgroundColor= "rgb(255, 225, 225)"
tema=0
}
}

for (let i = 0; i < tomboltema.length; i++) {
tomboltema[i].addEventListener("click", function()
{
GantiTema();
})
}