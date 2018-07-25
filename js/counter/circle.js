// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FFF', width: 3 },
  to: { color: '#ffe600', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle, attachment) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (Math.round(circle.value() * 100) + ' %');
    if (value === 15) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Oswald"';
bar.text.style.fontSize = '2.3rem';
bar.text.style.color = '#ffe600';

bar.animate(0.90); 


var bar = new ProgressBar.Circle(container_2, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FFF', width: 3 },
  to: { color: '#ffe600', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (Math.round(circle.value() * 100) + ' %');
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Oswald"';
bar.text.style.fontSize = '2.3rem';
bar.text.style.color = '#ffe600';

bar.animate(0.96); 
var bar = new ProgressBar.Circle(container_3, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FFF', width: 3 },
  to: { color: '#ffe600', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (Math.round(circle.value() * 100) + ' %');
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Oswald"';
bar.text.style.fontSize = '2.3rem';
bar.text.style.color = '#ffe600';

bar.animate(0.85); 


var bar = new ProgressBar.Circle(container_4, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FFF', width: 3 },
  to: { color: '#ffe600', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = (Math.round(circle.value() * 100) + ' %');
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Oswald"';
bar.text.style.fontSize = '2.3rem';
bar.text.style.color = '#ffe600';

bar.animate(0.94); 