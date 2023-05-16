const timetable = [
    [{ "date": "5월 15일", "contents": ["부산대학교<br>개교기념일"] },
    { "date": "5월 16일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 17일", "contents": ["이상현", "Servlet JSP", "홍봉희", "자료구조"] },
    { "date": "5월 18일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 19일", "contents": ["이상현", "Servlet JSP", "홍봉희", "자료구조"] }],
    [{ "date": "5월 22일", "contents": ["홍봉희", "자료구조", "이상현", "Servlet JSP"] },
    { "date": "5월 23일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 24일", "contents": ["홍봉희", "자료구조", "이상현", "Servlet JSP"] },
    { "date": "5월 25일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 26일", "contents": ["김경민", "React", "홍봉희", "자료구조"] }],
    [{ "date": "5월 29일", "contents": ["석가탄신일<br>대체공휴일"] },
    { "date": "5월 30일", "contents": ["김경민", "React", "이상현", "Servlet JSP"] },
    { "date": "5월 31일", "contents": ["홍봉희", "자료구조", "이상현", "Servlet JSP"] },
    { "date": "6월 1일", "contents": ["이상현", "Servlet JSP", "이태훈", "Python"] },
    { "date": "6월 2일", "contents": ["이상현", "Servlet JSP", "이태훈", "Python"] }],
    [{ "date": "6월 5일", "contents": ["홍봉희", "자료구조", "이태훈", "Python"] },
    { "date": "6월 6일", "contents": ["현충일"] },
    { "date": "6월 7일", "contents": ["홍봉희", "자료구조", "이상현", "Spring Boot"] },
    { "date": "6월 8일", "contents": ["이상현 ~2", "Spring Boot", "3~ 이태훈", "Python"] },
    { "date": "6월 9일", "contents": ["이상현", "Spring Boot", "이태훈", "Python"] }],
    [{ "date": "6월 12일", "contents": ["이상현", "Spring Boot", "이태훈", "Python"] },
    { "date": "6월 13일", "contents": ["이상현", "Spring Boot", "한상곤", "빅데이터 R"] },
    { "date": "6월 14일", "contents": ["홍봉희", "빅데이터 R", "이상현", "Spring Boot"] },
    { "date": "6월 15일", "contents": ["이상현", "Spring Boot", "한상곤", "빅데이터 R"] },
    { "date": "6월 16일", "contents": ["이상현", "Spring Boot", "홍봉희", "빅데이터 R"] }],
    [{ "date": "6월 19일", "contents": ["이상현", "Spring Boot", "이태훈", "Python"] },
    { "date": "6월 20일", "contents": ["이상현", "Spring Boot", "한상곤", "빅데이터 R"] },
    { "date": "6월 21일", "contents": ["홍봉희", "빅데이터 R", "이상현", "Spring Boot"] },
    { "date": "6월 22일", "contents": ["이상현", "Spring Boot", "한상곤", "빅데이터 R"] },
    { "date": "6월 23일", "contents": ["이상현", "Spring Boot", "이상현", "Spring Boot"] }],
    [{ "date": "6월 26일", "contents": ["이상현", "Spring Boot", "홍봉희", "빅데이터 R"] },
    { "date": "6월 27일", "contents": ["박진선", "AI 프로그래밍", "감진규", "AI 프로그래밍"] },
    { "date": "6월 28일", "contents": ["홍봉희", "빅데이터 R", "이상현", "Spring Boot"] },
    { "date": "6월 29일", "contents": ["박진선", "AI 프로그래밍", "감진규", "AI 프로그래밍"] },
    { "date": "6월 30일", "contents": ["한상곤", "빅데이터 R", "홍봉희", "빅데이터 R"] }],
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