function tocaSom (idElementoAudio) {
    
    const elemento = document.querySelector(idElementoAudio).play()
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    } else {
        alert("elemento não encontrado ou seletor inválido")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space'|| evento.code === 'Enter') {
        tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')

    }
}


/*Função individual (é inviável criar pra cada um)

function tocaSomPom() {

    document.querySelector("#som_tecla_pom").play()
}

document.querySelector(".tecla_pom").onclick = tocaSomPom
*/