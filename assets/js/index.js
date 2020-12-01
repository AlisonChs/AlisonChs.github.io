
		var posicao = 0;
		var mensagem = "Sua mensagem aqui      <br>É incrível, não é?       <br>Chame a atenção do usuário      <br>Indique <a href='#'>links</a> para ele.                  ";  // Digite entre as aspas o que você quiser, inclusive tags HTML.
  
		function rola() {
		  document.getElementById("mensagem-inicio").innerHTML = mensagem.substring(posicao,mensagem,length);
		  posicao++;
		  if (posicao == mensagem.length) {
	posicao = 0;
		  }
		  setTimeout("rola()", 130); // O número mencionado pode ser alterado, pois ele indica a velocidade com que a mensagem irá surgir. Quanto maior, mais lento.
		}
  