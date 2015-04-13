(function() {
  'use strict';

  $(function() {
    console.log('loaded');
    var $town = $('.Scene-town');
    var $mountains = $('.Scene-mountains');
    var $sun = $('.Scene-sun');
    var $cloudsWrapper = $('.Scene-cloudsWrapper, .Scene-stars');
    var $cloudsBack = $('.Scene-clouds--back');
    var $cloudsFront = $('.Scene-clouds--front');
    var $overlay = $('.SceneOverlay, .Nav-barMenu');

    $town.velocity({
      translateZ: 0,
      translateY: ['0%', '100%']
    }, {
      duration: 2000,
      easing: 'easeOut'
    });

    $mountains.velocity({
      translateZ: 0,
      translateY: ['0px', '100%']
    }, {
      duration: 2000,
      delay: 300,
      easing: 'easeOut'
    });

    $sun.velocity({
      translateZ: 0,
      translateY: ['0%', '120%']
    }, {
      duration: 2000,
      delay: 500,
      easing: 'easeOut'
    });

    $cloudsWrapper.velocity({
      translateZ: 0,
      opacity: [1, 0]
    }, {
      duration: 5 * 1000,
      easing: 'easeOut'
    });

    $cloudsBack.velocity({
      translateZ: 0,
      translateX: ['0%', '-90%']
    }, {
      duration: 700 * 1000,
      easing: 'linear',
      queue: false
    });
    $cloudsFront.velocity({
      translateZ: 0,
      translateX: ['0%', '-90%']
    }, {
      duration: 400 * 1000,
      easing: 'linear',
      queue: false
    });

    $overlay.velocity({
      translateZ: 0,
      opacity: 1
    }, {
      duration: 2000,
      delay: 2000,
      ease: 'easeInOut'
    })
  });
})();
