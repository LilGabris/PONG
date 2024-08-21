//Video: https://youtu.be/Jl2tvupxRdc

let tela = 0;
let img;

//variaveis da posição,diametro e raio
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;

// variaveis da velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

//variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 100

//variaveis da raquete do oponente
let xRaqueteEnemy = 585
let yRaqueteEnemy = 150
let velocidadeYEnemy;

let colidiu = false;

//pontos do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let raquetada
let pontos
let trilha 

let vencedorp1
let vencedorp2

let chanceErro = 0
//sons do jogo
function preload(){
trilha = loadSound("trilha.mp3");
pontos = loadSound("ponto.mp3");
raquetada = loadSound("raquetada.mp3");
img = loadImage('imagem.png')
menu = loadImage('Menu.webp')
}
function setup(black) {
  createCanvas(600, 400);
   trilha.loop();
}

function draw() {
  
  if(tela==0){
  background(menu);
      


    rect(250,70,100,40,20);
    textSize(20);
    text("JOGAR",265,95);
  
    rect(250,225,100,40,20);
    textSize(20);
    text("Manual",270,250);
  
    rect(250,300,100,40,20);
    text("Creditos",265,325); 
    
    rect(250,148,100,40,20);
   textSize(20);
    text("J1 VS J2", 260,175);  }
  
  if(tela == 1){
      background(img);
    yRaquete = constrain(yRaquete, 0, height - alturaRaquete);
  yRaqueteEnemy = constrain(yRaqueteEnemy, 0, height - alturaRaquete);
    mostrarBola();
    movimentoBola();
    detectarBordas();
    mostrarRaquete(xRaquete,yRaquete); 
    movimentoRaquetes();
    mostrarRaquete(xRaqueteEnemy,yRaqueteEnemy);
    colisaoMinhaRaqueteBlibioteca();
    colisaoRaqueteOponenteBlibioteca();
    incluiPlacar();
    marcaPonto ();
    bolinhaNaoFicaPresa();
  
  }
    if(tela == 2){
        background(200);
      textSize(20)
    text("Pong é um jogo eletrônico de esporte em duas dimensões que simula um tênis de mesa. O jogador controla uma paleta (barra vertical) no jogo movendo-a verticalmente no lado esquerdo da tela, e compete contra outro jogador que controla uma segunda raquete no lado oposto, neste jogo para que o jogador podera controlar a raquete do lado esquerdo utilizando as teclas 'W' e 'S' ja para controlar a raquete do lado direito precisa utilizar as setinhas para cima e para baixo",80,60,400);
      rect(400,350,100,40,20);
    textSize(20);
    text("Voltar",425,375)
  }
  if(tela == 3){
      background(200);
      //text(mouseX+" "+mouseY,20,20)

    textSize(30);
    text("Créditos",230,80);
    textSize(20);
    rect(400,350,100,40,20);
    text("Voltar",425,375);
    textSize(20);
    text(". PIXABAY",90,130);
    text(". DALL-E 2",90,170);
    

}
    

    if (tela == 4) {
    background(200)
    if (vencedorp1) {
      //fill(255); // Cor branca
      textSize(20);
      //textAlign(CENTER, CENTER);
      text("Jogador 1 Venceu!", 210,190);
      meusPontos = 0;
      pontosDoOponente = 0;
    } else if (vencedorp2) {
      //fill(255); // Cor branca
      textSize(20);
      //textAlign(CENTER, CENTER);
      text("Jogador 2 Venceu!",210,190);
      meusPontos = 0;
      pontosDoOponente = 0;
    }

   // fill(255, 165, 0); // Cor laranja
    rect(250, 350, 100, 40, 20);

    //fill(255); // Cor branca para o texto
    textSize(20);
    //textAlign(CENTER, CENTER);
    text("Voltar", 280, 375);
  }
  
  if(tela == 5){

    background(img);
    //text(mouseX+" "+mouseY,20,20)
    
    yRaquete = constrain(yRaquete, 0, height - alturaRaquete);
  yRaqueteEnemy = constrain(yRaqueteEnemy, 0, height - alturaRaquete);
    
    mostrarBola();
    movimentoBola();
    detectarBordas();
    mostrarRaquete(xRaquete,yRaquete); 
    movimentoMinhaRaquete();
    movimentoIA();
    movimentoOponenteIA();
    mostrarRaquete(xRaqueteEnemy,yRaqueteEnemy);
    colisaoMinhaRaqueteBlibioteca();
    colisaoRaqueteOponenteBlibioteca();
    incluiPlacar();
    marcaPonto ();
    bolinhaNaoFicaPresa();
  }


}

