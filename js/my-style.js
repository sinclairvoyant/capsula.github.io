 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

 // Toggle tranparent navbar when the user scrolls the page

 $(window).scroll(function () {
     if ($(this).scrollTop() > 50) /*height in pixels when the navbar becomes non opaque*/ {
         $('.opaque-navbar').addClass('opaque');
     } else {
         $('.opaque-navbar').removeClass('opaque');
     }
 });

// // Lightbox Gallery
//
// $('.thumbnail').click(function () {
//     $('.modal-body').empty();
//     var title = $(this).parent('a').attr("title");
//     $('.modal-title').html(title);
//     $($(this).parents('div').html()).appendTo('.modal-body');
//     $('#myModal').modal({
//         show: true
//     });
// });
