// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=762023,149473,413773,413783,413793,149463,413803,413813,413823,762033,762043,690863,690873,774093,774143,690883,690893,774133,774113,774123,679913,679923,425323,683033,683043,756633';
$.ajax({
   url: priceUrl,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);
      
      var pr1 = resp['762023']['price'];
      var pr2 = resp['149473']['price'];
      var pr3 = resp['413773']['price'];
      var pr4 = resp['413783']['price'];
      var pr5 = resp['413793']['price'];
      var pr6 = resp['149463']['price'];
      var pr7 = resp['413803']['price'];
      var pr8 = resp['413813']['price'];
      var pr9 = resp['413823']['price'];
      var pr10 = resp['762033']['price'];
      var pr11 = resp['762043']['price'];
      var pr12 = resp['690863']['price'];
      var pr13 = resp['690873']['price'];
      var pr14 = resp['774093']['price'];
      var pr15 = resp['774143']['price'];
      var pr16 = resp['690883']['price'];
      var pr17 = resp['690893']['price'];
      var pr18 = resp['774133']['price'];
      var pr19 = resp['774113']['price'];
      var pr20 = resp['774123']['price'];
      var pr21 = resp['679913']['price'];
      var pr22 = resp['679923']['price'];
      var pr23 = resp['425323']['price'];
      var pr24 = resp['683033']['price'];
      var pr25 = resp['683043']['price'];
      var pr44 = resp['756633']['price'];
      
      
      document.getElementById("sku-1247684").innerHTML = pr1;
      document.getElementById("sku-1247686").innerHTML = pr2;
      document.getElementById("sku-1390946").innerHTML = pr3;
      document.getElementById("sku-1390948").innerHTML = pr4;
      document.getElementById("sku-1390950").innerHTML = pr5;
      document.getElementById("sku-1247685").innerHTML = pr6;
      document.getElementById("sku-1390951").innerHTML = pr7;
      document.getElementById("sku-1390952").innerHTML = pr8;
      document.getElementById("sku-1390953").innerHTML = pr9;
      document.getElementById("sku-1538643").innerHTML = pr10;
      document.getElementById("sku-1538644").innerHTML = pr11;
      document.getElementById("sku-1538640").innerHTML = pr44;

      document.getElementById("sku-1514829").innerHTML = pr12;
      document.getElementById("sku-1514830").innerHTML = pr13;
      document.getElementById("sku-1542177").innerHTML = pr14;
      document.getElementById("sku-1542189").innerHTML = pr15;
      document.getElementById("sku-1514833").innerHTML = pr16;
      document.getElementById("sku-1514834").innerHTML = pr17;
      document.getElementById("sku-1542188").innerHTML = pr18;
      document.getElementById("sku-1542186").innerHTML = pr19;
      document.getElementById("sku-1542187").innerHTML = pr20;
      document.getElementById("sku-1469222").innerHTML = pr21;
      document.getElementById("sku-1469223").innerHTML = pr22;
      document.getElementById("sku-1309388").innerHTML = pr23;
      document.getElementById("sku-1444165").innerHTML = pr24;
      document.getElementById("sku-1444167").innerHTML = pr25;


   }
});

//
// ]]></script>