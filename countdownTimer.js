'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: this.selector.querySelector('span[data-value="days"]'),
      hours: this.selector.querySelector('span[data-value="hours"]'),
      mins: this.selector.querySelector('span[data-value="mins"]'),
      secs: this.selector.querySelector('span[data-value="secs"]'),
    };
    this.updateTimeOnce();
    this.updateTimeOnline();
  }

  updateTimeOnce() {
    const currentDate = Date.now();
    const deltaDate = this.targetDate - currentDate;
    this.updateClockface(deltaDate);
  }

  updateTimeOnline() {
    const timerId = setInterval(() => {
      const currentDate = Date.now();
      const deltaDate = this.targetDate - currentDate;

      if (this.targetDate.getTime() < currentDate) {
        clearInterval(timerId);
        return;
      }

      this.updateClockface(deltaDate);
    }, 1000);
  }

  updateClockface(time) {
    this.refs.days.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.refs.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.refs.secs.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 20, 23:42, 2019'),
});
