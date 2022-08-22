import topbarEl from '../components/topbar.js';
import containerEl from '../components/container.js';
import messageContainerEl from '../components/messagecontainer.js';
import footerEl from '../components/footer.js';
import isAuthorized from '../../public/script/isauthorized.js';
import ui from '../../public/script/ui/ui.js';

const userPage = async (user) => {
  const authorized = await isAuthorized();
  const response = await fetch(`https://sokkaritu.rzkfyn.tech/messages/${user.secretId}`);
  const json = await response.json();
  const { messages } = json.data;
  
  return `<div>
            ${topbarEl()}
            <main>
              ${authorized ? ui.authorizedUserUi(user) : containerEl(user)}
              ${messageContainerEl(user, messages)}
            </main>
            ${footerEl()}
          </div>`;
}

export default userPage;
