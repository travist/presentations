// @TODO: refactor all of this, this can be simplified by half

var update_resource_input = function(value) {
	if (value) {
		if (resources.contains(value)) {
			return false;
		}
		resources.push(value);
	}
	$('external_resources_id').set('value', resources.join(','));
	return true;
};

var remove_resource = function(value) {
	if (resources.contains(value)) {
		resources.erase(value);
	}
	update_resource_input();

	this.external_resource_el = $('external_resource_'+value);
	new Fx.Reveal(this.external_resource_el, {
		onComplete: function(){
			this.destroy();
		}.bind(this.external_resource_el)
	}).dissolve();

};

var validateGithub = function(){
	return !this.get('value').contains('raw.github');
};

var validateSSL = function(){
	return !this.get('value').contains('http://');
};

var prepareToSubmit = function(e){
	if (e){
		e.stop();
	}

	var externalResources = $('external_resource');

	if (validateGithub.call(externalResources)){
		submit_external_resource.call(this);
	} else {
		if (confirm('Github is not a CDN, using it as such will cause issues with loading the file. Do you still wish to it?')){
			submit_external_resource.call(this);
		}
	}

	if (!validateSSL.call(externalResources)){
		var message = document.location.protocol === "https:" ?
																										 "You're loading resources over HTTP not HTTPS, your fiddle will not work. Do you wish to continue?" :
																										 "You should be loading resources over HTTPS not HTTP, are you sure you want to continue?";

		if (confirm(message)){
			submit_external_resource.call(this);
		}
	}
};

var submit_external_resource = function() {

	// save url, after success update current list of resources and clean up the input
	var url = $('external_resource').value;
	if (url && url != $('external_resource').retrieve('default_value') && $('external_resource').value.length > 7) {
		new Request.JSON({
			url: add_external_resource_url,
			method: 'post',
			data: {url: url},
			onSuccess: function(response) {
				// push resource id to the list
				if (update_resource_input(response.id)) {
					// create external resource DOM element
					var li = new Element('li', {
						'id': 'external_resource_' + response.id
					}).inject($('external_resources_list'));
					new Element('a', {
						'text': response.filename,
						'title': response.url,
						'class': 'filename',
						'href': response.url,
						'target': '_blank'
					}).inject(li);

					new Element('a', {
						'text': 'Remove',
						'rel': response.id,
						'class': 'remove',
						'events': {
							'click': function(e) {
								e.stop();
								remove_resource(this.get('rel').toInt());
							}
						}
					}).inject(li);
				} else {
					// this resource was already included in the list
				}
				var inp = $('external_resource');
				inp.value = '';
				inp.removeClass('warning');
				// if (e && e.target.get('tag') != 'input') {
					// set_default_input_value.bind($('external_resource'))();
				// }
			}
		}).send();
	}
};

var change_default_input_value = function(show) {
	// set or remove the default value from input
	if (show && !this.value) {
		this.set('value', this.retrieve('default_value'));
		this.addClass('default');
	} else if (!show && this.value == this.retrieve('default_value')) {
		this.set('value', '');
		this.removeClass('default');
	}
};

var warn = function(){
	if (!validateGithub.call(this)){
		this.addClass('warning');
	} else if (!validateSSL.call(this)){
		this.addClass('warning');
	} else {
		this.removeClass('warning');
	}
};

window.addEvent('domready', function() {
	var addExtenrnalResource = document.id('add_external_resource');
	var inp = $('external_resource');
	inp.store('default_value', default_text);
	update_resource_input();
	inp.addEvents({
		change: warn,
		keydown: function(e){
			if (e.key === 'enter') {
				this.fireEvent('submit', e);
			}
		},
		keyup: warn,
		submit: prepareToSubmit
	});
	addExtenrnalResource.addEvent('click', prepareToSubmit);
  if (preload_resources) {
    preload_resources.each(function(res){
      $('external_resource').set('value',res);
      submit_external_resource();
    })
  }
});
