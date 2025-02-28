// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo() {
    let agregarAmigo = document.getElementById("amigo").value;
    // console.log(agregarAmigo); esta linea imprime el nuevo amigo agragado
    if (agregarAmigo == "") {
        alert("Debes ingresar un nombre valido");
        return;
    }
    if (agregarAmigo.replaceAll(" ", "") == "") {
        alert("Debes ingresar un nombre valido");
        return;
    }

    listaAmigos.push(agregarAmigo);
    // console.log(listaAmigos); esta linea muestra como va quedando el arreglo
    document.getElementById("lista").innerHTML = `<p>${listaAmigos}</p>`
    document.getElementById("amigo").value = "";
};


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
    }
    let amigosorteado = parseInt(Math.random()*(listaAmigos.length));
    // console.log(listaAmigos[amigosorteado]); muestra el amigo tomado al azar
    document.getElementById("resultado").textContent = ` Felicitaciones tu amigo/a secreto/a sera: ${listaAmigos[amigosorteado]}`
}