<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require_once 'simple_html_dom.php';

$url = "https://books.toscrape.com/".$_POST['path'];

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


$oDom = new simple_html_dom();
$html = $oDom->load($result);
$result = array();
// $outout= array();

 $div_class = $title = "";
 $desc="";
 $data1="";
 $tr="";
 $td="";


 $i = 0;
 $j=0;
 $k=0;



     
     if(!empty($html)){


         foreach($html->find(".product_main") as $div_class){
     

             
             foreach($div_class->find('h1') as $title){
                 $results[$i]['title'] =$title->plaintext;
     
                // echo $results[$i]['title'].'<br>';

                $title = $results[$i]['title'];
     
             }

             
             foreach($div_class->find('.price_color') as $price){
                 $results[$j]['price'] = $price->plaintext;
     
                // echo $results[$i]['title'].'<br>';

                 $price = $results[$i]['price'];
     
             }

           /*  print_r(
                 json_encode(
                     array('data' => $data1)
                 )
                 );*/

         /*    print_r(
                 json_encode(
                     array(
                         'title' =>$title,
                         'price' =>$price,
                        // 'desc' =>$desc,
                         'info' =>$info
                     )
                 )
                     );*/

           //echo json_encode($output);


             $i++;
             $j++;
             
         }

         
         foreach($html->find('p') as $desc){

           //  foreach($div->find('p') as $desc){
                 $results[$i]['desc'] =$desc->plaintext;
     
                // echo $results[$i]['title'].'<br>';

                $desc = $results[$i]['desc'];
     
             //}

             
         }

         foreach($html->find(".product_page") as $div_class1){


             foreach($div_class1->find('.table') as $table){

               //  $results[$k]['table'] = $table->plaintext;
              //   $data1 = $results[$k]['table'];

                 foreach($table->find('th') as $tr){

                     //$results[$k]['tr'] =$tr->plaintext;
                     $tr1[] = $tr->plaintext;
                   
                 }

                foreach($table->find('td') as $td){

                     
                     $td1[] =$td->plaintext;
                     

                 }
                // $results[$i]['title'] =$title->plaintext;

     
               //  echo $results[$i]['title'].'<br>';

               // $title = $results[$i]['title'];

      
     
             }

             
         

             $k++;

         }


            print_r(
                 json_encode(
                     array(
                         'title' =>$title,
                         'price' =>$price,
                         'desc' =>$html->find('p',3)->plaintext,
                         'td1' =>$td1,
                         'tr1' =>$tr1,
                     )
                 )
                     );

     }
     else{

         print_r(json_encode(array(
             "html"=> "ELSE",
         )));

     }


?>