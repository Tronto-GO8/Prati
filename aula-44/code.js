let boatao1 = document.getElementById("primeiro-cap")
let boatao2 = document.getElementById("segundo-cap")
let boatao3 = document.getElementById("terceir-cap")
let texto = document.getElementById("texto")

boatao1.addEventListener("click", () => {
    texto.textContent = "algo1"
});
boatao2.addEventListener("click", () => {
    texto.textContent = "algo2"
});
boatao3.addEventListener("click", () => {
    texto.textContent = "algo3"
});

