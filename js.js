var carta1 = {
    nome: "Homem Aranha",
    imagem:"https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/03/12/1426338298-spider-man-far-from-home.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        velocidade: 7
    }
};

var carta2 = {
    nome: "Super Choque",
    imagem:"https://i.em.com.br/JRhi48-4vatId6aumO-9LFHmrt8=/1200x720/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/23/1325067/super-choque_1_56121.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        velocidade: 6.5
    }
};

var carta3 = {
    nome: "Batman",
    imagem:"https://static.wikia.nocookie.net/liga-da-justica-fanfiction/images/e/ed/Traje_de_Combate_do_Batman_01.jpg/revision/latest/scale-to-width-down/270?cb=20171008193403&path-prefix=pt-br",
    atributos: {
        ataque: 9.9,
        defesa: 9.7,
        velocidade: 8
    }
}

var carta4 = {
    nome: "Homem De ferro",
    imagem:"https://static.wikia.nocookie.net/marvel/images/f/fe/Avengers_Endgame_poster_041_Variant_Textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20210628142740&path-prefix=pt-br",
    atributos: {
        ataque: 9.5,
        defesa: 9.2,
        velocidade: 9.5
    }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina; 
var cartaJogador; 

function sortearCarta() { //parte para que o sorteio das cartas funcione
   var numeroCartaMaquina =  parseInt (Math.random() * 4);
   cartaMaquina = cartas[numeroCartaMaquina];
   //console.log(cartaMaquina);

   var numeroCartaJogador =  parseInt (Math.random() * 4);
   while (numeroCartaMaquina == numeroCartaJogador) {
       numeroCartaJogador = parseInt(Math.random() * 4);
   } 
   cartaJogador = cartas[numeroCartaJogador];
   console.log(cartaJogador);
   
   document.getElementById("btnSortear").disabled = true; // faz com que o botão nao funcione depois que clica para sortear
   document.getElementById("btnJogar").disabled = false; // faz com que o botão jogar funcione depois que sortear as cartas
   //exibirOpcoes();
   exibirCartaJogador();
}

function exibirOpcoes() { //parte em que os atributos de cada carta apareca e o jogador escolha qual atributo deseja duelar 
    var opcoes = document.getElementById("opcoes");
    var opcoestexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoestexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    } 

    opcoes.innerHTML = opcoestexto;
}

function obtemAtributoSelecionado() { //parte de selecionar os atributos dos elementos na tela
    radioAtrtibutos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtrtibutos.length; i++) {
        if (radioAtrtibutos[i].checked == true) {
            return radioAtrtibutos[i].value
        }
    }
}

function jogar() { //parte em que vc joga com o atributo selecionado e imprime na tela o atributo e o valor do atributo
    var AtributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[AtributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[AtributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Voce venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Voce perdeu, a carta máquina era maior";
    } else {
        elementoResultado.innerHTML = "Empatou";
    }
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //colocando js dentro do css
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")" é a mesma coisa do que o docido acima colocando js dentro do css
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; 
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}