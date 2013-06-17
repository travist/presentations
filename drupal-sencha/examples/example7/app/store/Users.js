Ext.define('Example.store.Users', {
  extend: 'Ext.data.Store',
  requires: ['Example.proxy.Drupal'],
  config: {
    autoLoad: true,
    model: 'Example.model.User',
    proxy: {
      type: 'drupal',
      url: 'http://localhost:8888/api/user.jsonp',
      reader: {
        type: 'json'
      }
    }
  }
});