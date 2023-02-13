import { useEffect, useState } from 'react';
import Timer from './Timer';
import Length from './Length';

const App = () => {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(sessionTime * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [isSessionTime, setIsSessionTime] = useState(true);

  useEffect(() => {
    setTimeLeft(() => (isSessionTime ? sessionTime * 60 : breakTime * 60));
  }, [sessionTime, breakTime, isSessionTime]);

  return (
    <div>
      <header className="d-flex gap-5">
        <Length
          isCounting={isCounting}
          isSessionTime={isSessionTime}
          id="break"
          content="Break Length"
          length={breakTime}
          setLength={setBreakTime}
        />
        <Length
          isCounting={isCounting}
          isSessionTime={isSessionTime}
          id="session"
          content="Session Length"
          length={sessionTime}
          setLength={setSessionTime}
        />
      </header>
      <Timer
        setTimeLeft={setTimeLeft}
        setIsSessionTime={setIsSessionTime}
        setSessionTime={setSessionTime}
        setBreakTime={setBreakTime}
        setIsCounting={setIsCounting}
        timeLeft={timeLeft}
        sessionTime={sessionTime}
        isCounting={isCounting}
        isSessionTime={isSessionTime}
      />
      <small className="small">by Saidafzal Kholkhujaev</small>
    </div>
  );
};

export default App;
