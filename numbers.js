_.extend(MeteorFormatting, {
  number: function(number, format) {

    var numberForFormatting = number;

    if (typeof number === 'string') {
      numberForFormatting = numeral().unformat(number);
    }

    return numeral(numberForFormatting).format(this.format || '0.00');
  },
  currencyNoSymbol: function(number) {

    var numberForFormatting = number;

    if (typeof number === 'string') {
      numberForFormatting = numeral().unformat(number);
    }

    return numeral(numberForFormatting).format('0.00');
  },
  currency: function(number, symbolAtEnd) {

    var numberForFormatting = number;

    if (typeof number === 'string') {
      numberForFormatting = numeral().unformat(number);
    }

    return numeral(numberForFormatting).format((!this.symbolAtEnd ? '$' : '') + '0.00' + (this.symbolAtEnd ? '$' : ''));
  },
  percentage: function(number) {
    var numberForFormatting = number;

    if (typeof number === 'string') {
      numberForFormatting = numeral().unformat(number);
    }

    // Numeral expect a number lesser than 1 (0.5 for 50%). 
    // If we receive a number greater than zero, divide it by 100
    var numberForFormatting = numberForFormatting > 1 ? numberForFormatting / 100 : numberForFormatting;

    return numeral(numberForFormatting).format('0%');
  }
});
