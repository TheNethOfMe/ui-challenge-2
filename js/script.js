'use strict';

$(document).ready(() => {
  addEventListeners();
});

const addEventListeners = () => {
  // add event listener on text input with error validation
  $('input[name="text-input-error"]').on('input', function(e) {
    if (e.target.value) {
      $(this).removeClass('invalid-form');
      $('.error-text').hide();
    } else {
      $(this).addClass('invalid-form');
      $('.error-text').show();
    }
  });

  // add event listeners on checkboxes
  $('.checkbox-sprite').on('click', function(e) {
    $(this).toggleClass('checkbox-sprite-selected');
  });

  // add event lisenters on radio buttons
  $('.radio-sprite').on('click', function(e) {
    $('.radio-sprite').removeClass('radio-sprite-selected');
    $(this).addClass('radio-sprite-selected');
  });
}
