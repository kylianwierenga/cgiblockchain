var countuitleg;
function startUitleg(){
    if (typeof countuitleg === 'undefined') {
        countuitleg = 0; 
        window['UitlegProces' + countuitleg]();
    } else {
        window['UitlegProces' + countuitleg]();
    }
}

function UitlegProces0(){
    $(".commandscherm").show();

    document.getElementById('starttradioneel').style.visibility = 'hidden';
    document.getElementById('startUitleg').style.visibility = 'hidden';
    document.getElementById('startverschil').style.visibility = 'hidden';
    document.getElementById('startUitleg2').style.visibility = 'visible';

    term.echo('Welkom bij de CGI Blockchain Demo.')
    term.echo(' ')
    countuitleg = 1;
}

function UitlegProces1(){
    term.echo('Allereerst wordt het proces toegelicht.')
    term.echo(' ')
    countuitleg = 2;
} 

function UitlegProces2(){
    term.echo('Het proces betreft een logistiek proces.')
    term.echo(' ')
    countuitleg = 3;
} 

function UitlegProces3(){
    term.echo('Vanuit Nederland wordt er een bestelling bij een Chinese fabrikant gedaan.')
    term.echo(' ')
    countuitleg = 4;
} 

function UitlegProces4(){
    term.echo('De handelingen die hierbij horen worden nu weergegeven.')
    term.echo(' ')
    countuitleg = 5;
}

function UitlegProces5(){
    $("#Tpic1").fadeIn(500);
    term.echo('Het bestelde product staat klaar om verstuurd te worden.')
    term.echo(' ')
    countuitleg = 6;
}

function UitlegProces6(){
    $("#Tpic1").fadeOut(500);
    $("#Tpic2").fadeIn(500);
    term.echo('Het bestelde product wordt ingeladen in een vrachtwagen en naar de haven gebracht.')
    term.echo(' ')
    countuitleg = 7;
}

function UitlegProces7 (){
    $("#Tpic2").fadeOut(500);
    $("#Tpic3").fadeIn(500);
    term.echo('Het bestelde product wordt gecontroleerd en vrijgegeven door de Chinese douane.')
    term.echo(' ')
    countuitleg = 8;
}

function UitlegProces8 (){
    $("#Tpic3").fadeOut(500);
    $("#Tpic4").fadeIn(500);
    term.echo('Het bestelde product wordt op een schip richting Nederland gezet.')
    term.echo(' ')
    countuitleg = 9;
}

function UitlegProces9 (){
    $("#Tpic4").fadeOut(500);
    $("#Tpic4").fadeIn(500);
    term.echo('Het bestelde product komt aan in Nederland.')
    term.echo(' ')
    countuitleg = 10;
}

function UitlegProces10 (){
    $("#Tpic4").fadeOut(500);
    $("#Tpic5").fadeIn(500);
    term.echo('Het bestelde product wordt gecontroleerd en vrijgegeven door de Nederlandse douane.')
    term.echo(' ')
    countuitleg = 11;
}

function UitlegProces11 (){
    $("#Tpic5").fadeOut(500);
    $("#Tpic6").fadeIn(500);
    term.echo('Het bestelde product wordt op een vrachtwagen richting de klant gezet.')
    term.echo(' ')
    countuitleg = 12;
}

function UitlegProces12 (){
    $("#Tpic6").fadeOut(500);
    $("#Tpic7").fadeIn(500);
    var boyElement = document.getElementById("Tpic7");
    boyElement.style.border = "7px solid red";
    term.echo('Het bestelde product wordt bij de klant geleverd.');
    term.echo(' ');
    countuitleg = 13;
}

function UitlegProces13(){
    term.echo('Einde.')
    $("#Tpic7").fadeOut(600);

    $(".multichainoutput").hide();
    $(".commandscherm").hide();
    document.getElementById('startUitleg2').style.visibility = 'hidden';
    document.getElementById('reloadknop').style.visibility = 'visible';
}