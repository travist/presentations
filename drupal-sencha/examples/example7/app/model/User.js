Ext.define('Example.model.User', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      { name: 'uid', type: 'int' },
      { name: 'name', type: 'string' },
      { name: 'sid', type: 'string' },
      { name: 'mail', type: 'string' },
      { name: 'access', type: 'date', dateFormat: 'U' },
      { name: 'created', type: 'date', dateFormat: 'U' },
      { name: 'picture', type: 'string' }
    ]
  }
});