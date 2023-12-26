import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { LeftPanelOpenIcon } from "../../icons/left-panel-open";
import { LeftPanelCloseIcon } from "../../icons/left-panel-close";

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
          <button class="full-width">New chat</button>
        </header>
        <menu class="main">
          {new Array(50).fill("").map((_, index) => (
            <li class="full-width">
              <button>Chat {index}</button>
            </li>
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
          <button
            onClick={() => setSidePanelCollapsion((prevState) => !prevState)}
          >
            {isSidePanelCollapsed() ? (
              <LeftPanelCloseIcon />
            ) : (
              <LeftPanelOpenIcon />
            )}
          </button>
          <span>Chat name</span>
        </header>
        <ol class="main">
          {new Array(50).fill("").map((_, index) => (
            <li class="message">Message {index}</li>
          ))}
        </ol>
        <footer class="footer chat">
          <textarea class="message-input"></textarea>
          <button class="send-button">Send</button>
        </footer>
      </div>
    </main>
  );
};

export default Chat;
