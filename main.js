
function chama() {
 
  var teste = document.getElementById('teste');


  var resultado = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  
  if(resultado === 5){
    teste.innerHTML += '<h1 id="amarelo">Gostosa</h1>'
  } else if (resultado === 4){
    teste.innerHTML += '<h1 id="vermelho">Cheirosa</h1>'
  } else if(resultado === 3){
    teste.innerHTML += '<h1 id="roxo">Linda</h1>'
  } else if(resultado === 2){
    teste.innerHTML += '<h1 id="azul">Ciumenta</h1>'
  } else if(resultado === 1){
    teste.innerHTML += '<h1 id="rosa">tanajura</h1>'
  }
}
