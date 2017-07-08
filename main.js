$(document).ready(function() {
  // auto hide skills on load
  $('.skill-category').hide();

  // event handler for clicking a category
  $('.skill-button').on('click', function() {
    $(this).next().slideToggle(400); 
  });

    // skill table features
  $('#skillTable').DataTable( {
    responsive: true
  });
});
