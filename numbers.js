_.extend(MeteorFormatting, {
  number: function(value, keywords) {

    var numberForFormatting = value;

    if (typeof value === 'string') {
      if (keywords.hash.isNumber) {
        numberForFormatting = parseFloat(value);
      } else {
        numberForFormatting = numeral().unformat(value);
      }
    }

    return numeral(numberForFormatting).format(keywords.hash.format || '0.00');
  },
  currencyNoSymbol: function(value, keywords) {

    var numberForFormatting = value;

    if (typeof value === 'string') {
      if (keywords.hash.isNumber) {
        numberForFormatting = parseFloat(value);
      } else {
        numberForFormatting = numeral().unformat(value);
      }
    }

    return numeral(numberForFormatting).format('0.00');
  },
  currency: function(value, keywords) {

    var numberForFormatting = value;

    if (typeof value === 'string') {
      if (keywords.hash.isNumber) {
        numberForFormatting = parseFloat(value);
      } else {
        numberForFormatting = numeral().unformat(value);
      }
    }

    return numeral(numberForFormatting).format((!keywords.hash.symbolAtEnd ? '$' : '') + '0.00' + (keywords.hash.symbolAtEnd ? '$' : ''));
  },

  percentage: function(value, keywords) {
    var numberForFormatting = value;

    if (typeof value === 'string') {
      if (keywords.hash.isNumber) {
        numberForFormatting = parseFloat(value);
      } else {
        numberForFormatting = numeral().unformat(value);
      }
    }

    // Numeral expect a number lesser than 1 (0.5 for 50%). 
    // If we receive a number greater than zero, divide it by 100
    var numberForFormatting = numberForFormatting > 1 ? numberForFormatting / 100 : numberForFormatting;

    return numeral(numberForFormatting).format('0%');
  }
});
