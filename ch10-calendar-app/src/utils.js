function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

function daysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

function startOf(year, month) {
    return new Date(year, month - 1, 1, 12, 0, 0);
}

function getMonthName(month) {
    const format = new Intl
        .DateTimeFormat('en-US', {month: 'long'}).format;
    return format(new Date(2030, month - 1, 15, 12, 0, 0));
}

export {startOf, daysInMonth, getMonthName};