<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CGI Blockchain Demo</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 75vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
                position: relative;
                top: 33px;
            }

            .content1 {
                text-align: center;
            }

            /*CSS data uitwisseling*/

            /* Remove margins and padding from the list */
            ul {
                align-items: left;
                display: center;
                justify-content: right;
                position: absolute;
                right: 0;
                margin: 0;
                top: 0;
            }

            /* Style the list items */
            ul li {
                padding: 12px 8px 12px 40px;
                list-style-type: none;
                background: black;
                font-size: 18px;
                transition: 0.2s;
                color: white;
                font-weight: bold;
            }

            /* Set all odd list items to a different color (zebra-stripes) */
            ul li:nth-child(odd) {
                background: #69C1F0;
                color: black;
                font-weight: bold;
            }

            td{
                color: black;
                font-weight: bold;
            }

            tr{
                color: #69C1F0;
                font-weight: bold;                
            }

            #Tpic8{
                position: absolute;
                bottom: 1px;
                right: 1px;
                padding-left: 1px;
                padding-right: 0px;
            }

            #smartcontract{
                position: absolute;
                bottom: 60px;
                right: 102px;
                padding-left: 1px;
                padding-right: 0px;

              }

        </style>  
    </head>
    <body onLoad="load();">
    <ul id="myUL">
    </ul>
        <div class="flex-center" id="reloadknop"><button onclick="setTimeout(top.location.reload(1), 4500);">Reset demo</button></div>
        <div class="flex-center" id="startverschil2"><button onclick="startverschil()">Volgend deelproces</button></div> 
        <BR>
        <BR>
        <BR>
        <BR>
        <BR>
        <BR>
        <BR>
        <BR>
        <BR>
        <div class="flex-center" id="startverschil"><button onclick="startverschil()">Start demo</button></div>
        <BR><BR><BR><BR><BR><BR><BR><BR>
        <div class="content1">           

<img id='Tpic1' src='./images/plaatje-fabriek.jpg' style=width:200px;height:165px;><!--Fabriek http://www.nophilo.com/plaatje-fabriek.html -->

<img id='Tpic2' src='./images/TRUCK01.gif' style=width:160px;height:120px;> <!--Vrachtwagen http://www.bewegende-plaatjes.net/galerij/plaatjes/vaartuigen/vrachtwagens/TRUCK01.gif.html -->

<img id='Tpic3' src='./images/china-customs-emblem.jpg' style=width:150px;height:150px;> <!--China customs https://mpoverello.files.wordpress.com/2014/02/china-customs-emblem.jpg -->

<img id='Tpic4' src='./images/curator-legt-beslag-nederlandse-vorderingen-failliete-rederij.jpg' style=width:320px;height:180px;> <!--Rederij https://www.nu.nl/economie/4956545/curator-legt-beslag-nederlandse-vorderingen-failliete-rederij.html -->

<img id='Tpic5' src='./images/bld_logo_douane.png' style=width:143px;height:78px;> <!--Douane https://www.belastingdienst.nl/wps/wcm/connect/nl/douane/douane -->

<img id='Tpic6' src='./images/TRUCK01.gif' style=width:160px;height:120px;> <!--Vrachtwagen http://www.bewegende-plaatjes.net/galerij/plaatjes/vaartuigen/vrachtwagens/TRUCK01.gif.html -->

<img id='Tpic7' src='./images/koning.jpg' style=width:150px;height:200px;> <!--Klant https://www.ondernemer24.nl/artikelen/de-klant-koning-keizer-en-admiraal -->

<img id='Tpic8' src='./images/scroll.png' style=width:400px;height:250px;> <!--Scroll https://www.freeiconspng.com/img/26392 -->
       
    </div>

<div class="commandscherm" id="commandscherm">
<link rel="stylesheet" href="./css/styleCLI.css">
<div class="shell windows dark shadow">
    <div class="status-bar">
        <div class="title">Command scherm</div>
    </div>
<!-- Hier wordt het command scherm ingeladen. -->
        <div class="content" id="content"></div>
</div>
</div>
<!-- Hier worden alle benodigde script voor het command scherm ingeladen. -->
        <script src='./js/jquery-3.1.1.min.js'></script>
        <script src='./js/wcwidth.js'></script>
        <script src='./js/jquery.terminal.min.js'></script>
        <script src='./js/jquery.mousewheel-min.js'></script>
        <script src='./js/keyboard.js'></script>
        <script src='./js/jquery-ui.min.js'></script>
        <script src='./js/WZjbgq.js'></script>
        <script src="./js/index.js"></script>
<!-- De onderstaande script zijn voor de werking van de demo. -->

        <script src="./js/DemoScript/ProcesVerschil.js"></script>        
        <script>