function mostrarBola(){
  circle(xBolinha,yBolinha,diametro);
}
function movimentoBola(){
  xBolinha = xBolinha + velocidadeXBolinha
  yBolinha = yBolinha + velocidadeYBolinha
}

function detectarBordas(){
  if (xBolinha + raio > width || xBolinha-raio< 0){
  velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha-raio< 0){
    velocidadeYBolinha *= -1;
  }
}
function mostrarRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete,)
}
function movimentoRaquetes(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  
   if(keyIsDown(DOWN_ARROW)){
   yRaquete +=10;
       }
  
  if(keyIsDown(87)){
     yRaqueteEnemy -=10;
   }
  
   if(keyIsDown(83)){
     yRaqueteEnemy +=10; }
  
  }
 function colisaoMinhaRaqueteBlibioteca() {
   colidiu = collideRectCircle(xRaquete,yRaquete,comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
   if(colidiu){
     velocidadeXBolinha *= -1;
     raquetada.play();
   }

 }
 function colisaoRaqueteOponenteBlibioteca() {
   colidiu = collideRectCircle(xRaqueteEnemy,yRaqueteEnemy,comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
   if(colidiu){
     velocidadeXBolinha *= -1;
      raquetada.play();
   }

 }
  
function incluiPlacar(){
  //stroke(255);
  //textAlign(CENTER);
  textSize(16);
  //fiilcolor(240, 136, 0));
  rect(180, 15, 40, 20);
  //fill(color(240, 136, 0));
  rect(380, 15, 40, 20);
  //noStroke();
  //fill(255);
  text(meusPontos, 200, 30);
  //fill(255);
  text(pontosDoOponente, 400, 30);}

function marcaPonto() {
  if (xBolinha > 585) {
    meusPontos += 1;
    pontos.play();
    if (meusPontos == 7) {
      tela = 4; // Tela do vencedor
      vencedorp1 = true;
    }
  }
  if (xBolinha < 15) {
    pontosDoOponente += 1;
    pontos.play();
    if (pontosDoOponente == 7) {
      tela = 4; // Tela do vencedor
      vencedorp2 = true;
    }
  }
}
  
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
    }
    if (xBolinha + raio > 600){
      xBolinha = 580
    }
}
//quando a posição do mouse for X > n ou < n, e Y < ou > n, ai muda a tela
function mouseClicked(){
  if(mouseX > 250 && mouseX< 350 && mouseY > 70 && mouseY < 110 && tela == 0){
    tela = 5;
  }
  if(mouseX > 250 && mouseX < 350 && mouseY > 145 && mouseY < 186 && tela == 0){
    tela = 1;
  }
    if (mouseX>400 && mouseX<500 && mouseY>350 && mouseY<390 && tela == 3 || tela == 2 ){
        tela = 0;
      }
    if(mouseX > 250 && mouseX <350 && mouseY > 225 && mouseY < 265 && tela == 0 ){
       tela = 2; 
       }
    if(mouseX > 250 && mouseX <350 && mouseY > 300 && mouseY < 340 && tela == 0 ){
       tela = 3; 
       }
    if(tela == 4){
        if(mouseX > 250 && mouseX < 350 && mouseY > 350 && mouseY < 380){
  tela = 0; }}
  
}

function movimentoMinhaRaquete(){
if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  
   if(keyIsDown(DOWN_ARROW)){
   yRaquete +=10;
       }
}

function movimentoIA(){
  if (pontosDoOponente >= meusPontos) {
    chanceErro += 2; // Aumentar o incremento para 2
    if (chanceErro >= 50) {
      chanceErro = 50; // Limite superior máximo
    }
  } else {
    chanceErro -= 2; // Aumentar o decremento para 2
    if (chanceErro <= 30) {
      chanceErro = 30; // Limite inferior mínimo
    }
  }
}
function movimentoOponenteIA(){
   velocidadeYEnemy =
    yBolinha - yRaqueteEnemy - comprimentoRaquete / 2 - 30;
  yRaqueteEnemy += velocidadeYEnemy + chanceErro;
}
  

