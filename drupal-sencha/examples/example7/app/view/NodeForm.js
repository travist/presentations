Ext.define('Example.view.NodeForm', {
  extend: 'Ext.form.Panel',
  xtype: 'nodeformpage',
  requires: 'Ext.form.FieldSet',
  config: {
    title: 'New Article',
    items: [
      {
        xtype: 'fieldset',
        flex: 1,
        items: [
          {
            xtype: 'textfield',
            name: 'title',
            label: 'Title:'
          },
          {
            xtype: 'textareafield',
            name: 'description',
            label: 'Description:',
            cls: 'nodedesc',
            flex: 1
          }
        ]
      },
      {
        xtype: 'button',
        text: 'Save',
        ui: 'action',
        margin: '10px',
        action: 'nodeSave'
      }
    ]
  }
});