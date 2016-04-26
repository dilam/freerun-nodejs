Router.route('/unity/signup--:username--:mail--:password--:passwordConfirm', {
  template: 'unitySignup'
});

Router.route('/unity/addscore--:username--:score', {
  template: 'addScore'
});
