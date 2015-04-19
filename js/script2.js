$(document).ready(function() {

	if ($('section.main')[0]){

//banner
		bannerblink=function (){
			$('#pr_head_right').queue( function(next){ 
				$(this).css('color','#000');     
				next();
			})
				.delay(500).queue( function(next){ 
					$(this).css('color','#fff');
				next(); 
			});
		}
		intervalID = window.setInterval(bannerblink, 1000);

		$('#promo').click(function () {
			$('#promo').hide();
		});
//banner ends

		$('#firstpage').validate({
			rules:{
				firstname:{
					required: true,
					minlength: 3
				},
				lastname:{
					required: true,
					minlength: 3
				},
				telephone:{
					required: true,
					minlength: 10,
					maxlength: 24
				},
				email:{
					required: true,
					minlength: 6,
					email:true
				}
			},
			messages:{
				firstname:{
					required: "This field is required.",
					minlength: "Please enter at least 3 charactes."
				},
				lastname:{
					required: "Please fill in.",
					minlength: "Please enter at least 3 charactes."
				},
				telephone:{
					required: "This field is required.",
					minlength: "Please enter at least 10 digits.",
					maxlength: "Please enter less than 24 charactes."
				},
				email:{
					required: "This field is required.",
					minlength: "Please enter a valid email.",
					email: "Please enter a valid email."
				}
			}
		});	


		$('#validate').click(function () {
			event.preventDefault();	

			flag=$("#firstpage").valid();

			//RESULT?
			if (flag) {
				console.log('WIN');
				$( "#firstpage" ).submit();
			}else{
				console.log('FAIL (');
			}
			//--------

			/*
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
			
			*/

			//RESULT?
			if (flag) {
				$( "#firstpage" ).submit();
			}else{
			}

		});

	}

////////////////////////end page1

/*PAGE2*/
/****add dependants*****/
		if ($('section.proceed')[0]){
			function setplusY(){
				var currentY=42*(dependants-1);
				if ($(window).width()<959){currentY=currentY*2+21}
				$('#plus').css("margin-top", currentY+'px');
			}
			$(window).resize(setplusY);
/****validation*****/

			$("#secondpage").validate({
				rules:{
					address:{
						required: true,
						minlength: 6
					},
					city:{
						required: true,
						minlength: 3
					},
					telephone:{
						required: true,
						minlength: 11,
						maxlength: 24
					},
					zip:{
						required: true,
						minlength: 5,
					},
					email:{
						required: true,
						minlength: 6,
						email:true
					},
					billingadress:{
						required: function (){return ($('#billingsame').val()==0)?true:false;},
						minlength: 3
					},
					billingcity:{
						required: function (){return ($('#billingsame').val()==0)?true:false;},
						minlength: 3
					},
					billingzip:{
						required: function (){return ($('#billingsame').val()==0)?true:false;},
						minlength: 5
					},
					day:{
						required: true,
						min: 1,
						max: 31
					},
					month:{
						required: true,
						minlength: 1
					},
					year:{
						required: true,
						min: 1880,
						max: 2015
					},
					depFname:{
						minlength: 3
					},
					depLname:{
						minlength: 3
					},
					ccnumber:{
						required: true,
						creditcard: true
					},
					ccexpiremonth:{
						minlength: 1
					},
					cvv:{
						required: true,
						minlength: 3,
						maxlength: 3
					},
					agree:{
						required: true,
					}
				},
				messages:{
					address:{
						required: "This field is required.",
						minlength: "Please enter at least 6 charactes."
					},
					city:{
						required: "Please fill in.",
						minlength: "Please enter at least 3 charactes."
					},
					telephone:{
						required: "This field is required.",
						minlength: "Please enter at least 10 digits.",
						maxlength: "Please enter less than 24 charactes."
					},
					zip:{
						required: "This field is required.",
						minlength: "Please enter at least 5 digits."
					},
					email:{
						required: "This field is required.",
						minlength: "Please enter a valid email.",
						email: "Please enter a valid email."
					},
					billingadress:{
						required: "This field is required.",
						minlength: "Please enter at least 3 charactes."
					},
					billingcity:{
						required: "This field is required.",
						minlength: "Please enter at least 3 charactes."
					},
					billingzip:{
						required: "This field is required.",
						minlength: "Please enter at least 5 digits."
					},
					day:{
						required: "",
						min: "",
						max: ""
					},
					month:{
						required: "",
						minlength: ""
					},
					year:{
						required: "",
						min: "",
						max: ""
					},
					depFname:{
						minlength: "Please enter at least 3 charactes."
					},
					depLname:{
						minlength: "Please enter at least 3 charactes."
					},
					ccnumber:{
						required: "This field is required.",
						creditcard: "Please enter a valid value."
					},
					ccexpiremonth:{
						minlength: "Please enter a valid value."
					},
					cvv:{
						required: "Please enter a valid value.",
						minlength: "Please enter a valid value.",
						maxlength: "Please enter a valid value.",
					},
					agree:{
						required: "Please confirm.",
					}
				}/*,
				submitHandler: function(form) {
					$(form).submit();
				}*/
			});	
/*********/

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

				var paste='<div class="depnumber"><label for="">'+dependants+
				'. </label></div><div class="depFnameDiv"><input type="text" name="depFname'+dependants+
				'"><input type="text" name="depLname'+dependants+
				'"></div>';

				$(paste).appendTo('.depGroup');

				//var shift=$('.depGroup').height();
				//console.log(shift);


				
				//var currentY=parseFloat($('#plus').css("margin-top"));
				setplusY();

				


				console.log(currentY);	



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
				checkbox=$('#agree')[0];
				checkbox.checked=!checkbox.checked;				
				$('fieldset.ok .checkbox').css('background-position','center '+((checkbox.checked)?'bottom':'top'));
				

				console.log('#agree clicked');
				/*
				if (checkbox.checked){
					checkbox.checked=false;
					$('fieldset.ok .checkbox').css('background-position','center top');
				}else{
					checkbox.checked=true;
					$('fieldset.ok .checkbox').css('background-position','center bottom');
				}*/				

				



				/*
				if ($('#agree').val()==0){
					$('#agree').val('1');
					$('fieldset.ok .checkbox').css('background-position','center bottom');
				}else{
					$('#agree').val('0');
					$('fieldset.ok .checkbox').css('background-position','center top');
				}*/

			});

	/////VALIDATE
			$('#validate2').click(function () {
				event.preventDefault();

				flag=$("#secondpage").valid();

				

				//RESULT?
				if (flag) {
					console.log('WIN');
					$( "#secondpage" ).submit();
				}else{
					console.log('FAIL (');
				}
				//--------

				str = $( 'form' ).serializeArray();
				console.log(str);

			});
		}
		/*END PAGE2*/






	});