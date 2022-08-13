import commentEl from '../../src/components/comment.js';

$(function(){
  $(document).on('submit', function(e) {
    e.preventDefault();
    const target = e.target;

    if ($(target).hasClass('comment-form')) {
      const text = $(target).children('input[name=comment]').val();

      if (!text || (text.trim() == '')) return;

      const forMessageId = $(target).children('input[name=messageId]').val();
      const forUserSecretId = location.href.replace(`${location.origin}/`, '').replace('/', '');

      $(target).next('.comments').prepend(commentEl({ text }));
      $(target).children('input[name=comment]').val('');

      $.post('https://sokkaritu.rzkfyn.tech/comment', { text, forMessageId, forUserSecretId }, _ => {});
    }
  });
});
