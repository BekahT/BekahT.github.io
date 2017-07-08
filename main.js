$(document).ready(function() {
  // auto hide category on load
  $('.skill-category').hide();

  // event handler for clicking a skill
  $('.skill-button').on('click', function() {
    $(this).next().slideToggle(400); 
  });

    // skill table creation
  $('#skillTable').DataTable( {
    responsive: true
  });
});
