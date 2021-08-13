module.exports = function toReadable(number) {

    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen ', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        result = 'zero';
    }
    else if (number < 20) {
        result = `${arr[number]}`;
    }
    else if (number < 100) {
        result = `${arrDozens[Math.floor(number / 10)]} ${arr[number % 10]}`;
    }
    else if (number >= 100 && number % 100 < 20) {
        result = `${arr[Math.floor(number / 100)]} hundred ${arr[Math.floor(number % 100)]}`;
    }
    else if (number >= 100 && number % 100 >= 20) {
        result = `${arr[Math.floor(number / 100)]} hundred ${arrDozens[Math.floor(number % 100 / 10)]} ${arr[number % 10]}`;
    }
    else {
        result = `${arr[Math.floor(number / 100)]} hundred ${arr[number % 10]}`;
    };
    return result.trim();
};
