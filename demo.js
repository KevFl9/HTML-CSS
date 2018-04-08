var styleSheet=document.getElementById("styleSheet");
styleSheet.href="stylesheets/Dark_theme.css"

function StopDefault(event){
	event.preventDefault()
}

function test(event){
	event.target.value == 'Blue' ? styleSheet.href="stylesheets/Dark_theme.css" : styleSheet.href="stylesheets/Light_theme.css";
}
