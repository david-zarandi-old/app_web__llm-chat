import { A } from "@solidjs/router";

const Landing = () => {
  return (
    <main class="content-grid" role="main">
      <div class="side-panel">
        <p class="full-width">
          <b>Welcome to</b>
        </p>
        <p class="full-width">LLM Chat</p>
      </div>
      <div class="main-panel">
        <div class="full-height">
          <A href="/chat">
            <p>Navigate me to chat</p>
          </A>
        </div>
      </div>
    </main>
  );
};

export default Landing;
