$(document).ready(function(){

  var $mainNav = $('#mainNavigation');
  var isMenuVisible = false;
  $('.burgerMenu').click(function () {
    if(isMenuVisible){
      $mainNav.hide(300);
      isMenuVisible = false;
    } else {
      $mainNav.show(300);
      isMenuVisible = true;
    }
  });

  var $projects = $('.projects');
  $projects.isotope({
      itemSelector: '.projects_item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid_sizer',
      }
  });
  $('.projectsFilterItem').click(function(){
    var type = $(this).data('type');
      $('.projectsFilterItem').removeClass('selected');
      $(this).addClass('selected');
      if(type !== '*'){
        type = '.' + type;
      }
    $projects.isotope({
        filter: type
    })
  });


});

