import { JSX } from "solid-js";

type Props = {
  isOpen: JSX.Accessor<boolean>;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <div class="surface sidebar" data-is-open={isOpen()}>
      <p>Chat list</p>
    </div>
  );
};

export default Sidebar;
