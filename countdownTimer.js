'use strict';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);

    const days = this.selector.querySelector('span[data-value="days"]');
    const hours = this.selector.querySelector('span[data-value="hours"]');
    const mins = this.selector.querySelector('span[data-value="mins"]');
    const secs = this.selector.querySelector('span[data-value="secs"]');

    setInterval(() => {
      const currentDate = Date.now();
      const deltaDate = targetDate - currentDate;
      updateClockface(deltaDate);
    }, 1000);

    function updateClockface(time) {
      days.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      hours.textContent = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      mins.textContent = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      secs.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
    }

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 15, 2019'),
});
