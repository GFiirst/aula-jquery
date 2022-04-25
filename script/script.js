$.support.cors = true;
$('#pg1').click(
    function() {
        $('#paginas').load("lista.html")
    }
)

$('#pg2').click(
    function() {
        $('#paginas').load("cadastro.html")
    }
)