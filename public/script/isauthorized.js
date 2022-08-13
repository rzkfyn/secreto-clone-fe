const isAuthorized = async () => {
  if (location.href.split('/').filter(item => item !== '').length !== 3) return;

  const targetSecretId = location.href.split('/').filter(item => item !== '')[2];
  const _id = localStorage.getItem('id');
  const name = localStorage.getItem('name');
  const secretId = localStorage.getItem('secretId');

  if (!_id || !name || !secretId) return;

  const response = await $.post('https://sokkaritu.rzkfyn.tech/user/isAuthorized', {targetSecretId, _id, name, secretId});
  const { data } = response;

  return data.isAuthorized;
}

export default isAuthorized;
