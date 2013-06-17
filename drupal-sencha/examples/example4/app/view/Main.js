Ext.define('Example.view.Main', {
  extend: 'Ext.tab.Panel',
  requires: 'Ext.TitleBar',
  config: {
    tabBarPosition: 'bottom',
    items: [
      {
        title: 'Home',
        iconCls: 'home',
        scrollable: true,
        layout: 'vbox',
        items: [
          {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Home'
          },
          {
            flex: 1,
            layout: 'hbox',
            items: [
              {
                flex: 1,
                items: [{
                  xtype: 'button',
                  iconCls: 'user',
                  text: 'Profile',
                  iconAlign: 'top',
                  ui: 'action',
                  padding: '25 0 0 0',
                  centered: true,
                  width: 100,
                  height: 100
                }]
              },
              {
                flex: 1,
                style: 'background-color: #ccc;',
                items: [{
                  xtype: 'button',
                  iconCls: 'team',
                  text: 'Users',
                  iconAlign: 'top',
                  ui: 'action',
                  padding: '25 0 0 0',
                  centered: true,
                  width: 100,
                  height: 100
                }]
              }
            ]
          },
          {
            flex: 1,
            layout: 'hbox',
            items: [
              {
                flex: 1,
                style: 'background-color: #ccc;',
                items: [{
                  xtype: 'button',
                  iconCls: 'favorites',
                  text: 'Favorites',
                  iconAlign: 'top',
                  ui: 'action',
                  padding: '25 0 0 0',
                  centered: true,
                  width: 100,
                  height: 100
                }]
              },
              {
                flex: 1,
                items: [{
                  xtype: 'button',
                  iconCls: 'settings',
                  text: 'Settings',
                  iconAlign: 'top',
                  ui: 'action',
                  padding: '25 0 0 0',
                  centered: true,
                  width: 100,
                  height: 100
                }]
              }
            ]
          }
        ]
      }
    ]
  }
});
