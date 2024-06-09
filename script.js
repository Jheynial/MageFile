document.getElementById('toggleStyleSheetCheckbox').addEventListener('change', function() {
    var linkElement = document.getElementById('styleSheetLink');
    
    if (this.checked) {
        var currentPage = window.location.pathname.split('/').pop(); // Obter o nome do arquivo da página atual
        switch (currentPage) {
            case 'index.html':
                linkElement.href = 'stylesheetwhite.css'; // Altere para o nome do arquivo CSS correspondente à página 1
                break;
            case 'perfil.html':
                linkElement.href = 'perfilwhite.css'; // Altere para o nome do arquivo CSS correspondente à página 2
                break;
                case 'consultas.html':
                linkElement.href = 'consultaswhite.css'; // Altere para o nome do arquivo CSS correspondente à página 2
                break;
        }
    } else {
        var currentPage = window.location.pathname.split('/').pop(); // Obter o nome do arquivo da página atual
        switch (currentPage) {
            case 'index.html':
                linkElement.href = 'stylesheet.css'; // Altere para o nome do arquivo CSS padrão correspondente à página 1
                break;
            case 'perfil.html':
                linkElement.href = 'perfil.css'; // Altere para o nome do arquivo CSS padrão correspondente à página 2
                break;
                case 'consultas.html':
                linkElement.href = 'consultas.css'; // Altere para o nome do arquivo CSS padrão correspondente à página 2
                break;
         }
    }
});