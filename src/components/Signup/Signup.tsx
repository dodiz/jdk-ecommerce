import { Dialog } from "~common";

type SignupProps = {
  show: boolean;
  onHide: () => void;
};

export const Signup: React.FC<SignupProps> = ({ show, onHide }) => {
  return (
    <Dialog show={show} onHide={onHide} title="Signup">
      <div>Signup page details</div>
    </Dialog>
  );
};
