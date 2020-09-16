// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl6 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=605033,1078013,1078023,1078033,1078043,1078053,1078063,1078073,935013,35614';
$.ajax({
   url: priceUrl6,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr34 = resp['35614']['price'];
      var pr45 = resp['935013']['price'];
      var pr48 = resp['605033']['price'];
      var pr50 = resp['1078013']['price'];
      var pr51 = resp['1078023']['price'];
      var pr52 = resp['1078033']['price'];
      var pr53 = resp['1078043']['price'];
      var pr54 = resp['1078053']['price'];
      var pr55 = resp['1078063']['price'];
      var pr56 = resp['1078073']['price'];
      
      document.getElementById("sku-1588321").innerHTML = pr45;
      document.getElementById("sku-1486211").innerHTML = pr48;
      document.getElementById("sku-1576093").innerHTML = pr50;
      document.getElementById("sku-1576094").innerHTML = pr51;
      document.getElementById("sku-1576095").innerHTML = pr52;
      document.getElementById("sku-1576096").innerHTML = pr53;
      document.getElementById("sku-1576097").innerHTML = pr54;
      document.getElementById("sku-1576098").innerHTML = pr55;
      document.getElementById("sku-1576099").innerHTML = pr56;
      document.getElementById("sku-986078").innerHTML = pr34;
   }
});

//
// ]]></script>