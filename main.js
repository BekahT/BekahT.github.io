$(document).ready(function() {
  //Start Blog
  $('.blogMonth').on('click', function() {
    $(this).next().next().slideToggle(600); 
  });

  //End Blog
  
  //Start Skills Page
  // auto hide skills on load
  $('.skill-category').hide();

  // event handler for clicking a category
  $('.skill-button').on('click', function() {
    $(this).next().slideToggle(400); 
  });

  //show all skills button
  $('.show-hide').on('click', function() {
    $('.skill-category').slideToggle(400);
  });

  //show/hide button text change
  $('.show-hide').click(function() {
      var $this = $(this);

      $this.toggleClass('show');

      if ($this.hasClass('show')) {
          $this.text('Hide All Skills');
      } else {
          $this.text('Show All Skills');
      }
  });

  // skill table features
  $('#skillTable').DataTable( {
    responsive: true,
    order: [2, 'desc'], //default sort on completed date, descending
    lengthMenu: [ [5, 10, 25, 50, -1], [5, 10, 25, 50, "All"] ], //table length options, -1 shows all
    pageLength: 10, //set default display to 10 rows
    pagingType: "full_numbers", //'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
    //change search box title and pagination buttons words to signs
    language: {
        search: "Filter Courses:",
        paginate: {first: '«', previous: '‹', next: '›', last: '»'},
        aria: {paginate: {first: 'First', previous: 'Previous', next: 'Next', last: 'Last'}}
    },
  });
//End Skills Page

});
