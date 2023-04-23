const timetable = [
    [{ "date": "4월 24일", "contents": ["홍봉희", "자료구조", "이상현", "DB SQL"] },
    { "date": "4월 25일", "contents": ["김경민", "React", "이상현", "DB SQL"] },
    { "date": "4월 26일", "contents": ["홍봉희", "자료구조", "이상현", "DB SQL"] },
    { "date": "4월 27일", "contents": ["김경민", "React", "이상현", "DB SQL"] },
    { "date": "4월 28일", "contents": ["이상현", "DB SQL", "김경민", "React"] }],
    [{ "date": "5월 1일", "contents": ["근로자의 날"] },
    { "date": "5월 2일", "contents": ["김경민", "React", "이상현", "DB SQL"] },
    { "date": "5월 3일", "contents": ["홍봉희", "자료구조", "이상현", "DB SQL"] },
    { "date": "5월 4일", "contents": ["김경민", "React", "이상현", "DB SQL"] },
    { "date": "5월 5일", "contents": ["어린이날"] }],
    [{ "date": "5월 8일", "contents": ["홍봉희", "자료구조", "이상현", "DB SQL"] },
    { "date": "5월 9일", "contents": ["김경민", "React", "이상현", "DB SQL"] },
    { "date": "5월 10일", "contents": ["홍봉희", "자료구조", "이상현", "Servlet JSP"] },
    { "date": "5월 11일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 12일", "contents": ["홍봉희", "자료구조", "이상현", "Servlet JSP"] }],
    [{ "date": "5월 15일", "contents": ["부산대학교<br>개교기념일"] },
    { "date": "5월 16일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 17일", "contents": ["이상현", "Servlet JSP", "홍봉희", "자료구조"] },
    { "date": "5월 18일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 19일", "contents": ["이상현", "Servlet JSP", "홍봉희", "자료구조"] }],
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