Ext.define('Example.view.Users', {
  extend: 'Ext.List',
  xtype: 'userspage',
  requires: ['Example.store.Users'],
  config: {
    store: 'Users',
    styleHtmlContent: true,
    itemTpl: new Ext.XTemplate(
      '<strong>{name}</strong>',
      '<p>{mail}</p>'
    ),
    onItemDisclosure: true
  }
});