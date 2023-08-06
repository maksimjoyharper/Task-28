let form = document.getElementById("formDate");

form.addEventListener("submit", (element) => {
  element.preventDefault();

  let formData = new FormData(form);
  let year = formData.get("year");
  let month = formData.get("month");

  let a = Number(year);
  let b = Number(month);

  function calendar(element, year, month) {
    element = document.querySelector(element);

    let mon = month - 1;
    let d = new Date(year, mon);

    function sunday(date) {
      let day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

    let table = `
  <table>
  <tr>
  <th>Пн</th>
  <th>Вт</th>
  <th>Ср</th>
  <th>Чт</th>
  <th>Пт</th>
  <th>Сб</th>
  <th>Вс</th>
  </tr>
  <tr>
  `;

    for (let i = 0; i < sunday(d); i++) {
      table += "<td></td>";
    }

    while (d.getMonth() == mon) {
      table += "<td>" + d.getDate() + "</td>";
      if (sunday(d) % 7 == 6) {
        table += "</tr><tr>";
      }
      let a = d.getDate();
      d.setDate(a + 1);
    }

    if ((i = sunday(d) != 0)) {
      for (let i = sunday(d); i < 7; i++) {
        table += "<td></td>";
      }
    }

    table += "</tr></table>";

    element.innerHTML = table;
  }

  calendar("section", a, b);
});
