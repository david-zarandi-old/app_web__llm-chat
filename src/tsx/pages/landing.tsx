import { A } from "@solidjs/router";

const Landing = () => {
  return (
    <>
      <div class="sidebar">
        <p>Welcome to</p>
        <p>LLM Chat</p>
      </div>
      <div class="main-content">
        <div class="full-height">
          <A href="/chat">
            <p>Navigate me to chat</p>
          </A>
        </div>
      </div>
    </>
  );
};

export default Landing;
