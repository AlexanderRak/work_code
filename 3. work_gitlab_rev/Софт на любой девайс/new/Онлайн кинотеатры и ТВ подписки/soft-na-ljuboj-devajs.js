// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522533,1522543,1522653,1522663,1522673,1522683,1522693,1522703,1522713,762033,762043,690883,690893,774133,774113,774123,683033,683043';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr1 = resp['1522533']['price'];
      var pr2 = resp['1522543']['price'];
      var pr3 = resp['1522653']['price'];
      var pr4 = resp['1522663']['price'];
      var pr5 = resp['1522673']['price'];
      var pr6 = resp['1522683']['price'];
      var pr7 = resp['1522693']['price'];
      var pr8 = resp['1522703']['price'];
      var pr9 = resp['1522713']['price'];
      var pr10 = resp['762033']['price'];
      var pr11 = resp['762043']['price'];
      var pr16 = resp['690883']['price'];
      var pr17 = resp['690893']['price'];
      var pr18 = resp['774133']['price'];
      var pr19 = resp['774113']['price'];
      var pr20 = resp['774123']['price'];
      var pr24 = resp['683033']['price'];
      var pr25 = resp['683043']['price'];


      document.getElementById("sku-1699941").innerHTML = pr1;
      document.getElementById("sku-1699945").innerHTML = pr2;
      document.getElementById("sku-1700020").innerHTML = pr3;
      document.getElementById("sku-1700022").innerHTML = pr4;
      document.getElementById("sku-1700023").innerHTML = pr5;
      document.getElementById("sku-1700029").innerHTML = pr6;
      document.getElementById("sku-1700031").innerHTML = pr7;
      document.getElementById("sku-1700033").innerHTML = pr8;
      document.getElementById("sku-1700034").innerHTML = pr9;

      document.getElementById("sku-1538643").innerHTML = pr10;
      document.getElementById("sku-1538644").innerHTML = pr11;

      document.getElementById("sku-1514833").innerHTML = pr16;
      document.getElementById("sku-1514834").innerHTML = pr17;
      document.getElementById("sku-1542188").innerHTML = pr18;
      document.getElementById("sku-1542186").innerHTML = pr19;
      document.getElementById("sku-1542187").innerHTML = pr20;
      document.getElementById("sku-1444165").innerHTML = pr24;
      document.getElementById("sku-1444167").innerHTML = pr25;


   }
});

//
// ]]></script>