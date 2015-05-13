bandicoot.framework.serviceInjector.registerInjectedType({
  name: 'loki',
  construct: function(options) {
    var loki = require('lokijs');
    return new loki(options.service.service);
  }
});