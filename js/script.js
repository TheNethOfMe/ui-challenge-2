'use strict';

$(document).ready(() => {
  console.log('Ready!');
});

$('input[name="text-input-error"]').on('input', function(e) {
  if (e.target.value) {
    $('input[name="text-input-error"]').removeClass('invalid-form');
    $('.error-text').hide();
  } else {
    $('input[name="text-input-error"]').addClass('invalid-form');
    $('.error-text').show();
  }
});