Ext.define('DrupalTouch.view.Home', {
  extend: 'Ext.navigation.View',
  xtype: 'homepage',
  config: {
    title: 'Home',
    iconCls: 'home',
    styleHtmlContent: true,
    scrollable: true,
    html: [
      "<h2>Welcome to Drupal Touch</h2>",
      "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
      "and refresh to change what's rendered here."
    ].join("")
  }
});