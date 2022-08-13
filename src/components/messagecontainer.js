import messageEl from './message.js';

const messageContainerEl = (user, messages) => {
  let messagesEl = '';

  if (!messages[0]) {
    messagesEl = `<div class="no-messages">
                  <p>No Messages.</p>
                </div>`;
  } else  {
    messages.forEach(message => {
      messagesEl += messageEl(message);
    });
  }

  return `<div class="messages-container">
            <div class="title">
              <p>Timeline of <span class="username">${user.name}</span></p>
            </div>
            <div class="messages">
              ${messagesEl}
            </div>
          </div>`;
}

export default messageContainerEl;
