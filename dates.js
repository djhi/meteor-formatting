_.extend(MeteorFormatting, {
  duration: function(duration, units) {
    if (typeof duration === 'undefined' || duration === null) {
      duration = 0;
    }

    if (typeof duration === 'number') {
      return moment.duration(duration, units || 'hours').humanize();
    }

    return '[Invalid Date]'
  },
  fromNow: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.fromNow();
    }

    return '[Invalid Date]'
  },
  formatDate: function(date, format) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format(format || 'DD/MM/YYYY');
    }

    return '[Invalid Date]'
  },
  mediumDate: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('LL');
    }

    return '[Invalid Date]'
  },
  month: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('MMMM');
    }

    return '[Invalid Date]'
  },
  shortMonthAndYear: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('MMM YYYY');
    }

    return '[Invalid Date]'
  }
});