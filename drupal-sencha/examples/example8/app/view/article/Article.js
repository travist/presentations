Ext.define('DrupalTouch.view.article.Article', {
  extend: 'Ext.Panel',
  xtype: 'articlepage',
  config: {
    title: 'Article',
    styleHtmlContent: true,
    scrollable: 'vertical',
    tpl: new Ext.XTemplate(
      '<div class="node-item">',
        '<div class="node-item-img">',
          '<img src="{preview}" width="260px">',
        '</div>',
        '<div class="node-item-info">',
          '<h2 class="node-item-title">{title}</h2>',
          '<p class="node-item-desc">{description}</p>',
        '</div>',
      '</div>'
    )
  }
});