//<script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522533,1522543,1522653,1522663,1522673,1522683,1522693,1522703,1522713,762033,762043,690883,690893,774133,774113,774123,683043,683033,125053,125063,125103,424493';
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
      var pr26 = resp['125053']['price'];
      var pr27 = resp['125063']['price'];
      var pr28 = resp['125103']['price'];
      var pr29 = resp['424493']['price'];
      
      
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
      document.getElementById("sku-1227118").innerHTML = pr26;
      document.getElementById("sku-1227119").innerHTML = pr27;
      document.getElementById("sku-1227120").innerHTML = pr28;
      document.getElementById("sku-1365723").innerHTML = pr29;

   }
});

var priceUrl2 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=35614';
$.ajax({
   url: priceUrl2,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr34 = resp['35614']['price'];

      document.getElementById("sku-986078").innerHTML = pr34;

   }
});

var priceUrl3 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=537523,1002043,418303';
$.ajax({
   url: priceUrl3,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['418303']['price'];
      var pr40 = resp['1002043']['price'];
      var pr41 = resp['537523']['price'];
      
      document.getElementById("sku-1386570").innerHTML = pr36;
      document.getElementById("sku-1609548").innerHTML = pr40;
      document.getElementById("sku-1397152").innerHTML = pr41;

   }
});

var priceUrl6 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=605033,1078013,1078023,1078033,1078043,1078053,1078063,1078073,975913,935013';
$.ajax({
   url: priceUrl6,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr45 = resp['935013']['price'];
      var pr48 = resp['605033']['price'];
      var pr50 = resp['1078013']['price'];
      var pr51 = resp['1078023']['price'];
      var pr52 = resp['1078033']['price'];
      var pr53 = resp['1078043']['price'];
      var pr54 = resp['1078053']['price'];
      var pr55 = resp['1078063']['price'];
      var pr56 = resp['1078073']['price'];
      var pr58 = resp['975913']['price'];
      
      document.getElementById("sku-1588321").innerHTML = pr45;
      document.getElementById("sku-1486211").innerHTML = pr48;
      document.getElementById("sku-1576093").innerHTML = pr50;
      document.getElementById("sku-1576094").innerHTML = pr51;
      document.getElementById("sku-1576095").innerHTML = pr52;
      document.getElementById("sku-1576096").innerHTML = pr53;
      document.getElementById("sku-1576097").innerHTML = pr54;
      document.getElementById("sku-1576098").innerHTML = pr55;
      document.getElementById("sku-1576099").innerHTML = pr56;
      document.getElementById("sku-1605069").innerHTML = pr58;
   }
});

var priceUrl33 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=1522493,1522483,1522473,1522463,1522453';
$.ajax({
   url: priceUrl33,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['1522453']['price'];
      var pr40 = resp['1522463']['price'];
      var pr41 = resp['1522473']['price'];
      var pr42 = resp['1522483']['price'];
      var pr43 = resp['1522493']['price'];
      
      document.getElementById("sku-1696532").innerHTML = pr36;
      document.getElementById("sku-1696535").innerHTML = pr40;
      document.getElementById("sku-1696537").innerHTML = pr41;
      document.getElementById("sku-1696538").innerHTML = pr42;
      document.getElementById("sku-1696539").innerHTML = pr43;

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