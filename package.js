Package.describe({
  summary: "Provides helpers for quick formatting of dates and numbers. Integration of moment (with languages) and numeral (with languages too)."
});

Package.on_use(function (api, where) {
  api.use(['moment-with-langs', 'numeral']);
  api.imply(['moment-with-langs', 'numeral'], ['client', 'server']);
  
  api.add_files(['base.js', 'dates.js', 'numbers.js'], ['client', 'server']);
  api.add_files(['helpers.js'], ['client']);

  api.export('MeteorFormatting', ['client', 'server']);

});

Package.on_test(function (api) {
  api.use(['moment-with-langs', 'numeral', 'meteor-formatting', 'tinytest', 'test-helpers']);

  api.add_files('meteor-formatting_tests.js', ['client', 'server']);
});
