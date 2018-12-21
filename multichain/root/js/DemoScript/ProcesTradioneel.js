var counttradioneel;
function starttradioneel(){
    if (typeof counttradioneel === 'undefined') {
        counttradioneel = 0; 
        window['counttradioneel' + counttradioneel]();
    } else {
        window['counttradioneel' + counttradioneel]();
    }
}

function counttradioneel0(){
    $(".commandscherm").show();

    document.getElementById('starttradioneel').style.visibility = 'hidden';
    document.getElementById('startUitleg').style.visibility = 'hidden';
    document.getElementById('startverschil').style.visibility = 'hidden';
    document.getElementById('starttradioneel2').style.visibility = 'visible';

    term.echo('Nu komt de data uitwisseling van het traditioneel proces aan bod.')
    term.echo(' ')
    term.echo('In het rechter kant wordt een samenvatting van de data uiwisselingen gegeven.')
    term.echo(' ')

    counttradioneel = 1;
}

function counttradioneel1(){
    $("#Tpic1").fadeIn(500);
    term.echo('Vanuit de producent dient een vrachtbrief opgesteld te worden voor de transpoteur.')
        var li = document.createElement("li");
        var inputValue = "Producent -> Transporteur Vrachtbrief ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo('De bestelling wordt bij de rederij aangemeld.')
        var li = document.createElement("li");
        var inputValue = "Producent -> Rederij Bestelling ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')

    counttradioneel = 2;
}

function counttradioneel2(){
    $("#Tpic1").fadeOut(500);
    $("#Tpic3").fadeIn(500);
    term.echo('De vrachtbrief en bestelling wordt aangeleverd aan de Chinese douane.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Chinese douane Vrachtbrief ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo(' ')
    
    counttradioneel = 3;
}

function counttradioneel3 (){
    $("#Tpic3").fadeOut(500);
    $("#Tpic4").fadeIn(500);
    term.echo('De Chinese douane leverd de bestelling aan de rederij.')
        var li = document.createElement("li");
        var inputValue = "Chinese douane -> Rederij Bestelling ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')
    term.echo('De rederij bevestigt het ontvangen van de bestelling aan de producent.')
        var li = document.createElement("li");
        var inputValue = "Rederij -> Producent Status update";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo(' ')

    counttradioneel = 4;
}

function counttradioneel4 (){
    $("#Tpic3").fadeOut(500);
    $("#Tpic4").fadeIn(500);
    term.echo('De rederij leverd de bestelling in Nederlandse haven.')
    term.echo('De vrachtbrief en de bestelling worden naar de Nederlandse Douane verstuurd.')
        var li = document.createElement("li");
        var inputValue = "Rederij -> Nederlandse Duane Bestelling";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')
    term.echo('Vanuit de rederij wordt er een status update van de bestelling aan de producent gegeven.')
        var li = document.createElement("li");
        var inputValue = "Rederij -> Producent Status update ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);         
    term.echo(' ')

    counttradioneel = 5;
}

function counttradioneel5 (){
    $("#Tpic4").fadeOut(500);
    $("#Tpic5").fadeIn(500);
    term.echo('De Douane steld de bestelling ter beschikking voor de Nederlandse transporteur.')
    term.echo('De vrachtbrief en de bestelling worden op transport gezet.')
        var li = document.createElement("li");
        var inputValue = "Nederlandse Douane -> Transporteur Vrachtbrief";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo('Deze informatie wordt ook teruggekoppeld aan de producent.')
        var li = document.createElement("li");
        var inputValue = "Nederlandse douane -> Producent Status update ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')
    
    counttradioneel = 6;
}

function counttradioneel6 (){
    $("#Tpic5").fadeOut(500);
    $("#Tpic6").fadeIn(500);
    term.echo('Het bestelde product wordt op een vrachtwagen richting de klant gezet.')
    term.echo(' ')
    term.echo('De producent wordt hiervan op de hoogte gesteld.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Producent Status update";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')
    
    counttradioneel = 7;
}

function counttradioneel7 (){
    $("#Tpic6").fadeOut(500);
    $("#Tpic7").fadeIn(500);
    var boyElement = document.getElementById("Tpic7");
    boyElement.style.border = "7px solid red";
    term.echo('De klant ontvangt de vrachtbrief en bestelling.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Klant Bestelling";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')
    document.getElementById('starttradioneel2').style.visibility = 'hidden';
    document.getElementById('reloadknop').style.visibility = 'visible';
}