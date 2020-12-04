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
	if(display == "none")
		document.getElementById(el).style.display = 'block';
	else
		document.getElementById(el).style.display = 'none';
}

var posicao = 0;
		var mensagem = "< O futuro é agora.     <br>Você precisa de inovação.       <br>Você precisa de controle.>      <br><a href='#'>Contribua</a> ou faça um orçamento. <br></>                 ";  // Digite entre as aspas o que você quiser, inclusive tags HTML.
  
		function efeito() {
		  document.getElementById("mensagem-inicio").innerHTML = mensagem.substring(posicao,mensagem,length);
		  posicao++;
		  if (posicao == mensagem.length) {
	posicao = 0;
		  }
		  setTimeout("efeito()", 130);
		}
  