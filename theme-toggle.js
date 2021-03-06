var day = true;

var scroll = function() {
  var scrollTop = window.pageYOffset;
  if (scrollTop > 100) {
    $('#toggle-color').fadeOut();
  } else {
    $('#toggle-color').fadeIn();
  }
}
window.onscroll = scroll;


$('#toggle-color').click(function() {
  if (day == true) {

    $(this).attr('src', 'images/moon.svg');

    document.body.style.setProperty('--main-bg-color', '#131517');
    document.body.style.setProperty('--main-text-color', '#eee');
    document.body.style.setProperty('--table-bg', '#07090a');
    document.body.style.setProperty('--ticker-color', '#ccc');
    document.body.style.setProperty('--link-color', '#eee');
    document.body.style.setProperty('--link-bg', '#222');
    document.body.style.setProperty('--link-border', '2px solid #444');
    document.body.style.setProperty('--light-grey', '#aaa');
    document.body.style.setProperty('--border', '1px solid #444');
    document.body.style.setProperty('--dark-border', '1px solid #333');

    $('.invert').css({
      'filter' : 'invert(100%)',
      '-webkit-filter' : 'invert(100%)',
      '-moz-filter' : 'invert(100%)',
      '-ms-filter' : 'invert(100%)',
      '-o-filter' : 'invert(100%)'
    });

    day = false;
  } else {

    $(this).attr('src', 'images/sun.png');

    document.body.style.setProperty('--main-bg-color', '#fff');
    document.body.style.setProperty('--main-text-color', '#222');
    document.body.style.setProperty('--table-bg', '#f6f6f6');
    document.body.style.setProperty('--ticker-color', '#444');
    document.body.style.setProperty('--link-color', '#444');
    document.body.style.setProperty('--link-bg', '#f5f6f7');
    document.body.style.setProperty('--link-border', '2px solid #ddd');
    document.body.style.setProperty('--light-grey', '#888');
    document.body.style.setProperty('--border', '1px solid #ddd');
    document.body.style.setProperty('--dark-border', '1px solid #ccc');

    $('.invert').css({
      'filter' : 'invert(0%)',
      '-webkit-filter' : 'invert(0%)',
      '-moz-filter' : 'invert(0%)',
      '-ms-filter' : 'invert(0%)',
      '-o-filter' : 'invert(0%)'
    });

    day = true;
  }
});
