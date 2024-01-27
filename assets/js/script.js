var barras;
var pastel;

$(document).ready(function(){

    mostrarTodosJSON(); 

    $("#botonMostrar").click(function(e){
        e.preventDefault();
        mostrarTodosJSON();
    });

    $("#botonLimpiar").click(function(e){
        e.preventDefault();
        limpiar();
    });

    $("#botonBuscar").click(function(e){
        e.preventDefault();
        var nombreChampion = $("#campoBuscar").val().toLowerCase();
        if (nombreChampion){

            buscarPokemonJSON(nombreChampions);
        }
    })


    $("#botonOrdenarAlfa").click(function(e){
        e.preventDefault();

        ordenarAlfaJSON();
    })


    $("#botonVerEstadisticas").click(function(e){
        e.preventDefault();

        mostrarGraficosJSON();
    })

});


function limpiar(){
    $("#pictures-container").empty();
    $("#campoBuscar").val("");

    if(barras){
        barras.destroy();
    }
    if(pastel){
        pastel.destroy();
    }
}


function buscarChampionJSON(nombreChampion){
    $.ajax({
        type: "GET",
        url: "data/lol.json",
        dataType: "json",
        async: true,
        success: function(data){

            buscarChampion(data,nombreChampion);
        }
    });
}


function buscarChampion(data,nombreChampion){

    limpiar();

    var championEncontrado = data.data.find(champion => champion.nombre == nombreChampion);
    if(championEncontrado){
        crearCard(championEncontrado);
    }
    else{
        alert("Champion no encontrado");
    }
}

//no esta funcionando
function mostrarTodosJSON(){
    
    $.ajax({
        
        type: "GET",
        url: "data/lol.json",
        dataType: "json",
        async: true,
        success: function(data){
            //console.log("paso")
            mostrarTodos(data);
            //console.log(data);

        }
    });
}


function mostrarTodos(data){
    //console.log("paso")
    limpiar();
    for(let i=0; i<data.data.length; i++){
        crearCard(data.data.length[i]);

    }
}


function ordenarAlfaJSON(){

    $.ajax({
        type: "GET",
        url: "data/lol.json",
        dataType: "json",
        async: true,
        success: function(data){

            ordenarAlfa(data);
        }
    });
}


function ordenarAlfa(data){
    data.champion.sort(function(championA,championB){
        championA.nombre = championA.nombre.toLowerCase();
        championB.nombre = championB.nombre.toLowerCase();

        return championA.nombre.localeCompare(championB.nombre)
    })

    console.log(data);
    mostrarTodos(data);
}

function crearCard(champion){

    let divCard = $("<div></div>");
    divCard.addClass("card");

    let nombre = $("<h3></h3>");
    nombre.append(champion.name+" "+champion.tittle);
    nombre.addClass("nombre");

    let img = $("<img></img>");
    img.attr("src",champion.img);
    img.addClass("card-img");

    let info = $("<p></p>");
    info.append(champion.info);
    info.addClass("info");
    
    divCard.append(nombre);
    divCard.append(img);
    divCard.append(info);
    
    $("#picturesContainer").append(divCard);
}


function mostrarGraficosJSON(){
    $.ajax({
        type: 'GET',
        url: 'data/lol.json',
        dataType: "json",
        async: true,
        success: function(data){
           
            mostrarGraficos(data);
        }
    });
}

