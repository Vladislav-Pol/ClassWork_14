let firstDay = prompt("Введите день недели, с кторого начинается месяц\n (пн, вт, ср, чт, пт, сб, вс)"),
    dayInMonth = prompt("Введите количество дней в месяце\n(28, 29, 30, 31"),
    startFreeDays = 0,
    html;

switch(firstDay){
    case "вт":
        startFreeDays = 1;
        break;
    case "ср":
        startFreeDays = 2;
        break;
    case "чт":
        startFreeDays = 3;
        break;
    case "пт":
        startFreeDays = 4;
        break;
    case "сб":
        startFreeDays = 5;
        break;
    case "вс":
        startFreeDays = 6;
        break;
}
html = "<table><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td>";

let numbers = -startFreeDays;
for(let row, j; numbers <= dayInMonth;){
    j = 0;
    row = "<tr>"
    while (j < 7){
        numbers++;
        row += "<td>";
        row += numbers < 1 || numbers > dayInMonth ? "" : numbers;
        row += "</td>";
        j++;
    }
    row += "</tr>";
    html += row;
}

html +="</table>";

document.write(html);