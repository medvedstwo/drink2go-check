const slider = document.getElementById('slider');
const rangeInputMin = document.getElementById('range-input-min');
const rangeInputMax = document.getElementById('range-input-max');

const initRangeBar = () => {
  noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    cssPrefix: 'range__element-'
  });
  slider.noUiSlider.on('update', (values, handle) => {
    const value = values[handle];
    if (handle) {
      rangeInputMax.value = Math.round(value);
    } else {
      rangeInputMin.value = Math.round(value);
    }
  });
};

rangeInputMin.addEventListener('change', function () {
  slider.noUiSlider.set([this.value, null]);
});

rangeInputMax.addEventListener('change', function () {
  slider.noUiSlider.set([null, this.value]);
});

export {initRangeBar};


