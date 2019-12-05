<?php

    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
    // echo `whoami`; // Ver el usuario que esta ejectutando php

    $response =  [
        'status' => true,
        'message' => ''
    ];

    extract($_POST);
    // extract($_GET);

    if(isset($es_json) || isset($en_json)) {

        try {
            
            if(isset($es_json) && !empty($es_json)) {
                $fp = fopen('es.json', "w+") or die('Error al intentar crear el archivo.');
                fputs($fp, $es_json);
                fclose($fp);
            }
            if(isset($en_json) && !empty($en_json)) {
                $fp = fopen('en.json', "w+") or die('Error al intentar crear el archivo.');
                fputs($fp, $en_json);
                fclose($fp);
            }

            http_response_code(200);
            $response['message'] = 'Archivo actualizado con exito.';

        } catch (Exception $e) {

            $response['status'] = false;
            $response['message'] = $e->getMessage();
            http_response_code(500);

        }

    } else {

        $response['status'] = false;
        $response['message'] = 'El recurso solicitado no esta disponible.';
        http_response_code(404);

    }

    echo json_encode($response);

    
    
    
    