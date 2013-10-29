define('dialog',['jquery','../css/dialog.css'],function(require,exports,module){
   
   var $ = require('jquery');

  Dialog.type = ['fade','popup'];
  Dialog.title = 'We have some quality free content and some kil'+
                 'ler premium themes! Would you like to learn more?';

  function Dialog(option){
    this.name = 'dialog';

    this.options = $.extend({
      title: Dialog.title,
      type: Dialog.type[0],
      okFcn: null,
      noFcn: null,
    },option||{});
    var _ = this;
    this.init = function(){
      var $structure = $('<div id="layer"></div>'+
                     '<div id="modal"><div class="modal-header"><h3>Simple Little Notification Modal</h3><div class="modal-header-del">delete</div></div>'+
                     '<div class="modal-cnt"><h4>We have some quality free content and some killer premium themes! Would you like to learn more?</h4>'+
                     '<div class="modal-cnt-btns"><a href="###" class="modal-cnt-btns-ok"></a><a href="###" class="modal-cnt-btns-no"></a></div></div>'+
                     '<div class="modal-check"><input type="checkbox" name="againCheck" id="againCheck" /><label for="againCheck">Please don’t show me this again.</label></div></div>');

      $('html,body').css('height','100%');
      $('body').prepend($structure);
      $('#layer').css('height',(document.documentElement.scrollHeight+'px'));
      var modal = $('#modal').css('display','none').fadeIn(1500);
      var docDim = {
        height: parseInt(document.documentElement.clientHeight),
        width: parseInt(document.documentElement.clientWidth)
      };
      var modalDim = {
          height: modal.height(),
          width: modal.width()
      };
      modal.css({
          left: (docDim.width/2-modalDim.width/2) + 'px',
          top: (docDim.height/2-modalDim.width/2) + 'px'
      });

      /* event */
      var posDim = {
        left: modal.offset().left,
        top: modal.offset().top
      };
      $(window).bind('scroll',function(){
        modal.animate({
          top: posDim.top + (document.body.scrollTop|| document.documentElement.scrollTop)+'px'
        },500);

      });
      $('.modal-header-del').bind('click',function(){
        $structure.remove();
      });
      $('.modal-cnt-btns-ok').bind('click',function(){
        if(typeof _.options.okFcn == 'function'){
          _.options.okFcn();
          $structure.remove();
        }else {
          $structure.remove();
        }
      });
      $('.modal-cnt-btns-no').bind('click',function(){
        if(typeof _.options.noFcn == 'function'){
          _.options.noFcn();
          $structure.remove();
        }else {
          $structure.remove();
        }
      });

    };
   
  }

  var dialog = new Dialog({
    okFcn: function(){
      alert('ok');
    },
    noFcn: function(){
      alert('no');
    }
  });
  dialog.init();


});