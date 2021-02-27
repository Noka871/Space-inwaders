var bod = $('body');
var size = 100;
var output = setInterval(function(){
	
	size -= 2;
	document.body.style.backgroundPosition =  '100%' + size +'%' 
	
	
},60) 


var block = document.getElementById('my');
var deng = document.getElementById('denger');
var shot = document.getElementById('one');
var kil = document.getElementById('mu2');
var kil2 = document.getElementById('two');
var kil22 = document.getElementById('two2');
var hp = document.getElementById('hp3');
var hp2 = document.getElementById('hp4');
var left = 0;
var right = 0;
var top1 = 0;
var ball2 = 0;
var a =0;
var em = 1;
var left2 = 0
var stop = false;
var hepDang = 100;
var right2 = 0;
var shoter = 0
//player			https://prnt.sc/izpflr
$(shot).hide();



	 function nextLevel(){
			stop = true;
			$('.hud').addClass('display')
			$('.hud').removeClass('hud');
			$('#x').addClass('hud');
			
			$('#butTwo').on('click', function(){
				
				$('.display').addClass('hud');
				$('.display').removeClass('display');
				$('#x').removeClass('hud');
				
				stop = false;
				
				hep = 100;
				hp.style.width = hep+'%';
				left = 0;
				right = 0;
				top1 = 0;
				left2 = 0
				right2 = 0;
				shoter = 0
				shot.style.top = top1 +'px';
				shot.style.left = left2 + 'px';
				block.style.left = left + 'px';
				deng.style.left = right + 'px';
				kil.style.left = right + 'px'
				kil2.style.bottom = shoter +'px';
				kil2.style.left = right2 +'px';
				hepDang = 100;
				hp2.style.width = hepDang+'%';
				
				
			})
			$('#butOne').on('click', function(){
				document.location.href = "level2.html";
			})
			$('#butFoo').on('click', function(){
				document.location.href = "index.html";
			})
			
		}





document.onkeydown = function(event){
	if(stop == true){
		
		return false;
	}else{
	
	if(em<1){
		left2+=0;
		shot.style.left = left2 + 'px';
		
	}else{
		if(event.key == 'ArrowRight'){
		left2+=10;
		shot.style.left = left2 + 'px';
		if(left2>=400){
			left2=390;
			}
		}
		
		if(event.key == 'ArrowLeft'){left2+=-10;
		shot.style.left = left2 + 'px';
		if(left2<=-400){
		left2=-390;}
			}
		}
		
	
	console.log(event);

	
	if(event.key == 'ArrowRight'){
		
		left+=10;
		block.style.left = left +'px';
		if(left>=400){
			left=390;
			}
		}
		if(event.key == 'ArrowLeft'){
			
			left-=10;
			block.style.left = left +'px';
			if(left<=-400){
			left=-390;
			}
		}
	}
}	
		
		
		
		
	var hep = 100;	
document.onkeyup = function(event){
		if(stop == true){
			return false;
		}else{
		a++;
		
			if(a>1){
				return false;
				alert(a);
			}
		if(event.key == 'ArrowUp'){
			
			em--;
			
			
			
			var red = setInterval (function(){
			$(shot).show();
			top1+=10;
			
			shot.style.top = top1 +'px';
			
			//a+=1;
			
			if(left2 == right || left2>right-50 && left2 < right+50){
				
				if(top1 == 460){
					hep-=20;
					$('#one').hide();
					var opaciti = 0;
					var seter = setInterval(function(){
						
						if(opaciti<1){
						opaciti +=0.2
						document.getElementById('denger').style.opacity = opaciti;
						document.getElementById('two').style.opacity = opaciti;
						document.getElementById('mu2').style.opacity = opaciti;
						}else{
							opaciti = 0;
							setTimeout(function(){
							clearInterval(seter);
				})
			}
					
						
		},100)

		
		
		
		shot.style.top = top1 +'px';
		left2 = left;
		hp.style.width = hep+'%';
		if(hep ==0){
	
		nextLevel();
		document.getElementById('txtPlay').innerHTML = 'Вы выйграли!';
		}
	
	}
	
}
			
			if(top1 == 580){
				
				left2 = left;
				shot.style.left = left2 + 'px';
				top1 = 0;
				shot.style.top = top1 +'px';
				$(shot).hide();
				a = 0;
				em++
				//$('#one').show();
				setTimeout(function(){
					clearInterval(red);
					
					
				})
			
			}//,50)
			},50)
			
			
		}else{
			
			a = 0;
			
		}
}
}	
		
		
		
		
		
	
	
	
	
	

	//npc

	//var hepDang = 100;
	
	var mas = new Array();
		mas[0] = 1;
		mas[1] = 2;
	
		
		var rand = Math.random();
		rand = rand *2;
		rand = Math.floor(rand);
		rand = mas[rand];
		var time = setInterval (function(){
			if(stop == true){
				return false;
			}else{
		if(rand == mas[0]){
			right +=10;
			deng.style.left = right + 'px';
			kil.style.left = right + 'px'
			
			

			if(shoter>0){
				right2 +=0;
				kil2.style.left = right2 + 'px'
			}else{
				right2=right
				kil2.style.left = right2 + 'px'
				
			}
			
			
		
			
			if(right>=400){
			right=390;
			rand = mas[1];
			}
			
		}else{

			right -=10;
			deng.style.left = right + 'px';
			kil.style.left = right + 'px'
			
				if(shoter>0){
				right2+=0
				kil2.style.left = right2 + 'px'
			}else{
				right2=right
				kil2.style.left = right2 + 'px'
				
			}
			
			if(right<=-400){
			right=-390;
			rand = mas[0];
			}
		}
		}
		},80)
	
	


	
	
		var shotTime = setInterval(function(){
			if(stop == true){
				return false;
			}else{
			
		if(shoter<500){
			shoter +=10;
			kil2.style.bottom = shoter +'px';
			
			if(right2 == left || right2>left-50 && right2 < left+50){
				if(shoter==450){
					hepDang -=20;
					$('#two').hide();
					var opaciti1 = 0;
					var seter1 = setInterval(function(){
						if(opaciti1<1){
						opaciti1 +=0.2
						document.getElementById('my').style.opacity = opaciti1;
						document.getElementById('mu').style.opacity = opaciti1;
						document.getElementById('one').style.opacity = opaciti1;
						}else{
							opaciti1 = 0;
							
							setTimeout(function(){
							clearInterval(seter1);
				})
			}
					
						
		},100)
		var shoter2 = 0
		hp2.style.width = hepDang+'%';
		
		if(hepDang==0){
			alert('Вы проиграли!')
			nextLevel();
			document.getElementById('txtPlay').innerHTML = 'Вы проиграли!';
			
		}
				}
				$('#two').show();
			}
		}else{
			
			
			right2 = right;
			kil2.style.left = right2 +'px'
			shoter =0;
			kil2.style.bottom = shoter +'px';
			
			
			
			
					
				
		}
		}	
		},40)
		
	
	

	

//level one






