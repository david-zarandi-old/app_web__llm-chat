import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { LeftPanelOpenIcon } from "../../icons/left-panel-open";
import { LeftPanelCloseIcon } from "../../icons/left-panel-close";
import { SendIcon } from "../../icons/send";

const Chat = () => {
  const [isSidePanelCollapsed, setSidePanelCollapsion] = createSignal(false);

  return (
    <main
      class="content-grid"
      role="main"
      data-side-panel-collapsed={isSidePanelCollapsed()}
    >
      <div class="surface side-panel">
        <header class="header">
          <div class="full-width">
            <button class="outlined">New chat</button>
          </div>
        </header>
        <menu class="main">
          {new Array(50).fill("").map((_, index) => (
            <button class="full-width text">Chat {index}</button>
          ))}
        </menu>
        <footer class="footer menu">
          <A class="full-width" href="/">
            Sign out
          </A>
        </footer>
      </div>
      <div class="main-panel">
        <header class="header">
          <div>
            <button
              class="icon"
              onClick={() => setSidePanelCollapsion((prevState) => !prevState)}
            >
              {isSidePanelCollapsed() ? (
                <LeftPanelCloseIcon />
              ) : (
                <LeftPanelOpenIcon />
              )}
            </button>
          </div>
          <h3>Chat name</h3>
        </header>
        <ol class="main">
          {new Array(50).fill("").map((_, index) => (
            <li class="message">Message {index}</li>
          ))}
        </ol>
        <footer class="footer chat">
          <div>
            <textarea></textarea>
            <button class="icon">
              <SendIcon />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Chat;
