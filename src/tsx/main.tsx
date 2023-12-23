import { render } from "solid-js/web";

function HelloWorld() {
  return (
    <>
      <div class="breakout chat-header">chat name</div>
      <div class="content chat-content">
        <span>img</span>
        <span>chat text</span>
      </div>
      <div class="breakout chat-footer">
        <textarea />
        <button>send</button>
      </div>
    </>
  );
}

render(() => <HelloWorld />, document.getElementById("app"));
