Ext.define('Example.controller.Main', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainPage: 'mainpage'
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
      }
    }
  },

  onButton: function(event) {
    this.getMainPage().push({
      xtype: event.action + 'page'
    });
  }
});