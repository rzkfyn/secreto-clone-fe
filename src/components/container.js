const userPageContainer = (user) => {
  return `<div class="container">
            <div class="title">
              <p>Send Secret Message To</p>
              <h3 class="username">${user.name}</h3>
            </div>
            <ul>
              <li><span class="username">${user.name}</span> will never know who sent this message.</li>
            </ul>
            <form action="" method="post" class="message-form">
              <textarea name="text" id="text" rows="5" placeholder="Write secret message" required></textarea>
              <button type="submit" id="submit">Submit</button>
            </form>
          </div>`;
}

const indexContainer = () => {
  return `<div class="container">
            <h3>Secret Message Book</h3>
            <ul>
              <li>Get anonymous feedback from your Friends & Coworkers.</li>
              <li>Improve your Friendship by discovering your Strengths and areas for Improvement</li>
            </ul>
            <form action="" method="post" class="register-form">
              <input type="text" name="name" id="name" placeholder="Your Name" autocomplete="off" required>
              <button type="submit" id="register">Register</button>
            </form>
          </div>`;
}

const containerEl = (user = null) => {
  if (!user) return indexContainer();
  return userPageContainer(user);
}

export default containerEl;
