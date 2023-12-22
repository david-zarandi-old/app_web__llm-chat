import { render } from "solid-js/web";

function HelloWorld() {
  return <div class="content">LLM Chat!!</div>;
}

render(() => <HelloWorld />, document.getElementById("app"));
