$( function() {
	'use strict'

	$.ajax( {
		url: 'faicons.json',

		success: function( res ) {

			var myTable = $( '#myTable' );
			var categories = [ 'fa', 'fad', 'fal', 'far', 'fas', 'fab' ];

			res.forEach( icon => {

				var trElem = $( '<tr/>' );
				trElem.append( $( '<td/>' ).text( icon[0] ) );

				categories.forEach( category => {

					var tdElem = $( '<td/>', { class: 'ico' } );

					if ( ( category == 'fab' && icon[1] == 1 ) || ( category != 'fab' && icon[1] != 1 ) ) {

						var btnElem = $( '<button/>', { class: 'copy' } ).html( '<i class="fa fa-copy"></i>' );
						var data = '<i class="' + category + ' ' + icon[0] + '"></i>';

						btnElem.on( 'click', function() {
							var $temp = $( "<input>" );
							$( 'body' ).append( $temp );
							$temp.val( data ).select();
							document.execCommand("copy");
							$temp.remove();
							$(".coppied").addClass("coppied_active");
							$(".coppied").text( "Coppied! Paste me ")
							setTimeout(function(){
								$(".coppied").removeClass("coppied_active");
							}, 1000)
						} );

						tdElem.append( data ).append( $( '<div/>' ).append( btnElem ) );
					}

					trElem.append( tdElem );
				});

				myTable.append( trElem );

			} );

			myTable.ready( function() {
				$(".loader-container").fadeOut(200);
				$(window).scrollTop(0);

				console.log("%c Window Loaded!", "color: red; font-size:35px;");
				console.log("%c Script Writter : Rakibul Islam",  "color: #0f84f1; font-size:14px; padding: 12px");
				console.log("%c website Designer: Tahir Ahmad",  "color: #0f84f1; font-size:14px; padding: 12px");
				console.log("%c Develped by Lazy Developers Community (LDC)",  "color: #0f84f1; font-size:14px; padding: 12px");

				$("#search").on("click",function(){
					$("#myInput").toggle ( 500,"swing" );
					$("#myInput").focus();
					$("#search i").toggleClass("fa-search");
					$("#search i").toggleClass("fa-arrow-left");
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

				$("#myInput").on("keyup", function() {
					var value = $(this).val().toLowerCase();
					$("#myTable tr").filter(function() {
						$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
					});
				});
			} );
		}
	} );
} );