Ext.define('DrupalTouch.controller.Article', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      articleNav: 'articlenav',
      newArticleButton: 'button[action=newarticle]',
      articleForm: 'articleform',
      articleList: 'articlelist',
      drupalFile: 'drupalfile',
      loadedImage: '#loadedImage'
    },
    control: {
      'articlelist': {
        show: 'onArticleList',
        itemtap: 'showDetail'
      },
      'button[action=newarticle]': {
        tap: 'newArticle'
      },
      'button[action=articleSave]': {
        tap: 'onArticleSave'
      }
    }
  },

  init: function() {

    // Trigger when a user has been set.
    var self = this;
    this.getApplication().on('setUser', function(user) {
      if (user.isLoggedIn()) {
        self.addNewArticleButton();
      }
      else {
        self.removeNewArticleButton();
      }
    });
  },

  /**
   * Adds the 'New Article' button.
   */
  addNewArticleButton: function() {
    this.getArticleNav().getNavigationBar().add(Ext.create('Ext.Button', {
      text: 'New Article',
      iconCls: 'add',
      align: 'right',
      action: 'newarticle'
    }));
  },

  /**
   * Removes the 'New Article' button.
   */
  removeNewArticleButton: function() {
    var articleButton = this.getNewArticleButton();
    if (articleButton) {
      this.getArticleNav().getNavigationBar().remove(articleButton);
    }
  },

  /**
   * Show the 'New Article' button.
   */
  showNewArticleButton: function() {
    var articleButton = this.getNewArticleButton();
    if (articleButton) {
      articleButton.show();
    }
  },

  /**
   * Hide the 'New Article' button.
   */
  hideNewArticleButton: function() {
    var articleButton = this.getNewArticleButton();
    if (articleButton) {
      articleButton.hide();
    }
  },

  /**
   * Called when a new article is created.
   */
  onArticleSave: function() {
    var self = this;
    var values = this.getArticleForm().getValues();
    var params = {
      'node[type]': 'article',
      'node[title]': values.title,
      'node[body][und][0][value]': values.description
    };

    // Set the uploaded file if it exists.
    var file = this.getController('DrupalTouch.controller.File');
    if (file.file) {
      params['node[field_image][und][0][alt]'] = '';
      params['node[field_image][und][0][fid]'] = file.file.fid;
      params['node[field_image][und][0][display]'] = '1';
      params['node[field_image][und][0][width]'] = file.image.width;
      params['node[field_image][und][0][height]'] = file.image.height;
    }

    // Get the system and send the request for a new node.
    var system = this.getController('DrupalTouch.controller.System');
    system.request({
      url: '/api/node.json',
      method: 'POST',
      params: params,
      success: function(response) {

        // Parse the response.
        response = JSON.parse(response.responseText);

        // Add this item to the navigation view.
        var list = self.getArticleList();

        // Get the model.
        var model = {
          nid: response.nid,
          uri: response.uri,
          title: values.title,
          description: values.description
        };

        // If there is a file image.
        if (file.image) {
          model.thumbnail = file.image.src;
          model.preview = file.image.src;
        }

        // Insert the item in the store.
        list.getStore().insert(0, model);

        // Refresh the list.
        list.refresh();

        // Now go back to the article navigation.
        self.getArticleNav().pop();
      }
    });
  },

  /**
   * Called when the new article button is pressed.
   */
  newArticle: function() {
    // Hide the article button.
    this.hideNewArticleButton();

    // Go to the the article form.
    this.getArticleNav().push({
      xtype: 'articleform'
    });
  },

  /**
   * Called when the article list is shown.
   */
  onArticleList: function() {
    this.showNewArticleButton();
  },

  /**
   * Called when the list item is pressed.
   */
  showDetail: function(list, index, target, record) {
    this.hideNewArticleButton();
    this.getArticleNav().push({
      xtype: 'articlepage',
      title: record.get('title'),
      data: record.data
    });
  }
});

