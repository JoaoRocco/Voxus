// ESCONDER LABEL ANTES DO FOCUS
$(function() {
  $(".form-control").focus(function() {
    $(this).prev("label").show(); //hide label of clicked item 
  }).blur(function() {
    $(this).prev("label").hide();
  });

});

// FIM ESCONDER LABEL ANTES DO FOCUS


// MENSAGENS DE ERRO 

function replaceValidationUI( form ) {
    // Suppress the default bubbles
    form.addEventListener( "invalid", function( event ) {
        event.preventDefault();
    }, true );

    // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
    // form submissions by default
    form.addEventListener( "submit", function( event ) {
        if ( !this.checkValidity() ) {
            event.preventDefault();
        }
    });

    var submitButton = form.querySelector( "button:not([type=button]), input[type=submit]" );
    submitButton.addEventListener( "click", function( event ) {
        var invalidFields = form.querySelectorAll( ":invalid" ),
            errorMessages = form.querySelectorAll( ".error-message" ),
            parent;

        // Remove any existing messages
        for ( var i = 0; i < errorMessages.length; i++ ) {
            errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
        }

        for ( var i = 0; i < invalidFields.length; i++ ) {
            parent = invalidFields[ i ].parentNode;
            parent.insertAdjacentHTML( "beforeend", "<div class='error-message'>" + 
                invalidFields[ i ].validationMessage +
                "</div>" );
        }

        // If there are errors, give focus to the first invalid field
        if ( invalidFields.length > 0 ) {
            invalidFields[ 0 ].focus();
        }
    });
}

// Replace the validation UI for all forms
var forms = document.querySelectorAll( "form" );
for ( var i = 0; i < forms.length; i++ ) {
    replaceValidationUI( forms[ i ] );
}





$(function($) {
	// Quando o formulário for enviado, essa função é chamada
	$("#formulario").submit(function() {
		// Colocamos os valores de cada campo em uma váriavel para facilitar a manipulação
		var name = $("#name").val();
        var phone = $("#phone").val();
		var email = $("#email").val();
		var message = $("#message").val();
		// Exibe mensagem de carregamento
		$("#status").html("<img class='load-gif' src='assets/inc/loader.gif' alt='Enviando' />");
		// Fazemos a requisão ajax com o arquivo envia.php e enviamos os valores de cada campo através do método POST
		$.post('assets/inc/mail.php', {name: name, phone:phone, email: email, message: message }, function(resposta) {
				// Quando terminada a requisição
				// Exibe a div status
				$("#status").slideDown();
				// Se a resposta é um erro
				if (resposta != false) {
					// Exibe o erro na div
					$("#status").html(resposta);
				} 
				// Se resposta for false, ou seja, não ocorreu nenhum erro
				else {
					// Exibe mensagem de sucesso
					$("#status").html("Mensagem enviada com sucesso!");
					// Coloca a mensagem no div de mensagens
					$("#mensage").prepend("<strong>"+ nome +"</strong> disse: <em>" + mensagem + "</em><br />");
					// Limpando todos os campos
					$("#name").val("");
                    $("#phone").val("");
					$("#email").val("");
					$("#message").val("");
				}
		});
	});
});

