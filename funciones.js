// funciones para el boton resumen y boton borrar de la pagina "COMPRA_TICKET.HTML"
function resumen(){

		var cantidad = Number(document.getElementById('cantidad').value);
		var categoria = Number(document.getElementById('categoria').value);
		var descuento = cantidad * 200 * categoria /100
		var total_pagar = cantidad * 200 - descuento
		document.getElementById('total_pagar').value = 'Total a  Pagar: $ '+ total_pagar + ',00'		
	}
	
	
	function borrar(){

		document.getElementById('nombre').value = ''
		document.getElementById('apellido').value = ''
		document.getElementById('correo').value = ''		
		document.getElementById('cantidad').value = ''				
		document.getElementById('total_pagar').value = 'Total a  Pagar: $ '
	}			
	