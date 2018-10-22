function check(){
let numb =document.querySelector("#input").value;
let i;
for ( i =2; i < numb; i++) {
	if (numb % i === 0) {
		break;
	}
}
if (numb == i){
	alert("it is prime");
}
else {
	alert("not");
}
}