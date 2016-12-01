const parseTime = function (input) {
    const time = isNaN(+input) ? input : (input * 1000);
    const date = new Date(time);
    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    const json = {
        unix: date.getTime() / 1000,
        natural: date.toLocaleDateString("en-US", dateOptions)
    };
    return JSON.stringify(json);
};
module.exports = parseTime;