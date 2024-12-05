let segundos = parseInt(prompt("Ingrese el número de segundos: "));
    let horas = Math.floor(segundos / 3600);      
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
  
    console.log(horas + " horas, " + minutos + " minutos, " + segundosRestantes + " segundos");


  