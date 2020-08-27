// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=762023,149473,413773,413783,413793,149463,413803,413813,413823,762033,762043,690863,690873,774093,774143,690883,690893,774133,774113,774123,679913,425323,683043,683033,125053,125063,125103,424493';
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
      var pr23 = resp['425323']['price'];
      var pr24 = resp['683033']['price'];
      var pr25 = resp['683043']['price'];
      var pr26 = resp['125053']['price'];
      var pr27 = resp['125063']['price'];
      var pr28 = resp['125103']['price'];
      var pr29 = resp['424493']['price'];
      
      
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
      document.getElementById("sku-1309388").innerHTML = pr23;
      document.getElementById("sku-1444165").innerHTML = pr24;
      document.getElementById("sku-1444167").innerHTML = pr25;
      document.getElementById("sku-1227118").innerHTML = pr26;
      document.getElementById("sku-1227119").innerHTML = pr27;
      document.getElementById("sku-1227120").innerHTML = pr28;
      document.getElementById("sku-1365723").innerHTML = pr29;

   }
});

var priceUrl2 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=35614,566243';
$.ajax({
   url: priceUrl2,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr34 = resp['35614']['price'];
      var pr35 = resp['566243']['price'];

      document.getElementById("sku-986078").innerHTML = pr34;
      document.getElementById("sku-1462781").innerHTML = pr35;

   }
});

var priceUrl3 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=537523,1002043,344563,355603,726813,418303';
$.ajax({
   url: priceUrl3,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['418303']['price'];
      var pr37 = resp['344563']['price'];
      var pr38 = resp['355603']['price'];
      var pr39 = resp['726813']['price'];
      var pr40 = resp['1002043']['price'];
      var pr41 = resp['537523']['price'];
      
      document.getElementById("sku-1386570").innerHTML = pr36;
      document.getElementById("sku-1349305").innerHTML = pr37;
      document.getElementById("sku-1349306").innerHTML = pr38;
      document.getElementById("sku-1530379").innerHTML = pr39;
      document.getElementById("sku-1609548").innerHTML = pr40;
      document.getElementById("sku-1397152").innerHTML = pr41;

   }
});

var priceUrl6 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=605033,1078013,1078023,1078033,1078043,1078053,1078063,1078073,1043323,975913,935013,756633';
$.ajax({
   url: priceUrl6,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr44 = resp['756633']['price'];
      var pr45 = resp['935013']['price'];
      var pr48 = resp['605033']['price'];
      var pr50 = resp['1078013']['price'];
      var pr51 = resp['1078023']['price'];
      var pr52 = resp['1078033']['price'];
      var pr53 = resp['1078043']['price'];
      var pr54 = resp['1078053']['price'];
      var pr55 = resp['1078063']['price'];
      var pr56 = resp['1078073']['price'];
      var pr57 = resp['1043323']['price'];
      var pr58 = resp['975913']['price'];
      
      document.getElementById("sku-1538640").innerHTML = pr44;
      document.getElementById("sku-1588321").innerHTML = pr45;
      document.getElementById("sku-1486211").innerHTML = pr48;
      document.getElementById("sku-1576093").innerHTML = pr50;
      document.getElementById("sku-1576094").innerHTML = pr51;
      document.getElementById("sku-1576095").innerHTML = pr52;
      document.getElementById("sku-1576096").innerHTML = pr53;
      document.getElementById("sku-1576097").innerHTML = pr54;
      document.getElementById("sku-1576098").innerHTML = pr55;
      document.getElementById("sku-1576099").innerHTML = pr56;
      document.getElementById("sku-1609546").innerHTML = pr57;
      document.getElementById("sku-1605069").innerHTML = pr58;
   }
});

//
// ]]></script>