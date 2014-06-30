Tinytest.add('MeteorFormatting - dates - duration', function (test) {
  test.equal(MeteorFormatting.duration(2), "2 hours", "output should be '2 hours'");
});

Tinytest.add('MeteorFormatting - dates - fromNow', function (test) {
  test.equal(MeteorFormatting.fromNow(moment().add('days', -1)), "a day ago", "output should be 'a day ago'");
});

Tinytest.add('MeteorFormatting - dates - formatDate', function (test) {
  test.equal(MeteorFormatting.formatDate("01/01/2014"), "01/01/2014", "output should be '01/01/2014'");
});

Tinytest.add('MeteorFormatting - dates - formatDate with specified format', function (test) {
  test.equal(MeteorFormatting.formatDate("01/01/2014", "YYYY-MM-DD"), "2014-01-01", "output should be '2014-01-01'");
});

Tinytest.add('MeteorFormatting - dates - mediumDate', function (test) {
  test.equal(MeteorFormatting.mediumDate("01/01/2014"), "January 1 2014", "output should be 'January 1 2014'");
});

Tinytest.add('MeteorFormatting - dates - month', function (test) {
  test.equal(MeteorFormatting.month("01/01/2014"), "January", "output should be 'January'");
});

Tinytest.add('MeteorFormatting - dates - shortMonthAndYear', function (test) {
  test.equal(MeteorFormatting.shortMonthAndYear("01/01/2014"), "Jan 2014", "output should be 'Jan 2014'");
});

Tinytest.add('MeteorFormatting - numbers - currency', function (test) {
  test.equal(MeteorFormatting.currency(100), "$100.00", "output should be '$100.00'");
});

Tinytest.add('MeteorFormatting - numbers - currency with symbol at end', function (test) {
  test.equal(MeteorFormatting.currency(100, true), "100.00$", "output should be '100.00$'");
});

Tinytest.add('MeteorFormatting - numbers - currency from string', function (test) {
  test.equal(MeteorFormatting.currency('100'), "$100.00", "output should be '$100.00'");
});

Tinytest.add('MeteorFormatting - numbers - currency from string with symbol at end', function (test) {
  test.equal(MeteorFormatting.currency('100', true), "100.00$", "output should be '100.00$'");
});

Tinytest.add('MeteorFormatting - numbers - currency from invalid number', function (test) {
  test.equal(MeteorFormatting.currency("blabla"), "$0.00", "output should be '$0.00'");
});

Tinytest.add('MeteorFormatting - numbers - currency from invalid number with symbol at end', function (test) {
  test.equal(MeteorFormatting.currency("blabla", true), "0.00$", "output should be '0.00$'");
});

Tinytest.add('MeteorFormatting - numbers - percentage', function (test) {
  test.equal(MeteorFormatting.percentage(50), "50%", "output should be '50%'");
});

Tinytest.add('MeteorFormatting - numbers - percentage from number lesser than 1', function (test) {
  test.equal(MeteorFormatting.percentage(0.5), "50%", "output should be '50%'");
});

Tinytest.add('MeteorFormatting - numbers - percentage from string', function (test) {
  test.equal(MeteorFormatting.percentage('50'), "50%", "output should be '50%'");
});

Tinytest.add('MeteorFormatting - numbers - percentage from string with number lesser than 1', function (test) {
  test.equal(MeteorFormatting.percentage('0.5'), "50%", "output should be '50%'");
});

Tinytest.add('MeteorFormatting - numbers - percentage from invalid number', function (test) {
  test.equal(MeteorFormatting.percentage("blabla"), "0%", "output should be '0%'");
});