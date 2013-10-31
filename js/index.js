define('index',['dialog'],function(require,exports,module){
  var Dialog = require('dialog');

  var dialog = new Dialog({
    title: 'this maybe a dialog',
    type: 'popup',
    okFcn: function(){
      alert('ok');
    },
    noFcn: function(){
      alert('no');
    }
  });

  dialog.init();

});