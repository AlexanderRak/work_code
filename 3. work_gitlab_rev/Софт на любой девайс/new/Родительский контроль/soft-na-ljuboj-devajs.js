// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl3 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=418303,344563,355603';
$.ajax({
   url: priceUrl3,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);

      var pr36 = resp['418303']['price'];
      var pr37 = resp['344563']['price'];
      var pr38 = resp['355603']['price'];
      
      document.getElementById("sku-1386570").innerHTML = pr36;
      document.getElementById("sku-1349305").innerHTML = pr37;
      document.getElementById("sku-1349306").innerHTML = pr38;


   }
});

//
// ]]></script>