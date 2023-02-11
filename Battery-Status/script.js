const chargingIcon = document.querySelector('.charge-icon');
const batteryLevel = document.querySelector('.battery-level');
const chargingBar = document.querySelector('.charge-bar');
const dischargingTime = document.querySelector('.discharging-time');
const otherInfo = document.querySelector('.additional-info');

navigator.getBattery().then((battery) => {
  const updateChargeInfo = () => {
    battery.charging
      ? ((chargingBar.style.animationIterationCount = 'infinite'),
        (chargingIcon.style.display = 'inline-flex'),
        (otherInfo.style.display = 'none'))
      : ((chargingIcon.style.display = 'none'),
        (otherInfo.style.display = 'inline-flex'),
        (chargingBar.style.animationIterationCount = 'initial'));
  };

  const updateLevelInfo = () => {
    batteryLevel.textContent = `${parseInt(battery.level * 100)}%`;
    chargingBar.style.width = `${parseInt(battery.level * 100)}%`;
  };

  const updateDischargeInfo = () => {
    const dischargeTime = parseInt(battery.dischargingTime / 60) ? true : false;

    dischargeTime
      ? ((dischargingTime.textContent = `${parseInt(
          battery.dischargingTime / 60
        )} minutes`),
        (otherInfo.style.display = 'flex'))
      : (otherInfo.style.display = 'none');
  };

  const updateBatteryInfo = () => {
    updateChargeInfo();
    updateLevelInfo();
    updateDischargeInfo();
  };
  updateBatteryInfo();

  // <-- Event Listeners -->
  battery.addEventListener('chargingchange', function () {
    updateBatteryInfo();
  });

  battery.addEventListener('levelchange', function () {
    updateBatteryInfo();
  });

  battery.addEventListener('dischargingtimechange', function () {
    updateBatteryInfo();
  });
});
