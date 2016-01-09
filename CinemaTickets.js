$(function(){
	
	$("#button").click(function(){
		var quantity1 = $("#firstQuantity").val();
		var quantity2 = $("#secondQuantity").val();
		var quantity3 = $("#thirdQuantity").val();
		var price1 = $("#firstPrice").text().substr(1);
		var price2 = $("#secondPrice").text().substr(1);
		var price3 = $("#thirdPrice").text().substr(1);
		$("#total").html("£" + (totalPerItem(price1, quantity1) + totalPerItem(price2, quantity2) + totalPerItem(price3, quantity3)).toFixed(2));
	});
})

function totalPerItem(price, quantity){
	return  price * quantity;
}