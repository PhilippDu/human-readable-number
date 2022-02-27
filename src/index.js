module.exports = function toReadable (number) {
    const upToTwenty = ['zero', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ',
    'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ',
    'seventeen ', 'eighteen ', 'nineteen '];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    rez = '';

    if(number < 20) {
        rez =  upToTwenty[number];
        return rez;
    }

}
