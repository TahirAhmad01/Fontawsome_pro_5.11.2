(function ($) {
	'use strict'
	
	$("#search").on("click",function(){
		$("#myInput").toggle(500,"swing");
		$("#myInput").focus();
		$("#search i").toggleClass("fa-search");
		$("#search i").toggleClass("fa-undo-alt");
		$("#search").toggleClass("s_b_r");

	});

	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();

		if (scroll > 400){
			$('#top').addClass("top");
		}else{
			$('#top').removeClass("top")
		}

		if (scroll > 15){
			$('#thead tr').addClass("stickey");
		}else{
			$('#thead tr').removeClass("stickey")
		}
	});

	$('#top').on('click', function(){
		$(window).scrollTop(0)
	});

	$(window).on("load",function(){
	 	$(".loader-container").fadeOut(200);
		$(window).scrollTop(0);
		console.log("%c Window Loaded!", "color: red; font-size:35px;");
		console.log("%c Script Writter : Rakibul Islam",  "color: #0f84f1; font-size:14px; padding: 12px");
		console.log("%c website Designer: Simanto Saikat",  "color: #0f84f1; font-size:14px; padding: 12px");
		console.log("%c Develped by Lazy Developers Community (LDC)",  "color: #0f84f1; font-size:14px; padding: 12px");
    });

	$(function(){
		$("#myInput").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#myTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
	});
	

	// $(function(){
	// 	$(".coppy").on("click", function() {
	// 		$(".coppy").addClass("fade");
	// 		setTimeout(function(){
	// 			$(".coppy").removeClass("fade");
	// 		},1000);
	// 	});
	// });
	

}) (jQuery);

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
};