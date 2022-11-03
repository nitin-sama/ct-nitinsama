// Accordian

$(document).ready(function () {
  var $titleTab = $('.title_tab');
  $('.Accordion_item:eq(0)').find('.title_tab').addClass('active').next().stop().slideDown(300);
  $('.Accordion_item:eq(0)').find('.inner_content').find('p').addClass('show');
  $titleTab.on('click', function(e) {
  e.preventDefault();
      if ( $(this).hasClass('active') ) {
          $(this).removeClass('active');
          $(this).next().stop().slideUp(500);
          $(this).next().find('p').removeClass('show');
      } else {
          $(this).addClass('active');
          $(this).next().stop().slideDown(500);
          $(this).parent().siblings().children('.title_tab').removeClass('active');
          $(this).parent().siblings().children('.inner_content').slideUp(500);
          $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
          $(this).next().find('p').addClass('show');
      }
  });
});