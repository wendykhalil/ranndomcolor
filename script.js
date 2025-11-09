let box_color = document.querySelectorAll(".color-box")
let generate_btn = document.getElementById("generate-btn")
let hex_code = "0123456789ABCDEF";
let co=document.querySelector(".copy-btn")
let taille = 6
function generate(element) {
    let code_generated = "#"
    for (i = 0; i < taille; i++) {
        code_generated += hex_code[Math.floor(Math.random() * hex_code.length)]
    }
    let b_color = element.querySelector(".color");
    b_color.style.backgroundColor = code_generated;
    let hex_value = element.querySelector(".hex-value");
    hex_value.textContent = code_generated;
}

generate_btn.addEventListener("click", () => {
    box_color.forEach((element) => {
        generate(element)
    })
})





function transfer(icon) {
    
    if (icon.classList.contains("copy-btn")) {
        icon.classList.remove("far", "fa-copy");
        icon.classList.add("fas", "fa-check");
        icon.style.color = "green";

        
        setTimeout(() => {
            icon.classList.remove("fas", "fa-check");
            icon.classList.add("far", "fa-copy");
            icon.style.color = "";
        }, 1000);
    }
}
function copy(element) {
    
    const hex_color = element.querySelector(".hex-value").textContent;
    const icon = element.querySelector(".copy-btn");

    if (hex_color) {
        navigator.clipboard.writeText(hex_color)
            .then(() => {
               
                transfer(icon);
            })
            .catch(() => {
                alert("⚠️ error");
            });
    } else {
        alert("⚠️ no color to copy");
    }
}
   
    

box_color.forEach(element => {
    const color_box = element.querySelector(".color");
    const icon = element.querySelector(".copy-btn");

    color_box.addEventListener("click", () => copy(element));
    icon.addEventListener("click", () => copy(element));
});

