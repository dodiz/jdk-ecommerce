import { Dialog } from "~common";

type SigninProps = {
  show: boolean;
  onHide: () => void;
};

export const Signin: React.FC<SigninProps> = ({ show, onHide }) => {
  return (
    <Dialog show={show} onHide={onHide} title="Login">
      <div>Login page details</div>
    </Dialog>
  );
};
