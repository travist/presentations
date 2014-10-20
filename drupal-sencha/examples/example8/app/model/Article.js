Ext.define('DrupalTouch.model.Article', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'nid',
      'uri',
      'title',
      'description',
      'thumbnail',
      'preview'
    ],
    proxy: {
      type: 'rest',
      url: 'api/node.json',
      onBefore: function() {

      },
      reader: {
        type: 'json'
      }
    }
  }
});