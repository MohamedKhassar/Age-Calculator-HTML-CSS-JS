const day_input = document.querySelector("#day-input");
const month_input = document.querySelector("#month-input");
const year_input = document.querySelector("#year-input");
const day_result = document.querySelector("#day-result");
const month_result = document.querySelector("#month-result");
const year_result = document.querySelector("#year-result");

const setDate = () => {
  const date_input = new Date(
    month_input.value + "-" + day_input.value + "-" + year_input.value
  );
  let day;
  let month;
  let year = new Date().getFullYear() - date_input.getFullYear();
  if (new Date().getMonth() < date_input.getMonth()) {
    month = 10 - Number(date_input.getMonth()) + Number(date_input.getMonth());
    year--;
  } else {
    month = Number(new Date().getMonth()) - Number(date_input.getMonth());
  }
  if (date_input.getDate() > new Date().getDate()) {
    day = 30 - Number(date_input.getDate()) + Number(new Date().getDate());
  } else {
    month--;
    day = Number(new Date().getDate()) - Number(date_input.getDate());
  }

  year_result.value = year;
  month_result.value = month;
  day_result.value = day;
};

window.addEventListener("load", () => setDate());
