<?php
include "../../models/sql.php";

class Payment
{

    public static function makePayment($products, $user)
    {
        //delete from adds
        $where = "where ";
        $first = true;
        foreach ($products as $product) {
            if ($first) {
                $first = false;
                $where .= "productId = " . $product->id;
            } else {
                $where .= " or productId = " . $product->id;
            }
        }
        $query1 = "delete from adds " . $where . " and customId =" . $user;
        $result1 = Sql::getInstance()->updateData($query1);

        $tempQuery = "select max(id) from `ordered_item` where cusId = " . $user;

        $temp = Sql::getInstance()->getData($tempQuery);
        if ($temp->num_rows > 0) {
            $curId = intval($temp->fetch_assoc()["max(id)"]) + 1;
        } else {
            $curId = 1;
        }
        // add order item
        $query2 = "";
        foreach ($products as $product) {
            $query2 .= "insert into ordered_item(id, orderDate, cusId) values(" . $curId . ", NOW()," . $user . ")";
        }

        $result2 = Sql::getInstance()->updateData($query2);

        $query3 = "";
        foreach ($products as $product) {
            $query3 .= "insert into belong (ordCusId, ordItemId, productId, quantity) values(" . $user . ", " . $curId . ", " . $product->id . ", " . $product->quantity . ");";
        }

        $result3 = Sql::getInstance()->updateData($query3);

        return $result1 && $result2 && $result3;
    }

    public static function getOrderedItems($id){
        $query = "SELECT image, name, price, quantity, brand FROM `ordered_item`, `product` WHERE `ordered_item`.id = `product`.id AND cusId = " . $id;
        $temp = Sql::getInstance()->getData($query);
        $temp_array = array();

        if($temp->num_rows >0){
            while($row = $temp->fetch_assoc()){
                $temp_array[] = $row;
            }
        }
        
        return $temp_array;
    }
}
