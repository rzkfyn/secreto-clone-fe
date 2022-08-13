import ui from './ui/ui.js';

$(async function(){
  if (typeof Storage == 'undefined') return alert('Your browser does\'nt support local Storage ;_;');
  const secretId = localStorage.getItem('secretId');
  const id = localStorage.getItem('id');

  if (secretId && id) {
    $.post('https://sokkaritu.rzkfyn.tech/user/validate', { secretId, _id: id }, res => {
      if (res.status !== 'success') return;

      const el = ui.registeredUserUi(res.data);
      $('main').html(el);
    });
  }

  $('.register-form').on('submit', function(e) {
    e.preventDefault();
    const name = $(this).children('#name').val();

    $.post('https://sokkaritu.rzkfyn.tech/user/register', { name }, res => {
      const { insertedUser } = res.data;
      const { _id, secretId } = insertedUser;

      localStorage.setItem('name', name)
      localStorage.setItem('secretId', secretId);
      localStorage.setItem('id', _id);

      const el = ui.registeredUserUi({ secretId });
      $('main').html(el);
    });
  });
});
