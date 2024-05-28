//variaveisRaquete
let xRaquete = 5
let yRaquete = 150
let baseRaquete = 13
let alturaRaquete = 90
//variaveisdaBolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 25

//velocidadeBolinha
let velocidadexBolinha = 5
let velocidadeyBolinha = 5
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha()
  movimentoBolinha()
  verificacaoColisaoBorda()
  mostraRaquete()
  movimentoRaquete()
  
}
  
  function movimentoRaquete(){
    if(keyIsDown(UP_ARROW))
      yRaquete -= 10
    if(keyIsDown(DOWN_ARROW))
      yRaquete += 10
  }
    

  function mostraRaquete(){
  rect(xRaquete,yRaquete,baseRaquete,alturaRaquete) 
}
  function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
  
}
  
  function movimentoBolinha(){
  xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha
}
  
  function verificacaoColisaoBorda(){                 
  if(xBolinha +15 > width|| xBolinha -15 < 0)
    velocidadexBolinha *= -1
  if(yBolinha +15 > height|| yBolinha -15 < 0)
    velocidadeyBolinha *= -1
  }
