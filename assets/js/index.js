function mudarBotaoObg() {
	document.getElementById('botaoS').setAttribute('class', 'botao-sucesso');
	document.getElementById('botaoS').innerHTML = "Obrigado!"

	document.getElementById('botaoSG').setAttribute('class', 'botaoS-sucesso');
	document.getElementById('botaoSG').innerHTML = "Obrigado!"
}

function mudarModal() {
	document.getElementById('modal-donate-js').setAttribute('class', 'modal-dialog modal-dialog-centered modal-dialog-scrollable')
}

function mudarBotaoDonate() {

	// document.getElementById('botaoS').setAttribute('class', 'botao-sucesso');
	document.getElementById('botaoD').innerHTML = "Escolha uma opção"
}

function esc(el) {

	var display = document.getElementById(el).style.display;

	if (display == "none")
		document.getElementById(el).style.display = 'block';
	else
		document.getElementById(el).style.display = 'none';

}

function mostrarMenuPC () {

	document.getElementById('navPC').style.width = "100%";

	document.getElementById('fecharLogo').style.display = "none";
	
	document.getElementById('item-menu1').style.visibility = "visible";
	document.getElementById('item-menu1').style.animation = "fadeIn 3s ease-in-out";

	document.getElementById('item-menu2').style.visibility = "visible";
	document.getElementById('item-menu2').style.animation = "fadeIn 3s ease-in-out";

	document.getElementById('item-menu3').style.visibility = "visible";
	document.getElementById('item-menu3').style.animation = "fadeIn 3s ease-in-out";

	document.getElementById('item-menu4').style.visibility = "visible";
	document.getElementById('item-menu4').style.animation = "fadeIn 3s ease-in-out";

}

function alterarMenuMob () {
	var display = document.getElementById('logo').style.display;

	if (display == "none") {
		document.getElementById('logo').style.display = 'block';
		document.getElementById('home').style.display = 'none';
		document.getElementById('contato').style.display = 'none';
		document.getElementById('sobre').style.display = 'none';
		document.getElementById('donate').style.display = 'none';

		document.getElementById('hrNav-home').style.display = 'none';
		document.getElementById('hrNav-contato').style.display = 'none';
		document.getElementById('hrNav-sobre').style.display = 'none';
		document.getElementById('hrNav-donate').style.display = 'none';
		document.getElementById('navMob').style.backgroundColor = '#1C1C1C';
		document.getElementById('fecharLogo').style.display = 'none';
	}

	else {
		document.getElementById('logo').style.display = 'none';
		document.getElementById('home').style.display = 'block';
		document.getElementById('contato').style.display = 'block';
		document.getElementById('sobre').style.display = 'block';
		document.getElementById('donate').style.display = 'block';

		document.getElementById('hrNav-home').style.display = 'block';
		document.getElementById('hrNav-contato').style.display = 'block';
		document.getElementById('hrNav-sobre').style.display = 'block';
		document.getElementById('hrNav-donate').style.display = 'block';
		document.getElementById('navMob').style.backgroundColor = '#0d0d0d';
		document.getElementById('fecharLogo').style.display = 'block';
	}

}
  
function efeito() {
	var posicao = 0;
	var mensagem = "< O futuro é agora.     <br>Você precisa de inovação.       <br>Você precisa de controle.>      <br><a href='#'>Contribua</a> ou faça um orçamento. <br></>                 ";  // Digite entre as aspas o que você quiser, inclusive tags HTML.

	document.getElementById("mensagem-inicio").innerHTML = mensagem.substring(posicao,mensagem,length);
	posicao++;
	if (posicao == mensagem.length) {
		posicao = 0;
	}
	
	setTimeout("efeito()", 130);
}

// gambiarras

function mostrarPopOverMenu () {
	$('#navPC').popover('show')
}

function fecharPopOverMenu(){
	$('#navPC').popover('disable');
	$('#navPC').popover('dispose');
	$('#navPC').popover('hide');
}

// /gambiarras

$('[data-toggle="popover"][data-timeout]').on('shown.bs.popover', function() {
    this_popover = $(this);
    setTimeout(function () {
        this_popover.popover('hide');
    }, $(this).data("timeout"));
});
