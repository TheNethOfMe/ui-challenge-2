'use strict';

$(document).ready(() => {
  console.log('Ready!');
});

$('input[name="text-input-error"]').on('input', function(e) {
  if (e.target.value) {
    $(this).removeClass('invalid-form');
    $('.error-text').hide();
  } else {
    $(this).addClass('invalid-form');
    $('.error-text').show();
  }
});

$('.checkbox-sprite').on('click', function(e) {
  $(this).toggleClass('checkbox-sprite-selected');
});

$('.radio-sprite').on('click', function(e) {
  $('.radio-sprite').removeClass('radio-sprite-selected');
  $(this).addClass('radio-sprite-selected');
})