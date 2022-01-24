<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require_once 'simple_html_dom.php';

$url="https://books.toscrape.com"; 
$ch = curl_init(); 
curl_setopt ($ch, CURLOPT_URL, $url); 
curl_setopt ($ch, CURLOPT_URL, $url); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT,10);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false);

$result = curl_exec ($ch); 
//echo $result;  
curl_close($ch);

$i=0;



// include simple_html_dom class here
// which can be downloaded from http://simplehtmldom.sourceforge.net/

$oDom = new simple_html_dom();
$oDom->load($result);
//$textFieldValue = $oDom->find('.product_pod',0)->value;
//echo $textFieldValue; // will return www.google.com


foreach($oDom->find(".product_pod") as $div_class){


    foreach($div_class->find(".price_color") as $price){

       // $results[$i]['price'] = $price->plaintext;

       $pr[] = $price->plaintext;

         // echo $results[$i]['price'].'<br>';

     }
        

    foreach($div_class->find('img') as $image){
       // $results[$i]['image'] =$image->src;

         $img[] = "https://books.toscrape.com/".$image->src;

    }
    foreach($div_class->find('.image_container') as $container){

        foreach($container->find('a') as $link){
            // $results[$i]['link'] =$link->href;
     
            $path[] = $link->href;
     
         //  echo $results[$i]['image'].'<br>';
     
         }

    }

   

    foreach($div_class->find("h3") as $title){
        $tit[] = $title->plaintext;
    }



}



   print_r(
                    json_encode(
                        array('title' => $tit,
                             'price' => $pr,
                             'img' => $img,
                             'path' =>$path                        )
                    )
                    );

?>