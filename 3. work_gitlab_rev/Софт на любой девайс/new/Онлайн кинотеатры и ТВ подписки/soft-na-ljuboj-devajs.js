// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522533,1522543,1522653,1522683,1522693,762033,762043,690883,690893,774133,683033,683043';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr1 = resp['1522533']['price'];
      var pr2 = resp['1522543']['price'];
      var pr3 = resp['1522653']['price'];
      var pr6 = resp['1522683']['price'];
      var pr7 = resp['1522693']['price'];
      var pr10 = resp['762033']['price'];
      var pr11 = resp['762043']['price'];
      var pr16 = resp['690883']['price'];
      var pr17 = resp['690893']['price'];
      var pr18 = resp['774133']['price'];
      var pr24 = resp['683033']['price'];
      var pr25 = resp['683043']['price'];


      document.getElementById("sku-1699941").innerHTML = pr1;
      document.getElementById("sku-1699945").innerHTML = pr2;
      document.getElementById("sku-1700020").innerHTML = pr3;
      document.getElementById("sku-1700029").innerHTML = pr6;
      document.getElementById("sku-1700031").innerHTML = pr7;
      document.getElementById("sku-1538643").innerHTML = pr10;
      document.getElementById("sku-1538644").innerHTML = pr11;
      document.getElementById("sku-1514833").innerHTML = pr16;
      document.getElementById("sku-1514834").innerHTML = pr17;
      document.getElementById("sku-1542188").innerHTML = pr18;
      document.getElementById("sku-1444165").innerHTML = pr24;
      document.getElementById("sku-1444167").innerHTML = pr25;


   }
});

var priceUrl33 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522473,1522463,1522453';
$.ajax({
   url: priceUrl33,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['1522453']['price'];
      var pr40 = resp['1522463']['price'];
      var pr41 = resp['1522473']['price'];
      
      document.getElementById("sku-1696532").innerHTML = pr36;
      document.getElementById("sku-1696535").innerHTML = pr40;
      document.getElementById("sku-1696537").innerHTML = pr41;

   }
});

var priceUrl34 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1248513,1248523,1373683,1373693,1248533,1248543';
$.ajax({
   url: priceUrl34,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['1248513']['price'];
      var pr40 = resp['1248523']['price'];
      var pr41 = resp['1373683']['price'];
      var pr42 = resp['1373693']['price'];
      var pr43 = resp['1248533']['price'];
      var pr44 = resp['1248543']['price'];
      
      document.getElementById("sku-1663203").innerHTML = pr36;
      document.getElementById("sku-1663204").innerHTML = pr40;
      document.getElementById("sku-1663205").innerHTML = pr41;
      document.getElementById("sku-1663206").innerHTML = pr42;
      document.getElementById("sku-1663207").innerHTML = pr43;
      document.getElementById("sku-1663210").innerHTML = pr44;

   }
});

//
// ]]></script>