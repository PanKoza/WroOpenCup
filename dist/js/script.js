$(document).ready(function () {
  // Galeria: automatyczne pokazywanie i ukrywanie zdjęć
  var $items = $('.gallery__item');
  var current = 0;
  $items.hide();
  if ($items.length > 0) {
    $items.eq(current).fadeIn(600);
    setInterval(function () {
      $items.eq(current).fadeOut(600, function () {
        current = (current + 1) % $items.length;
        $items.eq(current).fadeIn(600);
      });
    }, 3500);
  }

  // Hamburger menu na mobile
  $('#hamburgerBtn').on('click', function () {
    $('#headerNav').toggleClass('active');
  });

  // Cookie banner znika po kliknięciu
  $('#cookie-accept').on('click', function () {
    $('#cookie-banner').fadeOut();
  });

  // Blokada wysyłki bez akceptacji polityki prywatności
  $('#registrationForm').on('submit', function (e) {
    if (!$('#privacyPolicy').is(':checked')) {
      alert('Musisz zaakceptować Politykę Prywatności, aby wysłać formularz.');
      e.preventDefault();
    }
  });
});
