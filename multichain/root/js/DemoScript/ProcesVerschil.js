var countverschil;
function startverschil(){
    if (typeof countverschil === 'undefined') {
        countverschil = 0; 
        window['countverschil' + countverschil]();
    } else {
        window['countverschil' + countverschil]();
    }
}

function countverschil0(){
    $(".multichainoutput").show();
    $(".commandscherm").show();

    document.getElementById('startverschil').style.visibility = 'hidden';
    document.getElementById('startverschil2').style.visibility = 'visible';

    term.echo('Nu komt de data uitwisseling van zowel het traditioneel proces als het Blockchain proces aan bod.')
    term.echo(' ')
    term.echo('In het rechter bovenkant wordt een samenvatting van de data uiwisselingen traditioneel gegeven.')
    term.echo(' ')
    term.echo('In het linker onderkant wordt een samenvatting van de data uiwisselingen Blockchain gegeven.')
    term.echo(' ')
    document.getElementById('tekstenonder').setAttribute("value", "Proces uitleg komt hier.");

    document.getElementById('smartcontract').setAttribute("value", "De Smartcontact commandos worden hier weergegeven.");
   
    $("#Tpic8").fadeIn(50);
    $("#smartcontract").fadeIn(50);
    $("#tekstenonder").fadeIn(50);

    countverschil = 1;
}

function countverschil1(){
    $("#Tpic1").fadeIn(500);
    term.echo('Vanuit de producent dient een vrachtbrief opgesteld te worden voor de transpoteur.')
        var li = document.createElement("li");
        var inputValue = "Producent -> Transporteur Vrachtbrief ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo('De bestelling bij de rederij aangemeld te worden. ')
        var li = document.createElement("li");
        var inputValue = "Producent -> Rederij Bestelling ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')

    $(".multichainoutput").show();

    $.get("../../multichain/publish.php?chain=1producent&from=1HPF4Mg8XrXRckVYp8EtbhjTT9Rq4BKpuVae6y&data=Geproduceerd");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "Product wordt besteld en verstuurd.");

    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Geproduceerd'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 2;
}

function countverschil2(){
    $("#Tpic1").fadeOut(500);
    $("#Tpic3").fadeIn(500);
    term.echo('De vrachtbrief en bestelling wordt aangeleverd aan de Chinese douane.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Chinese douane Vrachtbrief ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo(' ')

    $.get("../../multichain/publish.php?chain=2transportChina&from=1VUnnop5pnvazj394zpg4LQbv8JLDVZMVSi6aK&data=Optransport");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "Door de locale transporteur wordt de bestelling van de producernt naar de Chinese douane gebracht.");

    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Optransport'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 3;
}

function countverschil3(){
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
        var inputValue = "Rederij -> Producent Status update ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li); 
    term.echo(' ')

    $.get("../../multichain/publish.php?chain=3douaneChina&from=1Nnyi1k9BNsD3cxduLQJKfuqGFpUrXbvHphSsg&data=Vrijgegeven");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "De bestelling is vrijgegeven door de Chinese douane en wordt door de rederij op een schip richting Nederland gezet.");
    
    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Vrijgegeven'; function setMessage(string newMessage) public {message = newMessage;} }");  
    
    countverschil = 4;
}

function countverschil4(){
    $("#Tpic3").fadeOut(500);
    $("#Tpic4").fadeIn(500);
    term.echo('De rederij leverd de bestelling in Nederlandse haven.')
    term.echo('De vrachtbrief en de bestelling worden naar de Nederlandse Douane verstuurd.')
        var li = document.createElement("li");
        var inputValue = "Rederij -> Nederlandse Duane Bestelling ~ ✎";
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

    $.get("../../multichain/publish.php?chain=4rederij&from=1VMpR6T8a6RJa65rnwMTDxzuuUB3q6ky5H4ngn&data=Uitladen.");
    
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "De bestelling komt in Nederland binnen en wordt door de Nederlandse douane gecontroleerd.");

    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Uitladen'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 5;
}

function countverschil5(){
    $("#Tpic4").fadeOut(500);
    $("#Tpic5").fadeIn(500);
    term.echo('De Douane steld de bestelling ter beschikking voor de Nederlandse transporteur.')
    term.echo('De vrachtbrief en de bestelling worden op transport gezet.')
        var li = document.createElement("li");
        var inputValue = "Nederlandse Douane -> Transporteur Vrachtbrief ~ ✎";
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

    $.get("../../multichain/publish.php?chain=5douaneNL&from=1UrE97pwtzrnW4gQsznwy9MZYPtSMCmiFUPhp&data=Vrijgegeven.");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "De Nederlandse douane geeft de bestlling vrijgegeven.");

    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Vrijgegeven'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 6;
}

function countverschil6(){
    $("#Tpic5").fadeOut(500);
    $("#Tpic6").fadeIn(500);
    term.echo('Het bestelde product wordt op een vrachtwagen richting de klant gezet.')
    term.echo(' ')
    term.echo('De producent wordt hiervan op de hoogte gesteld.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Producent Status update ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')

    $.get("../../multichain/publish.php?chain=6transportNL&from=1SxsHbNAprcGGBny4RYmB84jVjDp7DGUU3s7HF&data=Op transport naar klant.");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "De bestelling wordt door een locale transporteur naar de klant verstuurd.");
    
    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Op transport naar klant'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 7;
}

function countverschil7(){
    $("#Tpic6").fadeOut(500);
    $("#Tpic7").fadeIn(500);
    var boyElement = document.getElementById("Tpic7");
    boyElement.style.border = "7px solid red";
    term.echo('De klant ontvangt de vrachtbrief en bestelling.')
        var li = document.createElement("li");
        var inputValue = "Transporteur -> Klant Bestelling ~ ✎";
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
    term.echo(' ')

    $.get("../../multichain/publish.php?chain=6transportNL&from=1SxsHbNAprcGGBny4RYmB84jVjDp7DGUU3s7HF&data=Afgeleverd.");

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    document.getElementById('tekstenonder').setAttribute("value", "De klant ontvangent de bestelling en de pakbon.");

    document.getElementById('smartcontract').setAttribute("value", "contract MessageContract {string message = 'Afgeleverd'; function setMessage(string newMessage) public {message = newMessage;} }");  

    countverschil = 8;
}

function countverschil8(){

    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $('#multichainoutput').load(document.URL +  ' #multichainoutput');
    $.get("../../multichain/publish.php?chain=0admin&from=1TYyC6y2pGxDqShvnXXaGnEkRerDjB1kHvWmC1&data=endoforder.");
    $.get("../../multichain/publish.php?chain=0admin&from=1TYyC6y2pGxDqShvnXXaGnEkRerDjB1kHvWmC1&data=Genisis Block.");

    document.getElementById('startverschil2').style.visibility = 'hidden';
    document.getElementById('reloadknop').style.visibility = 'visible';
}