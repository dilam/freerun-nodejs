Router.route('/', {
  name: 'main',
  template: 'main',
  onAfterAction: function() {
    document.title = 'FreeRun';
  }
});

Router.route('/contact', {
  name: 'contact',
  template: 'contact',
  onAfterAction: function() {
    document.title = 'FreeRun - Contact';
  }
});

Router.route('/team', {
  name: 'team',
  template: 'team',
  onAfterAction: function() {
    document.title = 'FreeRun - L\'Equipe';
  }
});

Router.route('/login', {
  name: 'login',
  template: 'login',
  onAfterAction: function() {
    document.title = 'FreeRun - Se connecter';
  }
});

Router.route('/signup', {
  name: 'signup',
  template: 'signup',
  onAfterAction: function() {
    document.title = 'FreeRun - S\'inscrire';
  }
});

Router.route('/game', {
  name: 'game',
  template: 'game',
  onAfterAction: function() {
    document.title = 'FreeRun - Le Jeu';
  }
});

Router.route('/highscore', {
  name: 'highscore',
  template: 'highscore',
  onAfterAction: function() {
    document.title = 'FreeRun - Classement';
  }
});

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
  }
};
