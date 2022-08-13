import commentEl from '../../../src/components/comment.js';

const registeredUserUi = (user) => {
  return `<div class="mymssg-btn">
            <a href="${location.origin}/${user.secretId}">My Messages</a>
          </div>
          <div class="title">
            <h3>Make This Your Whatsapp / Instagram Status</h3>
          </div>
          <div class="container">
            <form action="" method="post">
              <div class="secret-link">
                <input type="text" id="secretLink" value="${location.origin}/${user.secretId}">
                <div class="copy-btn" style="position: relative; cursor: pointer;">
                  <div class="copy-mssg" hidden>
                    copied!
                  </div>
                </div>
              </div>
              <div style="position: relative;">
                <button class="copy-btn" type="button">copy this link</button>
                <div class="copy-mssg" style="left: 45%;" hidden>
                  copied!
                </div>
              </div>
            </form>
            <div class="social-media-btns">
              <div class="lg-btns">
                <ul>
                  <li><a href="#" class="wa-lg-btn">Whatsapp Status</a></li>
                  <li><a href="#" class="ig-lg-btn">Add to Instagram Bio</a></li>
                  <li><a href="#" class="share-lg-btn">Share</a></li>
                </ul>
              </div>
              <div class="md-btns">
                <div>
                  <ul>
                    <li><a href="#" class="sc-md-btn">Snapchat</a></li>
                    <li><a href="#" class="twit-md-btn">Twitter</a></li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><a href="#" class="wa-md-btn">Whatsapp</a></li>
                    <li><a href="#" class="fm-md-btn">Messanger</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="mymssg-btn">
          <a href="${location.origin}/${user.secretId}">My Messages</a>
        </div>`;
}

const load = () => {
  return `<div class="load" style="text-align: center;">
            <img src="/public/imgs/gif/load.gif" alt="load">
          </div>`;
}

const success = (registered, user) => {
  return `<div class="container">
              <div class="title">
                <p>Message Sent!</p>
              </div>
              <div class="success">
                <img src="/public/imgs/svg/success.svg" alt="success">
                <p>Do Not tell ${user} that you have sent the message.</p>
              </div>
              ${registered ? '' : '<a href="/">Register Now</a>'}
              <a href="${location.href}">Send Another Message</a>
          </div>`;
}

const authorizedUserUi = (user) => {
  return `<div>
            <div class="title">
              <h3>Make This Your Whatsapp / Instagram Status</h3>
            </div>
            <div class="container">
              <form action="" method="post">
                  <div class="secret-link">
                      <input type="text" id="secretLink" value="${location.origin}/${user.secretId}">
                      <div class="copy-btn" style="position: relative; cursor: pointer;">
                          <div class="copy-mssg" hidden>
                              copied!
                          </div>
                      </div>
                  </div>
                  <div style="position: relative;">
                      <button class="copy-btn" type="button">copy this link</button>
                      <div class="copy-mssg" style="left: 45%;" hidden>
                          copied!
                      </div>
                  </div>
              </form>
              <div class="social-media-btns">
                  <div class="lg-btns">
                      <ul>
                          <li><a href="#" class="wa-lg-btn">Whatsapp Status</a></li>
                          <li><a href="#" class="ig-lg-btn">Add to Instagram Bio</a></li>
                          <li><a href="#" class="share-lg-btn">Share</a></li>
                      </ul>
                  </div>
                  <div class="md-btns">
                      <div>
                          <ul>
                              <li><a href="#" class="sc-md-btn">Snapchat</a></li>
                              <li><a href="#" class="twit-md-btn">Twitter</a></li>
                          </ul>
                      </div>
                      <div>
                          <ul>
                              <li><a href="#" class="wa-md-btn">Whatsapp</a></li>
                              <li><a href="#" class="fm-md-btn">Messanger</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
          </div>`;
}

export default {
  registeredUserUi,
  commentEl,
  load,
  success,
  authorizedUserUi
}