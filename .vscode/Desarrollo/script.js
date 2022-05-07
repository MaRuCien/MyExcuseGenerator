window.onload = function(){
    // Listas de palabras.
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    // Variables para extraer el largo de las listas
    var whoLenght = who.length; 
    var actionLength = action.length;
    var whatLength = what.length;
    var whenLenght = when.length; 

    // Valores aleatorios entre 0 y el largo de cada lista
    var whoRandom = Math.floor(Math.random() * whoLenght);
    var actionRandom = Math.floor(Math.random()*actionLength);
    var whatRandom = Math.floor(Math.random()*whatLength);
    var whenRandom = Math.floor(Math.random()*whenLenght);

    // Extracción de elementos aleatorios de listas de palabras
    var whoRandomElement = who[whoRandom];
    var actionRandomElement = action[actionRandom];
    var whatRandomElement = what[whatRandom];
    var whenRandomElement = when[whenRandom];

    // Generación de oración aleatoria
    var sentenceRandom = whoRandomElement + ' ' + actionRandomElement + ' ' + whatRandomElement + ' ' + whenRandomElement;
    
    // Envio de oración a la página
    document.getElementById('myID').innerHTML = sentenceRandom;
    
}