//Het laten vervagen van alle afbeeldingen.
        function load() {
            $(".multichainoutput").hide();
            $(".commandscherm").hide();
            document.getElementById('startverschil2').style.visibility = 'hidden';   
            document.getElementById('reloadknop').style.visibility = 'hidden';         
            $("#Tpic1").fadeOut(1);
            $("#Tpic2").fadeOut(1);
            $("#Tpic3").fadeOut(1);
            $("#Tpic4").fadeOut(1);
            $("#Tpic5").fadeOut(1);
            $("#Tpic6").fadeOut(1);
            $("#Tpic7").fadeOut(1); 
            document.getElementById('tekstenonder').setAttribute("value", "");
            $("#Tpic8").fadeOut(1);
            document.getElementById('smartcontract').setAttribute("value", "");  
            $("#smartcontract").fadeOut(1);
            $("#tekstenonder").fadeOut(1);      
        }
        </script>
        <br>
        <br>
        <br>
        <br>
<center>
    <input type="text" size="120" id="tekstenonder" disabled>
</center>
    <input type="textarea" id="smartcontract" readonly style="font-size:11pt;height:145px;width:200px;">
<?php
// asci link: http://azuliadesigns.com/html-character-codes-ascii-entity-unicode-symbols/

//echo "&#9997;";
//echo "&#9998;";



// Multichain index.php

    require_once './multichain/functions.php';
	
	$config=read_config();
	$chain="0admin";
	
	if (strlen($chain))
		$name=@$config[$chain]['name'];
	else
		$name='';

		set_multichain_chain($config[$chain]);
        
        //inlezen:
        define('const_max_retrieve_items', 1000);
	
        $labels=multichain_labels();
    
        no_displayed_error_result($liststreams, multichain('liststreams', '*', true));
        no_displayed_error_result($getinfo, multichain('getinfo'));
    
        $subscribed=false;
        $viewstream=null;
        
        foreach ($liststreams as $stream) {
            if (@$_POST['subscribe_'.$stream['createtxid']])
                if (no_displayed_error_result($result, multichain('subscribe', $stream['createtxid']))) {
                    output_success_text('Successfully subscribed to stream: '.$stream['name']);
                    $subscribed=true;
                }
                // bij nieuwe chain stream aanpassen. (hieronder) @
            if ("f9353d307b4cdf20498d33f3e7999957bf12bdda64ccb60268f4b10a4393ade0"==$stream['createtxid'])
                $viewstream=$stream;
        }			
                
        if ($subscribed) // reload streams list
            no_displayed_error_result($liststreams, multichain('liststreams', '*', true));
    
    ?>				
    <?php
    // De onderstaande variable key geeft het ordernummer weer. Denk hierbij aan bij het gebruik namen van een andere chain. @
        $key="orderN1287543";
        if (isset($viewstream)) {
            if (isset($key)) {
                $success=no_displayed_error_result($items, multichain('liststreamkeyitems', $viewstream['createtxid'], $key, true, const_max_retrieve_items));
                $success=$success && no_displayed_error_result($keysinfo, multichain('liststreamkeys', $viewstream['createtxid'], $key));
                $countitems=$keysinfo[0]['items'];
                $suffix=' with key: '.$key;
                
            } else {
                $success=no_displayed_error_result($items, multichain('liststreamitems', $viewstream['createtxid'], true, const_max_retrieve_items));
                $countitems=$viewstream['items'];
                $suffix='';
            }
                
            if ($success) {		
                $oneoutput=false;
                $items=array_reverse($items); // show most recent first
                
                foreach ($items as $item) {
                    $oneoutput=true;
                    //Hieronder staand zorgt er voor dat als de demo->Blockchain gerund is de gegevens hiervan niet weer worden geladen in de demo.
                    $binary=pack('H*', $item['data']);
                    $size=strlen($binary);
                    $file=txout_bin_to_file($binary);
                    if (html($binary) == 'endoforder.'){break;}                    
    ?>
    <div id="multichainoutput" class="multichainoutput">
                        <table>
                        
                            <tr>
                                <th style="width:35%;">Status wijziger</th>
                                <td><?php
                                
                    foreach ($item['publishers'] as $publisher) {         
                        $link=null;
                                ?><?php echo format_address_html($publisher, false, $labels, $link)?><?php		
                    }							
                                ?></td>
                            </tr>
                            <tr>
                                <th>Ordernummer</th>
                                <td><?php echo html($item['key'])?></td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td><?php  
                                    $binary=pack('H*', $item['data']);
                                    $size=strlen($binary);
                                    $file=txout_bin_to_file($binary);                        
                                        echo html($binary);                        
                                ?></td>
                            </tr>
                            <tr>
                                <th>Tijd wijziging</th>
                                <td><?php echo date('Y-m-d H:i:s', isset($item['blocktime']) ? $item['blocktime'] : $item['time'])?> CEST<?php echo isset($item['blocktime']) ? ' (Gemind)' : ''?></td>
                            </tr>
                            <BR>
                        </table>
    </div>
    <?php
                    }
                }
            
        }
?>

    </body>
</html>