//falta definir los datos que quieres pasar a estadistica.
function mostrarGraficos(data){
    limpiar();
//attack (falta agregar un titulo)
    let championsAttack1 = data.data.filter(champion => champion.info.attack == 1);
    let cantidadAttack1 = championsAttack1.length;

    let championsAttack2 = data.data.filter(champion => champion.info.attack == 2);
    let cantidadAttack2 = championsAttack2.length;

    let championsAttack3 = data.data.filter(champion => champion.info.attack == 3);
    let cantidadAttack3 = championsAttack3.length;

    let championsAttack4 = data.data.filter(champion => champion.info.attack == 4);
    let cantidadAttack4 = championsAttack4.length;

    let championsAttack5 = data.data.filter(champion => champion.info.attack == 5);
    let cantidadAttack5 = championsAttack5.length;

    let championsAttack6 = data.data.filter(champion => champion.info.attack == 6);
    let cantidadAttack6 = championsAttack6.length;

    let championsAttack7 = data.data.filter(champion => champion.info.attack == 7);
    let cantidadAttack7 = championsAttack7.length;

    let championsAttack8 = data.data.filter(champion => champion.info.attack == 8);
    let cantidadAttack8 = championsAttack8.length;

    let championsAttack9 = data.data.filter(champion => champion.info.attack == 9);
    let cantidadAttack9 = championsAttack9.length;

    let championsAttack10 = data.data.filter(champion => champion.info.attack == 10);
    let cantidadAttack10 = championsAttack10.length;


const etiquetas = ["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10"];

const tipos = {
    label: "nivel de ataque",
    data:[cantidadAttack1, cantidadAttack2, 
        cantidadAttack3, cantidadAttack4, 
        cantidadAttack5, cantidadAttack6,
         cantidadAttack7, cantidadAttack8, 
         cantidadAttack9, cantidadAttack10],
    backgroundColor: ["#FF2D00"],
    borderColor: "#33398a",
    borderWidth: 4,
};

const graficosBarras = $("#graficoBarras");

if(barras){
    barras.destroy();
}

barras = new Chart(graficosBarras,{
    type:"bar",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

const graficoPastel = $("#graficoPastel");

if(pastel){
    pastel.destroy();
}
pastel = new Chart(graficosPastel,{
    type: "pie",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

var barras2;
var pastel2;
//defense (agregar titulo de defensa)
    let championsDefense1 = data.data.filter(champion => champion.info.defense == 1);
    let cantidadDefense1 = championsDefense1.length;

    let championsDefense2 = data.data.filter(champion => champion.info.defense == 2);
    let cantidadDefense2 = championsDefense2.length;

    let championsDefense3 = data.data.filter(champion => champion.info.defense == 3);
    let cantidadDefense3 = championsDefense3.length;

    let championsDefense4 = data.data.filter(champion => champion.info.defense == 4);
    let cantidadDefense4 = championsDefense4.length;

    let championsDefense5 = data.data.filter(champion => champion.info.defense == 5);
    let cantidadDefense5 = championsDefense5.length;

    let championsDefense6 = data.data.filter(champion => champion.info.defense == 6);
    let cantidadDefense6 = championsDefense6.length;

    let championsDefense7 = data.data.filter(champion => champion.info.defense == 7);
    let cantidadDefense7 = championsDefense7.length;

    let championsDefense8 = data.data.filter(champion => champion.info.defense == 8);
    let cantidadDefense8 = championsDefense8.length;

    let championsDefense9 = data.data.filter(champion => champion.info.defense == 9);
    let cantidadDefense9 = championsDefense9.length;

    let championsDefense10 = data.data.filter(champion => champion.info.defense == 10);
    let cantidadDefense10 = championsDefense10.length;


const etiquetas2 = ["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10"];

const tipos2 = {
    label: "nivel de defensa",
    data:[cantidadDefense1, cantidadDefense2, 
        cantidadDefense3, cantidadDefense4, 
        cantidadDefense5, cantidadDefense6,
         cantidadDefense7, cantidadDefense8, 
         cantidadDefense9, cantidadDefense10],
    backgroundColor: ["#FF2D00"],
    borderColor: "#33398a",
    borderWidth: 4,
};

const graficosBarras2 = $("#graficoBarras");

if(barras2){
    barras2.destroy();
}

barras2 = new Chart(graficosBarras,{
    type:"bar",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

const graficoPastel2 = $("#graficoPastel");

if(pastel2){
    pastel2.destroy();
}
pastel2 = new Chart(graficosPastel,{
    type: "pie",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

var barras3;
var pastel3;
//magic (agregar titulo de nivel de magia)
    let championsMagic1 = data.data.filter(champion => champion.info.magic == 1);
    let cantidadMagic1 = championsMagic1.length;

    let championsMagic2 = data.data.filter(champion => champion.info.magic == 2);
    let cantidadMagic2 = championsMagic2.length;

    let championsMagic3 = data.data.filter(champion => champion.info.magic == 3);
    let cantidadMagic3 = championsMagic3.length;

    let championsMagic4 = data.data.filter(champion => champion.info.magic == 4);
    let cantidadMagic4 = championsMagic4.length;

    let championsMagic5 = data.data.filter(champion => champion.info.magic == 5);
    let cantidadMagic5 = championsMagic5.length;

    let championsMagic6 = data.data.filter(champion => champion.info.magic == 6);
    let cantidadMagic6 = championsMagic6.length;

    let championsMagic7 = data.data.filter(champion => champion.info.magic == 7);
    let cantidadMagic7 = championsMagic7.length;

    let championsMagic8 = data.data.filter(champion => champion.info.magic == 8);
    let cantidadMagic8 = championsMagic8.length;

    let championsMagic9 = data.data.filter(champion => champion.info.magic == 9);
    let cantidadMagic9 = championsMagic9.length;

    let championsMagic10 = data.data.filter(champion => champion.info.magic == 10);
    let cantidadMagic10 = championsMagic10.length;


const etiquetas3 = ["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10"];

const tipos3 = {
    label: "nivel de ataque",
    data:[cantidadMagic1, cantidadMagic2, 
        cantidadMagic3, cantidadMagic4, 
        cantidadMagic5, cantidadMagic6,
         cantidadMagic7, cantidadMagic8, 
         cantidadMagic9, cantidadMagic10],
    backgroundColor: ["#FF2D00"],
    borderColor: "#33398a",
    borderWidth: 4,
};

const graficosBarras3 = $("#graficoBarras");

if(barras3){
    barras3.destroy();
}

barras3 = new Chart(graficosBarras,{
    type:"bar",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

const graficoPastel3 = $("#graficoPastel");

if(pastel3){
    pastel3.destroy();
}
pastel3 = new Chart(graficosPastel,{
    type: "pie",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

var barras4;
var pastel4;
//difficulty (agregar titulo de nicel de dificultad)
    let championsDifficulty1 = data.data.filter(champion => champion.info.difficulty == 1);
    let cantidadDifficulty1 = championsDifficulty1.length;

    let championsDifficulty2 = data.data.filter(champion => champion.info.difficulty == 2);
    let cantidadDifficulty2 = championsDifficulty2.length;

    let championsDifficulty3 = data.data.filter(champion => champion.info.difficulty == 3);
    let cantidadDifficulty3 = championsDifficulty3.length;

    let championsDifficulty4 = data.data.filter(champion => champion.info.difficulty == 4);
    let cantidadDifficulty4 = championsDifficulty4.length;

    let championsDifficulty5 = data.data.filter(champion => champion.info.difficulty == 5);
    let cantidadDifficulty5 = championsDifficulty5.length;

    let championsDifficulty6 = data.data.filter(champion => champion.info.difficulty == 6);
    let cantidadDifficulty6 = championsDifficulty6.length;

    let championsDiffilculty7 = data.data.filter(champion => champion.info.difficulty == 7);
    let cantidadDifficulty7 = championsDifficulty7.length;

    let championsDifficulty8 = data.data.filter(champion => champion.info.difficulty == 8);
    let cantidadDifficulty8 = championsDifficulty8.length;

    let championsDifficulty9 = data.data.filter(champion => champion.info.difficulty == 9);
    let cantidadDifficulty9 = championsDifficulty9.length;

    let championsDifficulty10 = data.data.filter(champion => champion.info.difficulty == 10);
    let cantidadDifficulty10 = championsDifficulty10.length;


const etiquetas4 = ["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10"];

const tipos4 = {
    label: "nivel de ataque",
    data:[cantidadDifficulty1, cantidadDifficulty2, 
        cantidadDifficulty3, cantidadDifficulty4, 
        cantidadDifficulty5, cantidadDifficulty6,
         cantidadDifficulty7, cantidadDifficulty8, 
         cantidadDifficulty9, cantidadDifficulty10],
    backgroundColor: ["#FF2D00"],
    borderColor: "#33398a",
    borderWidth: 4,
};

const graficosBarras4 = $("#graficoBarras");

if(barras4){
    barras4.destroy();
}

barras4 = new Chart(graficosBarras,{
    type:"bar",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

const graficoPastel4 = $("#graficoPastel");

if(pastel4){
    pastel4.destroy();
}
pastel4 = new Chart(graficosPastel,{
    type: "pie",
    data:{
        labels: etiquetas,
        datasets:[tipos]
    }
});

}
