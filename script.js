const timetable = [
    
];

document.addEventListener('DOMContentLoaded', () => {
    const ttdiv = document.getElementById('timetable');
    let tabletag = '<table><tr><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th></tr>';
    for (let week of timetable) {
        tabletag += '<tr>';
        for (let day of week) {
            tabletag += `<th class='day'>${day.date}</th>`;
        }
        tabletag += '</tr>';
        tabletag += '<tr>';
        for (let i = 0; i < 4; i++) {
            tabletag += '<tr>';
            for (let day of week) {
                let contlen = day.contents.length;
                if (i < contlen) {
                    switch (contlen) {
                        case 1:
                            tabletag += `<td rowspan="4">${day.contents[i]}</td>`;
                            break;
                        case 4:
                            tabletag += `<td class=${i % 2 == 0 ? "name" : "class"}>${day.contents[i]}</td>`;
                            break;
                    }
                }
            }
            tabletag += '</tr>';
        }
        tabletag += '</tr>';
    }
    tabletag += '</table>';
    ttdiv.innerHTML = tabletag;
})