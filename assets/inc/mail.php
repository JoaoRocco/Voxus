<?php
// Incluimos o arquivo de conexão
// Recuperamos os valores dos campos através do método POST
$quebra_linha="\n";
$emailsender="contato@emailteste";
$emaildestinatario = "joao.a.rocco@gmail.com";

$nomeremetente     = $_POST['name'];
$foneremetente     = $_POST ['phone'];
$emailremetente    = $_POST['email'];
$mensagem          = $_POST['message'];
$assunto ='Contato via Formulário';

$mensagemHTML=" 
               <h4> Nome: $nomeremetente</h4> 
               <h4>Telefone: $foneremetente</h4>
               <h4>E-mail: $emailremetente</h4>
               <h4>Mensagem:</4>
               <h3><b><i>$mensagem</i></b></h3>
               <hr>";

/* Montando o cabeçalho da mensagem */
$headers = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=utf-8".$quebra_linha;
// Perceba que a linha acima contém "text/html", sem essa linha, a mensagem não chegará formatada.
$headers .= "From: ".$emailsender.$quebra_linha;
$headers .= "Return-Path: " . $emailsender . $quebra_linha;
$headers .= "Reply-To: ".$emailremetente.$quebra_linha;

// Se não houver nenhum erro
  $enviar= mail($emaildestinatario, $assunto, $mensagemHTML, $headers, "-r". $emailsender);
	// Se inserido com sucesso
	if ($enviar) {
		echo false;
	} 
	// Se houver algum erro ao inserir
	else {
		echo "<p>Entraremos em contato em 24hs úteis.</p>";
	}

?>