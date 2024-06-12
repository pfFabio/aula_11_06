
var botao = document.getElementById("botao")
var botao_al = document.getElementById("botao_aleatorio")
var botao_br = document.getElementById("botao_branco")
var botao_divs= document.getElementById("botao_divs")
var botao_divs2= document.getElementById("botao_divs2")
var bg1 = document.getElementById("bg1")
var controle = 0


//registra atraves do controle a cor de fundo e muda para preto ou branco de acordo
botao.addEventListener("click", ()=>{
    if (controle === 0){
        bg1.style.backgroundImage = "";
        bg1.style.backgroundColor = 'black';
        controle = 1
    }else{
        bg1.style.backgroundImage = 'url(https://th.bing.com/th/id/OIP.mmCsejkxA04YFHJ3ilDNlAHaEK?rs=1&pid=ImgDetMain)';
        controle = 0
    }

})


//define números aleatórios para vermelho, azul e verde gerando uma cor aleatória
function cor_aleatoria(){
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

//aplica a cor aleatória no fundo
botao_al.addEventListener("click", ()=>{
    bg1.style.backgroundColor = cor_aleatoria();
})


//muda a cor de fundo pra branco
botao_br.addEventListener("click", ()=>{
    bg1.style.backgroundColor = "white";
})

//seleciona todos os elementos com a classe "divi"
var divisoria = document.querySelectorAll('.divi')

//adiciona a classe "div2" nos elementos que tenham a classe "divi"
botao_divs.addEventListener("click", ()=>{
    divisoria.forEach((element) => {
        element.classList.add("divi2")
    });
})

//remove a classe "divi2" dos elementos com classe "divi"
botao_divs2.addEventListener("click", ()=>{

    divisoria.forEach((element) => {
        element.classList.remove("divi2")
    });
})