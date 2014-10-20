Ext.define('Example.proxy.Drupal', {
  extend: 'Ext.data.proxy.JsonP',
  alias: 'proxy.drupal',
  getParams: function(operation) {
    return {
      page: operation.getPage() - 1,
      limit: operation.getLimit()
    };
  }
});