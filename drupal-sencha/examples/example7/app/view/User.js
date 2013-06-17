Ext.define('Example.view.User', {
  extend: 'Ext.Container',
  xtype: 'userpage',
  config: {
    title: 'User',
    styleHtmlContent: true,
    tpl: new Ext.XTemplate('{name} - {mail}'),
  }
});