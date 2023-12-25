import { createSignal } from "solid-js";
import Sidebar from "./sidebar";
import { LeftPanelOpenIcon } from "../../icons/left-panel-open";
import { LeftPanelCloseIcon } from "../../icons/left-panel-close";

const Chat = () => {
  const [isSidebarVisible, setSidebarVisibility] = createSignal(true);

  return (
    <>
      <Sidebar isOpen={isSidebarVisible} />
      <div class="-surface-1 main-content">
        <div class="header">
          <button
            class="sidebar-toggle"
            type="button"
            onClick={() => setSidebarVisibility((prevState) => !prevState)}
          >
            {isSidebarVisible() ? (
              <LeftPanelCloseIcon />
            ) : (
              <LeftPanelOpenIcon />
            )}
          </button>
        </div>
        <div class="content">content</div>
        <div class="footer">footer</div>
      </div>
    </>
  );
};

export default Chat;
