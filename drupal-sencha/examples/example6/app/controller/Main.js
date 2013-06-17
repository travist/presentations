Ext.define('Example.controller.Main', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainPage: 'mainpage',
      usersPage: 'userspage'
    },
    control: {
      'button[action=user]': {
        tap: 'onButton'
      },
      'button[action=users]': {
        tap: 'onButton'
      },
      'button[action=favorites]': {
        tap: 'onButton'
      },
      'button[action=settings]': {
        tap: 'onButton'
      },
      'userspage': {
        itemtap: 'showUser'
      }
    }
  },

  onButton: function(event) {
    this.getMainPage().push({
      xtype: event.action + 'page'
    });
  },

  showUser: function(list, index, target, record) {
    this.getMainPage().push({
      xtype: 'userpage',
      title: record.get('name'),
      data: record.data
    });
  }
});