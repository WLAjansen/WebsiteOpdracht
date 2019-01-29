

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var shirtColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + shirtColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var shirtColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + shirtColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});