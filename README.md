Плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
определенной даты. Такой плагин может использоваться в блогах и
интернет-магазинах, страницах регистрации событий, во время технического
обслуживания и т. д.

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы,
минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более
чем двух цифр.

<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>

Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с
настройками.

new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Jul 17, 2019'),
});
