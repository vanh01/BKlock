<?php
    // Get 
    // http://localhost/controllers/product/search.php?search=aaaaa

    include "../../models/product.php";
    include "../api.php";
    if($_SERVER["REQUEST_METHOD"] === "GET"){
        $queries = array();
        parse_str($_SERVER['QUERY_STRING'], $queries);

        sendResponse(200, json_encode(Product::searchProduct($queries["search"])), "application/json");
    } else {
        sendResponse(405, "Method Not Allowed", "text/html");
    }
?>