let timer;
let i = 0;

const numeros = ["Erick Soto","Developer", "Designer","support technician", "Entrepreneur"];

function typeWriter(){
	let numero = numeros[i].split("");
	var loopTyping = function(){
		if ( numero.length > 0 ){	document.getElementById("text").innerHTML += numero.shift(); 
    	} else{
			deletingEffect();
			return false;
		}
		timer = setTimeout(loopTyping, 300);
	}
	loopTyping();
}

function deletingEffect(){
	let numero = numeros[i].split("");
	var loopDelete = function(){
		if ( numero.length > 0 ){
			numero.pop();
			document.getElementById("text").innerHTML = numero.join("");
		} else{
			if( numeros.length > ( i + 1 ) ){
				i++;
				typeWriter();
			} else{
				i = 0;			
				typeWriter();
			}
			return false;
		}
		
	timer = setTimeout(loopDelete, 100);
	}
	loopDelete();
}

typeWriter();