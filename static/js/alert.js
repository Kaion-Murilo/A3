window.addEventListener('DOMContentLoaded', function() {
  var cinemasLink = document.getElementById('cinemas-link');
  var nenhumCinema = document.getElementById('nenhum-cinema');
  var counter = 0;
  var intervalId = null;
  var preventDefaultFlag = true; // Ativa o preventDefault() inicialmente

  if (cinemasLink && nenhumCinema) {
    cinemasLink.addEventListener('click', function(event) {
      nenhumCinema.classList.add('visible');
      nenhumCinema.textContent = 'Procurando cinemas próximos';
      counter = 0;

      intervalId = setInterval(function() {
        if (counter < 10) {
          nenhumCinema.textContent += '.';
          counter++;
        } else {
          clearInterval(intervalId);
          setTimeout(function() {
            preventDefaultFlag = false; // Desativa o preventDefault() após 5 segundos
            if (!preventDefaultFlag) {
              cinemasLink.click(); // Aciona o clique no link para prosseguir com o comportamento padrão
            }
          }, 500);
        }
      }, 100);
      
      if (preventDefaultFlag) {
        event.preventDefault(); // Impede o comportamento padrão do link
      }
    });

    nenhumCinema.addEventListener('transitionend', function() {
      preventDefaultFlag = false; // Desativa o preventDefault() após a transição de visibilidade
    });
  }
});
