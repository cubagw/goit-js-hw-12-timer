"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
   

    this.refs = {
      days: this.selector.querySelector('span[data-value="days"]'),
      hours: this.selector.querySelector('span[data-value="hours"]'),
      mins: this.selector.querySelector('span[data-value="mins"]'),
      secs: this.selector.querySelector('span[data-value="secs"]')
    };

    this.updateTimeOnce();
    this.updateTimeOnline();
  }

  updateTimeOnce() {
    const nowTime = Date.now();
    const time = this.targetDate.getTime() - nowTime;

    this.timeLeft(time);
  }

  updateTimeOnline() {
    const timer = setInterval(() => {
      const nowTime = Date.now();
      const time = this.targetDate.getTime() - nowTime;

      if (time < 1) {
        clearInterval(timer);
        console.log("STOP");
        return;
      }
      console.log("If see timer do not stop");

      this.timeLeft(time);
    }, 1000);
  }

  timeLeft(time) {
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = Math.floor(time / 86400000);
    // const days = Math.floor(time / (1000 * 60 * 60 * 24));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    // const hours = Math.floor(time % 24);
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    // const mins = Math.floor(time % 60);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    // const secs = Math.floor(time % 60);
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.markupUpdateOnline(days, hours, mins, secs);
  }

  markupUpdateOnline(days, hours, mins, secs) {
    // const daysString = this.pad(days);
    const hoursString = this.pad(hours);
    const minsString = this.pad(mins);
    const secsString = this.pad(secs);

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hoursString;
    this.refs.mins.textContent = minsString;
    this.refs.secs.textContent = secsString;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

//
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019")
  // targetDate: new Date(1561892460000)
});