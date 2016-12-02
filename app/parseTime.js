const parseTime = function (input) {
    const time = isNaN(+input) ? input : (input * 1000);
    const date = new Date(time);
    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    
    const output = {
        unix: null,
        natural: null,
    };
    
    if (isNaN(date.getTime())) {
        return output;
    }
    
    output.unix = date.getTime() / 1000;
    output.natural = date.toLocaleDateString("en-US", dateOptions);

    return output;
};

module.exports = parseTime;