import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

const Length = (props) => {
  const handleIncrement = () => {
    props.setLength((s) => (s >= 60 ? s : s + 1));
  };

  const handleDecrement = () => {
    props.setLength((s) => (s <= 1 ? s : s - 1));
  };

  return (
    <div>
      <p id={props.id + "-label"}>{props.content}</p>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <button
          disabled={props.isCounting}
          onClick={handleDecrement}
          className={
            "btn " +
            (props.isSessionTime
              ? "btn-outline-warning"
              : "btn-outline-primary")
          }
          id={props.id + "-decrement"}
        >
          <CaretDownFill />
        </button>
        <span id={props.id + "-length"}>{props.length}</span>
        <button
          disabled={props.isCounting}
          onClick={handleIncrement}
          className={
            "btn " +
            (props.isSessionTime
              ? "btn-outline-warning"
              : "btn-outline-primary")
          }
          id={props.id + "-increment"}
        >
          <CaretUpFill />
        </button>
      </div>
    </div>
  );
};

export default Length