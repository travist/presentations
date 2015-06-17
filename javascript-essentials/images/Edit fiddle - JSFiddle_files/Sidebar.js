// #TODO: refactor Accordion to fireEvent onCompleted when animation finishes
//        It probably should use chaining

var Sidebar = new Class({
  Implements: [Options, Class.Occlude, Events],
  parameter: "Sidebar",
  options: {
    DOM: '',
    toggleSidebar: 'toggleSidebar'
  },

  initialize: function (options) {
    this.setOptions(options);
    if ($(this.options.DOM)) {
      this.element = $(this.options.DOM);
      if (this.occlude()) return this.occluded;

      this.element.getFirst('.toggler').addClass('active');
      this.accordion = new Fx.Accordion('#' + this.options.DOM + ' .toggler', '#' + this.options.DOM + ' .elementBody');
      this.accordion.addEvent('active', function(toggler, element) {
        toggler.addClass('active').getSiblings('.toggler').removeClass('active');
        this.fireEvent('accordion_activated');
        // 700 ms after launch the animation should be finished...
        this.fireEvent('accordion_resized',[]);
      }.bind(this));
      var toggleSidebar = $(this.options.toggleSidebar);
      if (toggleSidebar) {
        if (Layout.isMobile){
          toggleSidebar.show();
        }
        toggleSidebar.addEvent('click', this.toggle.bind(this));
      }
      this.reportAbuse.setup();
      // this.showJobs();
    }
  },

  toElement: function() {
    return this.element;
  },

  showJobs: function(){
    var jobEl = document.id("job");
    if (jobEl){
      jobEl.set("styles", {
        display: "block",
        opacity: 0
      });
      var subs = "<h4>{title}</h4><h5>{job_type} at {company_name}</h5><p>{location}</p>";
      var url = "http://jobs.jsfiddle.net/jobs/{url}";
      new Request.JSONP({
        url: "http://jobs.jsfiddle.net/random.js",
        onSuccess: function(job){
          if (job.id !== "undefined"){
            jobEl.fade(1);
            jobEl.set("html", subs.substitute(job));
            jobEl.set("href", url.substitute(job));
          }
        }
      }).send();
    }
  },

  hide: function() {
    this.element.hide();
    this.contentMargin = $('content').getStyle('marginLeft');
    $('content').setStyle('marginLeft', 13);
    this.hidden = true;
    Layout.resize();
  },

  show: function() {
    $('content').setStyle('marginLeft', this.contentMargin);
    this.element.show();
    this.hidden = false;
    Layout.resize();
  },

  toggle: function(ev) {
    var label = $(this.options.toggleSidebar).getElement('span');
    if (label.get('text') === 'Hide sidebar'){
      label.set('text', 'Show sidebar');
    } else {
      label.set('text', 'Hide sidebar');
    }
    label.toggleClass('hidden');
    if (ev) {
      ev.stop();
    }
    if (this.hidden) return this.show();
    return this.hide();
  },

  reportAbuse: {

    setup: function(){
      this.element = {
        textarea: document.id('abuse-text'),
        submit: document.id('send-abuse')
      };

      if (this.element.textarea && this.element.submit){
        this.element.submit.addEvents({
          click: this.validate.bind(this)
        });
      }
    },

    validate: function(event){
      event.stop();

      if (this.element.textarea.get('value').trim() !== ''){
        this.send();
      } else {
        this.element.textarea.highlight();
      }
    },

    send: function(){
      new Request.JSON({
        url: this.element.submit.get('href'),
        data: {
          text: this.element.textarea.get('value'),
          url: document.location.href
        },
        onComplete: this.hideFields.bind(this)
      }).send();
    },

    hideFields: function(){
      var notification = Elements.from('<p>Thanks for reporting. We\'ll look into this as soon as possible.</p>');
      notification.fade('hide');
      notification.inject(this.element.textarea, 'after');
      notification.fade(1);
      this.element.textarea.hide();
      this.element.submit.hide();
    }

  }
});
