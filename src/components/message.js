import commentEl from './comment.js';

const messageEl = (message) => {
  let comments = '';

  if (message.comments) {
    message.comments.reverse().forEach(comment => {
      comments += commentEl(comment);
    });
  }

  return `<div class="message">
            <p>${message.text}</p>
            <form action="/comment" class="comment-form" method="post">
              <input type="text" name="comment" autocomplete="off" placeholder="Write a comment">
              <input type="hidden" name="messageId" value="${message._id}">
              <button type="submit">submit</button>
            </form>
            <div class="comments">
              ${comments}
            </div>
          </div>`;
}

export default messageEl;
