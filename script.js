/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Data De Modificação:  25/04;
Autor:  M. Fernanda Pinheiro - mfpinheiro02@gmail.com;

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


function changePage1(){
	document.getElementById('Titulo').innerHTML = 'SIGAA';
	document.getElementById('item1').className = 'ItemNavigationBarActive';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
};

function changePage2(){
	document.getElementById('Titulo').innerHTML = 'SIPAC';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBarActive';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
};

function changePage3(){
	document.getElementById('Titulo').innerHTML = 'SIGRH';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBarActive';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
};

function changePage4(){
	document.getElementById('Titulo').innerHTML = 'SIGPP';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBarActive';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBar';
};

function changePage5(){
	document.getElementById('Titulo').innerHTML = 'SIGED';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBarActive';
	document.getElementById('item6').className = 'ItemNavigationBar';
};

function changePage6(){
	document.getElementById('Titulo').innerHTML = 'SIGAdmin';
	document.getElementById('item1').className = 'ItemNavigationBar';
	document.getElementById('item2').className = 'ItemNavigationBar';
	document.getElementById('item3').className = 'ItemNavigationBar';
	document.getElementById('item4').className = 'ItemNavigationBar';
	document.getElementById('item5').className = 'ItemNavigationBar';
	document.getElementById('item6').className = 'ItemNavigationBarActive';
};


function openPopUp() { //mostrar menu popup no display
	document.getElementById('menuPopUp').style.display = 'block'; //faz aparecer o menu pop/up
}

function closePopUp() {//ocultar menu popup no display
	document.getElementById('menuPopUp').style.display = 'none';
}

