const hoursHand = document.querySelector('.hand-hours');
const minutesHand = document.querySelector('.hand-minutes');
const secondsHand = document.querySelector('.hand-seconds');

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegress = hours / 12 * 360 + 90;
  const minutesDegress = minutes / 60 * 360 + 90;
  const secondsDegress = seconds / 60 * 360 + 90;

  hoursHand.style.transform = `rotate(${hoursDegress}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegress}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegress}deg)`;

  const hoursContent = window
    .getComputedStyle(hoursHand, '::before')
    .getPropertyValue('conetnt');
  document.styleSheets[0].addRule(
    '.hand-hours::before',
    'content: "' + hours + ' H' + '"'
  );

  const minutesContent = window
    .getComputedStyle(minutesHand, '::before')
    .getPropertyValue('content');
  document.styleSheets[0].addRule(
    '.hand-minutes::before',
    'content: "' + minutes + ' M' + '"'
  );

  const secondsContent = window
    .getComputedStyle(secondsHand, '::before')
    .getPropertyValue('content');
  document.styleSheets[0].addRule(
    '.hand-seconds::before',
    'content: "' + seconds + ' Sec' + '"'
  );
}

setInterval(getTime, 1000);
