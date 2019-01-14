<?php
require_once './functions.php';
$config=read_config();
$chain=@$_GET['chain'];

if (strlen($chain))
    $name=@$config[$chain]['name'];
else
    $name='';

    set_multichain_chain($config[$chain]);
      
         // call the function @

        if (no_displayed_error_result($publishtxid, multichain('publishfrom', $_GET['from'], 'CGIStream', 'orderN1287543', bin2hex($_GET['data']))));
    
        output_success_text('Item successfully published in transaction '.$publishtxid);

        header( "Location: localhost:8080" );
    ?>