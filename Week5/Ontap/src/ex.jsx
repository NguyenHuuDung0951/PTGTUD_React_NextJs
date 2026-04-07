import { useState, useRef, useEffect } from 'react';

function Exercise5() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");
  const intervalId = useRef(null);
  const lapInputRef = useRef(null);

  const handleStart = () => {
    if (!running) {
      setRunning(true);
      intervalId.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
  };

  const handlePause = () => {
    setRunning(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
    setLapName("");
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const handleAddLap = () => {
    if (lapName.trim()) {
      setLaps(prev => [...prev, { name: lapName, time }]);
      setLapName("");
    }
    if (lapInputRef.current) lapInputRef.current.focus();
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  const formatTime = (ms) => {
    const centiseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);
    const hours = Math.floor(ms / 3600000);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div style={{ maxWidth: 400, margin: '32px auto', padding: 24 }}>
      <h2>Stopwatch</h2>

      <div style={{ fontSize: 32, marginBottom: 16 }}>
        {formatTime(time)}
      </div>

      <div style={{ marginBottom: 16 }}>
        <button onClick={handleStart} disabled={running}>Start</button>
        <button onClick={handlePause} disabled={!running}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          ref={lapInputRef}
          value={lapName}
          onChange={e => setLapName(e.target.value)}
          placeholder='Lap name'
        />

        <button onClick={handleAddLap}>Add Lap</button>
      </div>

      <ul>
        {laps.map((lap, idx) => (
          <li key={idx}>
            {lap.name} - {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise5;