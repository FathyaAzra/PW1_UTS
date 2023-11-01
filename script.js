const tomboltema= document.querySelectorAll('.btn[type="tema"]')
const divnav= document.querySelectorAll(".navbar")
const logo= document.querySelectorAll(".logo a")
const category=document.querySelector(".category")

const divIsi= document.querySelector(".isi")
const head= document.getElementsByClassName("headline")[0]
const head1= document.getElementsByClassName("headline")[1]

const JudulK= document.querySelectorAll(".JudulKategori")

let judulnews=""
let isiNews = ""
let tema=0  //tema pink

function GantiTema(){
    if (tema===0){//tema pink
        tema=1
        divIsi.style.backgroundColor= "rgb(40, 40, 40)";
        head.style.color="rgb(255, 225, 225)";
        head1.style.color="rgb(255, 225, 225)";
    }
    else{ //tema dark
        tema=0;
        divIsi.style.backgroundColor= "rgb(255, 225, 225)";
        head.style.color="rgb(40, 40, 40)";
        head1.style.color="rgb(40, 40, 40)";
    }
}

for (let i = 0; i < tomboltema.length; i++) 
{
    tomboltema[i].addEventListener
    ("click", function()
    {
        console.log("Hello");
        GantiTema();
    }
    )
}