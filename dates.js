_.extend(MeteorFormatting, {
  duration: function(hours, units) {
    if (typeof hours === 'undefined' || hours === null) {
      hours = 0;
    }

    if (typeof hours === 'number') {
      return moment.duration(hours, units || 'hours').humanize();
    }

    return 'Durée invalide'
  },
  fromNow: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.fromNow();
    }

    return 'Date invalide'
  },
  formatDate: function(date, format) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format(format || 'DD/MM/YYYY');
    }

    return 'Date invalide'
  },
  mediumDate: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('LL');
    }

    return 'Date invalide'
  },
  month: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('MMMM');
    }

    return 'Date invalide'
  },
  shortMonthAndYear: function(date) {
    var momentDate = moment(date);

    if (momentDate.isValid()) {
      return momentDate.format('MMM YYYY');
    }

    return 'Date invalide'
  }
});