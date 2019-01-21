<?php

    $keys = array(
        'apiURL'
    );

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    $conf = array();
    foreach($keys as $key){
        $conf[$key] = getenv($key);
    }
    echo json_encode($conf); 
?>