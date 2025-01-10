/**
 * Confirmação de exclusão de um contato
 * @author Guilherme Barros 
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma excluir este contato?")
	if (resposta === true) { 
		window.location.href = "delete?idcon=" + idcon
	}

}
