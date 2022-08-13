import ui from './ui/ui.js';

$(function(){
  $(document).on('submit', function(e) {
    e.preventDefault();
    const target = e.target;

    if ($(target).hasClass('message-form')) {
      const text = $(target).children('#text').val();

      $('.container').replaceWith(ui.load());
      
      const forUserSecretId = location.href.replace(`${location.origin}/`, '').replace('/', '');
      const user = $('.username').text();
      const isRegistered = localStorage.getItem('id') && localStorage.getItem('secretId') && localStorage.getItem('name');
      
      $.post('https://sokkaritu.rzkfyn.tech/message', { text, forUserSecretId }, _ => {
        setTimeout(() => {
          $('.load').replaceWith(ui.success(isRegistered, user));
        }, 1000);
      });
    }
  });
});