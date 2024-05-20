var imena = ["Marko", "Ana", "Borko"];
var poruka = "Dobrodosli: ";


if (imena.length > 0) {
	poruka += imena.join(", ");
} else {
	poruka = "Nema niza";
}


var i = 0;
while (i < imena.length) {
	console.log(imena[i]);
	i++;
}


function dodajBr(br1, br2) {
	return br1 + br2;
}
	function pomnozi(br1, br2) {
return br1 * br2;
}


document.addEventListener("click", function(dogadjaj) {
	console.log("Kliknuli ste na stranicu");
});
	document.addEventListener("scroll", function(dogadjaj) {
console.log("Skrolovali ste stranicu");
});


function prikazTeksta() {
	var inputText = document.getElementById("input1").value;
	document.getElementById("output").innerHTML = inputText;
}


var str1 = "Danas je ponedeljak";
console.log(str1.length);
console.log(str1.toUpperCase());


var brojevi = [5, 10, 15, 20];
console.log(brojevi.length);
console.log(brojevi.reduce(dodajBr));


var div = document.createElement("div");
div.innerHTML = "<p>Marko Marjanović IT93/21</p>";
document.body.appendChild(div);