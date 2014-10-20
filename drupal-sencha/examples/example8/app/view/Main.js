Ext.define('DrupalTouch.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainpage',
  config: {
    tabBarPosition: 'bottom',
    items: [
      {
        xtype: 'homepage'
      },
      {
        xtype: 'articlenav'
      }
    ]
  }
});
