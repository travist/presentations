Ext.define('Example.controller.Main', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.device.Notification'],
  config: {
    refs: {
      mainPage: 'mainpage',
      usersPage: 'userspage',
      nodeForm: 'nodeformpage'
    },
    control: {
      'button[action=nodeform]': {
        tap: 'onButton'
      },
      'button[action=nodeSave]': {
        tap: 'onNodeSave'
      },
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
  },

  onNodeSave: function() {
    var self = this;

    // Get the node values.
    var values = this.getNodeForm().getValues();

    // Set the POST params.
    var params = {
      'node[type]': 'article',
      'node[title]': values.title,
      'node[body][und][0][value]': values.description
    };

    // Get the request token.
   Ext.Ajax.request({
      url: 'http://localhost:8888/services/session/token',
      method: 'GET',
      withCredentials: true,
      success: function(response) {
        var token = response.responseText;
        Ext.Ajax.request({
          method: 'POST',
          url: '/api/node.json',
          withCredentials: true,
          headers: {'X-CSRF-Token': token},
          params: params,
          success: function(response) {
            response = Ext.JSON.decode(response.responseText);
            Ext.Msg.alert(response.title, 'Node created!', Ext.emptyFn);
            self.getMainPage().pop();
          }
        });
      }
    });
  }
});