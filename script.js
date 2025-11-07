let card=document.getElementById("card")
let code=document.getElementById("code")


let mot="0123456789ABCDEF"
let max=6
generate()
function generate(){
    let z=""
    for(let i=0;i<max;i++){
        z+=mot[Math.floor(Math.random()*mot.length)]
    }
    console.log(z)
    let m="#"+z
    card.style.backgroundColor=m
    


}
