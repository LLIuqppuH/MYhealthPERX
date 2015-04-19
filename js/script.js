	$(document).ready(function() {

		if ($('section.main')[0]){

		$('#validate').click(function () {
			event.preventDefault();	
			$('#firstpage span').removeClass('visible');
			$('#firstpage input').removeClass('error');
			flag=1;

			str = $( 'form' ).serializeArray();

			// FIRST LAST NAME NO NUMBERS
			str[0]['value']=str[0]['value'].replace(/[\d]/gi,"");
			$('#firstname').val(str[0]['value']);

			str[1]['value']=str[1]['value'].replace(/[\d]/gi,"");
			$('#lastname').val(str[1]['value']);

			// --------


			// NOT EMPTY
			for (var i = 0; i < str.length; i++) {
				str[i]['value']=str[i]['value'].trim();
				if (str[i]['value'].length<3) {
					flag=0;
					$('#firstpage span.'+str[i]['name']).addClass('visible');
					$('#firstpage input#'+str[i]['name']).addClass('error');

				}
			};
			// -----------

			// MAIL
			var regexp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
			var test=str[3]['value'].match(regexp);
			if (test) {
			}
			else {
				flag=0;
				$('#firstpage span.email').addClass('visible');
				$('#firstpage input#email').addClass('error');
			}
			//------------

			// PHONE

			// fck letters

			str[2]['value']=str[2]['value'].replace(/[^\d]/gi,"");
			$('#telephone').val(str[2]['value']);

			var regexp=/[^0-9]/g;
			var test=str[2]['value'].match(regexp);
			if (test!==null){
				flag=0;
				$('#firstpage span.telephone').addClass('visible');
				$('#firstpage input#telephone').addClass('error');
			}else{
				// fck bad quantity of digits
				var regexp= /\d/g;
				var test=str[2]['value'].match(regexp);
				if (test!==null){
					if ((test.length>10) && (test.length<13)) {
					}else {
						flag=0;
						$('#firstpage span.telephone').addClass('visible');
						$('#firstpage input#telephone').addClass('error');

					}
				}else{
					flag=0;
					$('#firstpage span.telephone').addClass('visible');
					$('#firstpage input#telephone').addClass('error');
				}
			}

			//RESULT?
			if (flag) {
				$( "#firstpage" ).submit();
			}else{
			}
			//--------


		});

		}
////////////////////////end page1

/*PAGE2*/
		if ($('section.proceed')[0]){
			$('.stage3 a').click(function () {
				if ($('.titleWrap').width()>959){
					event.preventDefault();
				}

			});




			var billship='different';
			var dependants=1;

			$('.shippingTab, .billingTab').click(function () {

				if (billship==='different') {
					$('.shippingTab, .billingTab').toggleClass('active');
					$('.shipping, .billing').toggleClass('visibletab');
				}

				console.log('tab clicked');
			
			});


			$('.tabs .same').click(function () {
				console.log('checkbox clicked');
				$('.tabs .same').toggleClass('on');

				if ($('.tabs .same').hasClass('on')){

					billship='same';

					$('.shippingTab').removeClass('active').addClass('active');
					$('.billingTab').removeClass('active');

					$('.shipping').removeClass('visibletab').addClass('visibletab');
					$('.billing').removeClass('visibletab');
				} else {
					billship='different';
				}
			});

			$('#plus').click(function () {
				dependants+=1;
				console.log('plus clicked');

				var paste='<div class="depnumber"><label for="">'+dependants+'. </label></div><div class="depFnameDiv"><input type="text" name="depFname'+dependants+'" class="depFname"></div><div class="depLnameDiv"><input type="text" name="depLname'+dependants+'" class="depLname"></div>';

				$(paste).appendTo('.depGroup');

				var shift=$('.depGroup').height();
				console.log(shift);		

				$('#plus').css("margin-top", (shift-68)+'px');
			});


			$('#secondpage .same').click(function () {
				if ($('#billingsame').val()==0){
					$('#billingsame').val('1');
					$('#secondpage .same').addClass('on');
				}else{
					$('#billingsame').val('0');
					$('#secondpage .same').removeClass('on');;
				}
			});

			$('fieldset.ok').click(function () {
				if ($('#agree').val()==0){
					$('#agree').val('1');
					$('fieldset.ok .checkbox').css('background-position','center bottom');
				}else{
					$('#agree').val('0');
					$('fieldset.ok .checkbox').css('background-position','center top');
				}
			});

	/////VALIDATE
			$('#validate2').click(function () {
				event.preventDefault();	

				$('#secondpage span').removeClass('visible');
				$('#secondpage input').removeClass('error');
				$('fieldset.ok').removeClass('error');

				flag=1;

				str = $( 'form' ).serializeArray();

				// tut

				// FIRST LAST NAME NO NUMBERS
				str[0]['value']=str[0]['value'].replace(/[\d]/gi,"");
				$('#secondpage').val(str[0]['value']);

				str[1]['value']=str[1]['value'].replace(/[\d]/gi,"");
				$('#secondpage').val(str[1]['value']);


				//agreed?
				if (str[20]['value']==0){
					flag=0;
					console.log('not agreed');
					$('fieldset.ok').addClass('error');

				}	



				// Billing different?
				var list=[0,1,2,3,4,16,19];
				var listBilling=[5,6,7];
				if (str[21]['value']==0){
					list= list.concat(listBilling); 
				}			

				// NOT EMPTY
				for (var i in list){
					str[list[i]]['value']=str[list[i]]['value'].trim();
					if (str[list[i]]['value'].length<3) {
						flag=0;
						console.log('too short '+list[i]+" "+str[list[i]]['name']);
						$('#secondpage span.'+str[list[i]]['name']).addClass('visible');
						$('#secondpage input#'+str[list[i]]['name']).addClass('error');

					}
				}

				// -----------

				// MAIL
				var regexp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
				var test=str[4]['value'].match(regexp);
				if (test) {
					console.log('Ok');}
				else {
					flag=0;
					console.log('enter email');
					$('#secondpage span.email').addClass('visible');
					$('#secondpage input#email').addClass('error');
				}
				//------------

				// PHONE
				str[2]['value']=str[2]['value'].replace(/[^\d]/gi,"");
				$('#telephone').val(str[2]['value']);

				var regexp=/[^0-9]/g;
				var test=str[2]['value'].match(regexp);
				if (test!==null){
					flag=0;
					$('#secondpage span.telephone').addClass('visible');
					$('#secondpage input#telephone').addClass('error');
				}else{
					// fck bad quantity of digits
					var regexp= /\d/g;
					var test=str[2]['value'].match(regexp);
					if (test!==null){
						if ((test.length>10) && (test.length<13)) {
						}else {
							flag=0;
							console.log('phone SHORT OR TOO LONG');
							$('#secondpage span.telephone').addClass('visible');
							$('#secondpage input#telephone').addClass('error');

						}
					}else{
						flag=0;
						console.log('enter phone');
						$('#secondpage span.telephone').addClass('visible');
						$('#secondpage input#telephone').addClass('error');
					}				

				}

				// ccnumber
				str[16]['value']=str[16]['value'].replace(/[^\d]/gi,"");
				$('#ccnumber').val(str[16]['value']);

				var regexp=/[^0-9]/g;
				var test=str[16]['value'].match(regexp);
				if (test!==null){
					flag=0;
					$('#secondpage span.ccnumber').addClass('visible');
					$('#secondpage input#ccnumber').addClass('error');
				}else{
					// fck bad quantity of digits
					var regexp= /\d/g;
					var test=str[16]['value'].match(regexp);
					if (test!==null){
						if ((test.length>11) && (test.length<20)) {
						}else {
							flag=0;
							console.log('ccnumber SHORT OR TOO LONG');
							$('#secondpage span.ccnumber').addClass('visible');
							$('#secondpage input#ccnumber').addClass('error');

						}
					}else{
						flag=0;
						console.log('enter ccnumber');
						$('#secondpage span.ccnumber').addClass('visible');
						$('#secondpage input#ccnumber').addClass('error');
					}				

				}


				// zip
				str[3]['value']=str[3]['value'].replace(/[^\d]/gi,"");
				$('#zip').val(str[3]['value']);

				var regexp=/[^0-9]/g;
				var test=str[3]['value'].match(regexp);
				if (test!==null){
					flag=0;
					$('#secondpage span.zip').addClass('visible');
					$('#secondpage input#zip').addClass('error');
				}else{
					// fck bad quantity of digits
					var regexp= /\d/g;
					var test=str[3]['value'].match(regexp);
					if (test!==null){
						if ((test.length>3) && (test.length<6)) {
						}else {
							flag=0;
							console.log('zip SHORT OR TOO LONG');
							$('#secondpage span.zip').addClass('visible');
							$('#secondpage input#zip').addClass('error');
						}
					}else{
						flag=0;
						console.log('enter zip');
						$('#secondpage span.zip').addClass('visible');
						$('#secondpage input#zip').addClass('error');
					}
				}

				//

				// billingzip
				if (str[21]['value']==0){
					str[21]['value']=str[21]['value'].replace(/[^\d]/gi,"");
					/*$('#billingzip').val(str[21]['value']);*/

					var regexp=/[^0-9]/g;
					var test=str[21]['value'].match(regexp);
					if (test!==null){
						flag=0;
						$('#secondpage span.billingzip').addClass('visible');
						$('#secondpage input#billingzip').addClass('error');
					}else{
						// fck bad quantity of digits
						var regexp= /\d/g;
						var test=str[21]['value'].match(regexp);
						if (test!==null){
							/*if ((test.length>0) && (test.length<10)) {
							}else {
								flag=0;
								console.log('zip SHORT OR TOO LONG');
								$('#secondpage span.billingzip').addClass('visible');
								$('#secondpage input#billingzip').addClass('error');
							}*/
						}else{
							flag=0;
							console.log('enter zip');
							$('#secondpage span.billingzip').addClass('visible');
							$('#secondpage input#billingzip').addClass('error');
						}
					}
				}

				//



				//RESULT?
				if (flag) {
					console.log('WIN');
					$( "#secondpage" ).submit();
				}else{
					console.log('FAIL (');
				}
				//--------

				console.log(str);

			});
		}
		/*END PAGE2*/






	});