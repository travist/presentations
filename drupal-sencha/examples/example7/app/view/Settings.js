Ext.define('Example.view.Settings', {
  extend: 'Ext.Container',
  xtype: 'settingspage',
  config: {
    title: 'Settings',
    styleHtmlContent: true,
    html: "<h2>Settings!</h2>",
    items: [{
      xtype: 'button',
      iconCls: 'add',
      text: 'New Node',
      iconAlign: 'top',
      ui: 'action',
      padding: '25 0 0 0',
      centered: true,
      width: 100,
      height: 100,
      action: 'nodeform'
    }]
  }
});