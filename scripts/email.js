$(document).ready(function(){

	$('#submit').click(function(){
		if($("#ups").val().length<1){
			$.post("/php/send.php", $("#mycontactform").serialize(),  function(response) {
				$('#success').html(response);
				$('#success').hide('slow');
			});
		}
		return false;

	});

});