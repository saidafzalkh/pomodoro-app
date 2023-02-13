/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import { ArrowRepeat, PauseFill, PlayFill } from "react-bootstrap-icons";
const Timer = (props) => {
  const formatNumber = (num) => {
    return num.toString().length <= 1 ? "0" + num : num;
  };
  const mm = formatNumber(Math.floor(props.timeLeft / 60));
  const ss = formatNumber(props.timeLeft - mm * 60);
  const sound = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      props.isCounting && props.setTimeLeft((s) => (s >= 1 ? s - 1 : 0));
    }, 1000);
    if (props.timeLeft === 0) {
      sound.current.play();
      setTimeout(() => {
        props.setIsSessionTime((s) => !s);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [props.timeLeft, props.isCounting]);

  const toggleCounting = () => {
    props.setIsCounting((s) => !s);
  };

  const handleReset = () => {
    props.setIsCounting(false);
    props.setIsSessionTime(true);
    props.setSessionTime(25);
    props.setBreakTime(5);
    props.setTimeLeft(props.sessionTime * 60);
    sound.current.pause();
    sound.current.currentTime = 0;
  };

  return (
    <main className="card py-4 mt-4 d-flex flex-column align-items-center">
      <h3 id="timer-label">{props.isSessionTime ? "Session" : "Break"}</h3>
      <h2 id="time-left" className={mm === "00" && "text-danger"}>
        {mm} : {ss}
      </h2>
      <div className="d-flex gap-2">
        <button
          onClick={toggleCounting}
          className={
            "btn " + (props.isSessionTime ? "btn-warning" : "btn-primary")
          }
          id="start_stop"
        >
          {props.isCounting ? (
            <PauseFill />
          ) : (
            <PlayFill />
          )}
        </button>
        <button
          onClick={handleReset}
          className={
            "btn " +
            (props.isSessionTime
              ? "btn-outline-warning"
              : "btn-outline-primary")
          }
          id="reset"
        >
          <ArrowRepeat />
        </button>
      </div>
      <audio
        ref={sound}
        id="beep"
        src="https://drive.google.com/uc?export=view&id=13_UJTGLpA4wk6YLAg9F_pGMDAsbvi_Ke"
      ></audio>
    </main>
  );
};

export default Timer