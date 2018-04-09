window.onload = function () {
	
	var result = 0;
	var a = 0;

	for(let i = 0; i <= 9; i++)
	document.getElementById("nr" + i).onclick = function () {
		document.getElementById("result").innerHTML += i;
		a = a*10 + i;
		alert(a);
	}
	
	document.getElementById("plus").onclick = function () {
		document.getElementById("history").innerHTML += 
			document.getElementById("result").innerHTML;
		document.getElementById("result").innerHTML = "+";
		result +=a;
		a = 0;
		alert(result);
	}
	
	document.getElementById("equal").onclick = function () {
		result +=a;
		alert(result);
	}
	
	document.getElementById("minus").onclick = function () {
		result -=a;
		a = 0;
		alert(result);
	}
	
	document.getElementById("divide").onclick = function () {
		result /=a;
		a = 0;
		alert(result);
	}
	
	document.getElementById("multiply").onclick = function () {
		result *=a;
		a = 0;
		alert(result);
	}
	
	
	
	
	
}

