import topbarEl from '../components/topbar.js';
import containerEl from '../components/container.js';
import secondContainerEl from '../components/secondcontainer.js';
import footerEl from '../components/footer.js';

const index = () => {
  return `<div>
            ${topbarEl()}
            <main>
              ${containerEl()}
              ${secondContainerEl()}
            </main>
            ${footerEl()}
          </div>`;
}

export default index;
