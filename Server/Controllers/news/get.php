<?php
    // Get 
    // http://localhost/controllers/news/get.php?id=1
    include "../../models/news.php";
    include "../api.php";
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    try{
        if(empty($queries)){
            sendResponse(404, "Not Found!", "text/html");
        }
        else{
            sendResponse(200, json_encode(News::getNews($queries["id"])), "application/json");
        }
    } catch (Exception $e){
        sendResponse(200, $e->getMessage(), "text/html");
    }
?>