module.exports = function toReadable (number) {
    const upToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    var rez = '';

    if(number < 20) {
        rez =  upToTwenty[number];
        return rez;
    }

    if(number > 999){
        rez = rez + upToTwenty[Math.trunc(number / 1000)] + ' thousand ';
    }

    if(number > 99 && Math.trunc((number % 1000) / 100) !== 0){
        rez = rez + upToTwenty[Math.trunc((number % 1000) / 100)] + ' hundred ';
    }

    if((number % 100) > 19 && Math.trunc((number % 100) / 10) !== 0){
        rez = rez + dozens[Math.trunc((number % 100) / 10) - 2] + ' ';
        if((number % 10)  !== 0) rez = rez + upToTwenty[number % 10] + ' ';
    }

    if(number % 100 < 20 && number % 100 !== 0){
        rez = rez + upToTwenty[number % 100] + ' ';
    } 

    rez = rez.substring(0, rez.length - 1)

    return rez;
}
