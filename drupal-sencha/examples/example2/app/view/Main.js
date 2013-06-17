Ext.define('Example.view.Main', {
  extend: 'Ext.Container',
  config: {
    layout: 'vbox',
    style: 'text-align: center;',
    items: [
      {
        flex: 1,
        style: 'background-color: #ccc;',
        html: '<h2>Top</h2>'
      },
      {
        flex: 1,
        style: 'background-color: #ddd;',
        html: '<h2>Bottom</h2>'
      }
    ]
  }
});
