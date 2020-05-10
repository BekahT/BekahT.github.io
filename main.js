$(document).ready(function () {
// Course Table
    $('#courseTable').DataTable({
        responsive: true,
        order: [2, 'desc'], //default sort on completed date, descending
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], //table length options, -1 shows all
        pageLength: 10, //set default display to 10 rows
        pagingType: "full_numbers", //'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
        //change search box title and pagination buttons words to signs
        language: {
            search: "Filter Courses:",
            paginate: { first: '«', previous: '‹', next: '›', last: '»' },
            aria: { paginate: { first: 'First', previous: 'Previous', next: 'Next', last: 'Last' } }
        },
    });
// End Course Table 

});

