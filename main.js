let animation = anime({
    targets: '.segment',
    width: 20,
    duration: 300,
    easing: 'linear',
    delay: function(el, i, l) {
      return i * 500;
    },
    endDelay: 500,
    loop: true
  });            