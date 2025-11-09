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

function copy(element) {
    // on récupère le texte hex de CETTE box
    const hex_value = element.querySelector(".hex-value").textContent;

    // on copie dans le presse-papiers
    navigator.clipboard.writeText(hex_value)
        .then(() => {
            // confirmation : tu peux changer ceci (alert, console, ou un petit tooltip)
            alert(`Couleur ${hex_value} copiée !`);
        })
        .catch(() => {
            alert("Erreur lors de la copie");
        });
}

// On lie la fonction copy à chaque bouton via forEach (même méthode que generate)
box_color.forEach((element) => {
    const copyBtn = element.querySelector(".copy-btn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            copy(element); // on appelle copy en lui passant la box courante
        });
    }
});

