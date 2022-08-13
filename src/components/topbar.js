const topbarEl = () => {
  return `<div class="navbar">
            <div class="back" onclick="history.back()">
              <img src="/public/imgs/svg/back-arrow.svg" alt="back-arrow">
            </div>
            <div class="navbar-brand" onclick="location = '/'">
              <div class="logo"></div>
              <h3>Sokkaritu</h3>
            </div>
          </div>`;
}

export default topbarEl;
