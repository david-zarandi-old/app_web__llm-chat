import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";

const Landing = lazy(() => import("./pages/landing"));
const Chat = lazy(() => import("./pages/chat"));

render(
  () => (
    <Router>
      <Route path="/chat" component={Chat} />
      <Route path="/" component={Landing} />
    </Router>
  ),
  document.getElementById("app"),
);
