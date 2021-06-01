function input(i){
			document.getElementById("input_field").value += i;
		}

function evaluation(){

	document.getElementById("result_field").value = eval(document.getElementById("input_field").value)
}

function remove(){
	document.getElementById("input_field").value = "";
	document.getElementById("result_field").value = "";
}

function cut(){
	var str = document.getElementById("input_field").value;
	document.getElementById("input_field").value = str.substring(0,str.length-1);
}

function themeSwitcher(){
	var str = document.getElementById("stylesheet");
	if(str.getAttribute('name') == "lightTheme"){
		str.setAttribute('name','darkTheme')
		str.href = "calculatorDarkCSS.css"
	}
	else{
		str.setAttribute('name',"lightTheme")
		str.href = "calculatorLightCSS.css";
	} 

}