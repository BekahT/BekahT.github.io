$(document).ready(function() {

  
  $('.skill-category').hide();

  $('.skill-button').on('click', function() {
    $(this).next().slideToggle(400); });

  $('#skillTable').DataTable();


});
