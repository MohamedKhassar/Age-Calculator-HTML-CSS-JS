const day_result = document.querySelector("#day-result");
const month_result = document.querySelector("#month-result");
const year_result = document.querySelector("#year-result");

const setDate = () => {
  var day = parseInt(document.getElementById("day-input").value);
  var month = parseInt(document.getElementById("month-input").value) - 1; // Months are 0-based in JavaScript Date
  var year = parseInt(document.getElementById("year-input").value);

  var birthDateObj = new Date(year, month, day);
  var today = new Date();
  if (
    (birthDateObj.getFullYear() >= today.getFullYear() &&
      birthDateObj.getMonth() >= today.getMonth() &&
      birthDateObj.getDate() >= today.getDate()) ||
    birthDateObj.getFullYear() > today.getFullYear() ||
    year <= 0 ||
    month < 0 ||
    day <= 0
  ) {
    year_result.value = 0;
    month_result.value = 0;
    day_result.value = 0;
  } else {
    var age = today.getFullYear() - birthDateObj.getFullYear();
    var monthDiff = today.getMonth() - birthDateObj.getMonth();
    var dayDiff = today.getDate() - birthDateObj.getDate();
    if (monthDiff < 0) {
      if (age > 0) {
        age--;
      }
      monthDiff += 12;
      if (dayDiff < 0) {
        dayDiff += 31;
        monthDiff--;
      }
    } else {
      if (dayDiff > 0 || monthDiff > 1) {
        if (monthDiff > 1) {
          monthDiff--;
        }
        if (dayDiff < 0) {
          dayDiff += 31;
        }
      } else {
        if (dayDiff < 0) {
          dayDiff += 31;
        }
      }
    }

    year_result.value = age;
    month_result.value = monthDiff;
    day_result.value = dayDiff;
  }
};

window.addEventListener("load", () => setDate());
