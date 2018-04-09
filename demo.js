var styleSheet=document.getElementById("styleSheet");

function StopDefault(event){
	event.preventDefault()
}

function test(event){
	event.target.value == 'Blue' ? styleSheet.href="stylesheets/Blue_theme.css" : styleSheet.href="stylesheets/Orange_theme.css";
}
