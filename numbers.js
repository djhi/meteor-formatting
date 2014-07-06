_.extend(MeteorFormatting, {
  number: function(value, keywords) {
    var numberForFormatting = 0;
    var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber : false;
    var format = (keywords && keywords.hash) ? keywords.hash.format : false;

    if (typeof value === 'number' || (typeof value === 'string' && value.length > 0)) {
      numberForFormatting = value;

      if (typeof value === 'string') {
        if (isNumber) {
          numberForFormatting = parseFloat(value);
        } else {
          numberForFormatting = numeral().unformat(value);
        }
      }
    }

    return numeral(numberForFormatting).format(format || '0.00');
  },
  currencyNoSymbol: function(value, keywords) {
    var numberForFormatting = 0;
    var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber : false;

    if (typeof value === 'number' || (typeof value === 'string' && value.length > 0)) {
      var numberForFormatting = value;

      if (typeof value === 'string') {
        if (isNumber) {
          numberForFormatting = parseFloat(value);
        } else {
          numberForFormatting = numeral().unformat(value);
        }
      }
    }

    return numeral(numberForFormatting).format('0.00');
  },
  currency: function(value, keywords) {
    var numberForFormatting = 0;
    var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber : false;
    var symbolAtEnd = (keywords && keywords.hash) ? keywords.hash.symbolAtEnd : false;

    if (typeof value === 'number' || (typeof value === 'string' && value.length > 0)) {
      var numberForFormatting = value;

      if (typeof value === 'string') {
        if (isNumber) {
          numberForFormatting = parseFloat(value);
        } else {
          numberForFormatting = numeral().unformat(value);
        }
      }
    }

    return numeral(numberForFormatting).format((!symbolAtEnd ? '$' : '') + '0.00' + (symbolAtEnd ? '$' : ''));
  },

  percentage: function(value, keywords) {
    var numberForFormatting = 0;
    var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber : false;

    if (typeof value === 'number' || (typeof value === 'string' && value.length > 0)) {
      var numberForFormatting = value;

      if (typeof value === 'string') {
        if (isNumber) {
          numberForFormatting = parseFloat(value);
        } else {
          numberForFormatting = numeral().unformat(value);
        }
      }
    }

    // Numeral expect a number lesser than 1 (0.5 for 50%). 
    // If we receive a number greater than zero, divide it by 100
    var numberForFormatting = numberForFormatting > 1 ? numberForFormatting / 100 : numberForFormatting;

    return numeral(numberForFormatting).format('0%');
  }
});
