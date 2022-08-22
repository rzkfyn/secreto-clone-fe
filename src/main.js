import index from './views/index.js';
import notFound from './views/notfound.js';
import userPage from './views/userpage.js';

let title;
let app;
let href = location.href;
href = href.endsWith('/') ? href.slice(0, href.length - 1) : href;

const request = href.split('/').filter(item => item !== '');

if (href === location.origin) {
  app = index();
  title = 'Send A Secret Message About';
} else if (request.length === 3) {
  const response = await fetch(`https://sokkaritu.rzkfyn.tech/user/${request[2]}`);
  const json = await response.json();
  if (json.status !== 'Ok')  {
    app = notFound('User Not Found');
    title = 'Not Found';
  } else  {
    const { user } = json.data;
    app = await userPage(user);
    title = `Send A Secret Message About ${user.name}`;
  }
} else {
  app = notFound();
  title = 'Not Found';
}

document.getElementsByTagName('title')[0].innerText = title;
document.getElementById('app').innerHTML = app;
