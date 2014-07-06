UI.registerHelper('timeSpent', MeteorFormatting.timeSpent);

UI.registerHelper('fromNow', MeteorFormatting.fromNow);

UI.registerHelper('formatDate', MeteorFormatting.formatDate);

UI.registerHelper('mediumDate', MeteorFormatting.mediumDate);

UI.registerHelper('month', MeteorFormatting.month);

UI.registerHelper('shortMonthAndYear', MeteorFormatting.shortMonthAndYear);

UI.registerHelper('number', function(value, keywords) {
  var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber  : false;
  var format = (keywords && keywords.hash) ? keywords.hash.format  : false;

  return MeteorFormatting.number(value, isNumber, format);
});

UI.registerHelper('currencyNoSymbol', function(value, keywords) {
  var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber  : false;

  return MeteorFormatting.currencyNoSymbol(isNumber);
});

UI.registerHelper('currency', function(value, keywords) {
  var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber  : false;
  var symbolAtEnd = (keywords && keywords.hash) ? keywords.hash.symbolAtEnd : false;

  return MeteorFormatting.currency(value, isNumber, symbolAtEnd)
});

UI.registerHelper('percentage', function(value, keywords) {
  var isNumber = (keywords && keywords.hash) ? keywords.hash.isNumber  : false;

  return MeteorFormatting.number(value, isNumber);
});
