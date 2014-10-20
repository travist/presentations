Ext.define('Example.view.Main', {
  extend: 'Ext.Container',
  config: {
    layout: 'vbox',
    items: [
      {
        flex: 1,
        layout: 'hbox',
        items: [
          {
            flex: 1,
            style: 'background-color: #aaa;'
          },
          {
            flex: 1,
            style: 'background-color: #bbb;'
          }
        ]
      },
      {
        flex: 1,
        layout: 'hbox',
        items: [
          {
            flex: 1,
            style: 'background-color: #ccc;'
          },
          {
            flex: 1,
            style: 'background-color: #ddd;'
          }
        ]
      }
    ]
  }
});
