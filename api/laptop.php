<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $curl = curl_init();

//$search_string = "movies&crid=2MDYO1CLHUDH1&sprefix=movie%2Caps%2C426&ref=nb_sb_noss";
//$url = "https://www.amazon.in/s?k=$search_string";
$url = "https://www.amazon.in/s?k=laptop&crid=146XOOZJM8N6H&sprefix=laptop%2Caps%2C246&ref=nb_sb_noss_1";

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);

//curl_exec($curl);

//https://www.amazon.in/s?k=pc+video+games+2016&crid=24ADDVTSYYH04&sprefix=pc+video+games+2016%2Caps%2C301&ref=nb_sb_noss
//https://m.media-amazon.com/images/I/41Rls-5jOuL._AC_UL320_.jpg

$result = curl_exec($curl);
$result1 = $result; 

//preg_match_all("!https://m.media-amazon.com/images/I/[^\s]*?._AC_UL320_.jpg!",$result,$matches);

//$pattern = '/<div class="s-title-instructions-style">([\s\S]*)<\/div>/';  

//preg_match_all($pattern,$result,$matches);


preg_match_all("!https://m.media-amazon.com/images/I/[^\s]*?._AC_UY218_.jpg!",$result,$matches);


$images = array_values( array_unique($matches[0]) );

//$pattern = '/<span class="a-size-medium a-color-base a-text-normal">([\s\S]*)<\/span>/';

$pattern = '/<span class="a-size-medium a-color-base a-text-normal">'.
'(.*?)<\/span>/';

preg_match_all($pattern,$result1,$matches1);
$title = array_values( array_unique($matches1[1]) );

$pattern1 = '/<span class="a-price-whole">'.
'(.*?)<\/span>/';
preg_match_all($pattern1,$result1,$matches2);
$price = array_values(array_unique($matches2[1]));

//print_r ($images);

/*
for($i=0; $i < count($images) ; $i++) {
    echo "<div style='float:left; margin:10 0 0 0;'>";
    echo "<img src='$images[$i]'><br />";
    echo "</div>";
}
*/

print_r(
    json_encode(
        array(
            'images'=>$images,
	        'title'=>$title,
            'price' =>$price,
        )
    )
    );

curl_close($curl);





?>