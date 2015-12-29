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
	$("#p2").mouseenter(function(){
		$(this).hide();
	});
	$("#p1").click(function(){
		$(this).hide();
	});
	$("#p3").mousedown(function(){
		alert("I told you so");
	});
	$("#myButton").click(function(){
		$("#p4").toggle(1000);
	});
	$("#secondButton").click(function(){
		$("#p5").animate({'left': '250px', 'top':'100px'}, "slow")
	});
})

function totalPerItem(price, quantity){
	return  price * quantity;
}