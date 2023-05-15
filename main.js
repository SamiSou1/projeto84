// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escreva um código para obter o evento key-pressed

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//Escreva um código para verificar o tipo de tecla pressionada
{
		aplhabetkey();
		document.getElementById("d1").innerHTML="você pressionou a tecla alfabeto";
		console.log("aplhabetkey");

		if((keyPressed >=48 && keyPressed<=57))
		//Escreva um código para verificar o tipo de tecla pressionada
{
		aplhabetkey();
		document.getElementById("d1").innerHTML="você pressionou a tecla numérica";
		console.log("numberkey");
	}

	if((keyPressed >=37 && keyPressed<=40))
		//Escreva um código para verificar o tipo de tecla pressionada
{
		aplhabetkey();
		document.getElementById("d1").innerHTML="você pressionou a tecla direcional";
		console.log("direcionalkey");
	}

	if((keyPressed >=17 && keyPressed<=18)|| (keyPressed >=27))
		//Escreva um código para verificar o tipo de tecla pressionada
{
		aplhabetkey();
		document.getElementById("d1").innerHTML="você pressionou a tecla especial";
		console.log("especialkey");
	}
	}
}

function aplhabetkey()
{
	img_image="alfabeto.png";
	add();
	//envie as imagens com suas respectivas mensagens. 
}
function numberkey()
{
	img_image="direcional.png";
	add();
}

function arrowkey()
{
	img_image="especial.png";
	add();
}
function specialkey()
{
	img_image="número.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
