Ext.define('DrupalTouch.view.article.ArticleNav', {
  extend: 'Ext.navigation.View',
  xtype: 'articlenav',
  requires: [
    'DrupalTouch.view.article.ArticleList'
  ],
  config: {
    iconCls: 'news',
    title: 'Articles',
    items: [
      {xtype: 'articlelist'}
    ]
  }
});