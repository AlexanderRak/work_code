// <script language="JavaScript" type="text/javascript"> // <![CDATA[

function getCookie(name) {
   var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
   ));
   return matches ? decodeURIComponent(matches[1]) : undefined;
}
var city = getCookie('active_city_id');
var priceUrl3 = 'https://comfy.ua/online_remains/product/ritail_rockets_price.php?city_id=' + city + '&ids=726813';
$.ajax({
   url: priceUrl3,
   type: 'get',
   success: function (output) {
      var resp = JSON.parse(output);


      var pr39 = resp['726813']['price'];

      document.getElementById("sku-1530379").innerHTML = pr39;


   }
});

//
// ]]></script>