function main() {
  $('.skill-category').hide();
  $('.skill-button').on('click', function() {
    $(this).next().slideToggle(400);
  });
}

$(document).ready(main);