import { Spinner, type SpinnerProps } from "react-bootstrap";

// --------------------------------------------------

type LoadingProps = Omit<SpinnerProps, "as">;

const Loading = (props: LoadingProps) => (
  <div className="my-1 text-center">
    <Spinner {...props} />
  </div>
);

// --------------------------------------------------

export default Loading;
