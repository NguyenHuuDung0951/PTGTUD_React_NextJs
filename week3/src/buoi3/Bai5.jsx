import { useState, useRef, use } from "react";

export default function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const [lapName, setLapName] = useState("");
    
    const intervalRef = useRef(null);
    const lapInputRef = useRef(null);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms/100);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = ms%100;

        return `${String(minutes).padStart(2,"0")}
                :${String(seconds).padStart(2,"0")}
                :${String(milliseconds).padStart(2,"0")}`;
    };

    const startPause = () => {
        if(isRunning) {
            if(intervalRef.current){
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        } else{
                intervalRef.current = setInterval(() => {
                    setTime(prev => prev +1);
                },10);
            }
        setIsRunning(!isRunning);
    };

    const reset = () => {
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(0);
        setIsRunning(false);
        setLaps([]);
        setLapName('');
    };

    const addLap = ()=> {
        if(time > 0){
            setLaps([...laps, { id: Date.now(), name: lapName || `Lap ${laps.length + 1}`,time}]);
            setLapName('');
            if(lapInputRef.current){
                lapInputRef.current.focus();
                console.log("ADD LAP: ")
            }
        }
    };

    return(
        <>
        <div style={{padding: '20px', fontFamily: "Arial", maxWidth:'900px', margin: '0 auto' }}>
            <h1>Stop Watch</h1>
            <div> {formatTime(time)}</div>
            <div>
                <button onClick={startPause} style={{backgroundColor: isRunning ? '#ff6b6b' : '#51cf66'}}> 
                    {isRunning ? 'Pause' : 'Start'}
                   
                </button>
                <button onClick={reset}>Reset</button>
                <div>
                    <input ref={lapInputRef} value={lapName} type="text" placeholder="New Lap" onChange={(e) => setLapName(e.target.value)} onKeyDown={(e) => {e.key === 'Enter' && addLap()}}
                        style={{flex: 1, padding: "8px", borderRadius:"4px", border: "1px solid #ddd"}}
                       
                    />
                    <button onClick={addLap}>Add Lap</button>
                </div>

                {laps.length > 0 && (
                <div>
                    <h3>Laps({laps.length})</h3>
                    <table>
                        <thead style={{backgroundColor: "#fffcfc", borderRadius:"10px"}}>
                            <tr>
                                <th style={{textAlign:'left', padding:'10px'}}>Lap Name</th>
                                <th style={{textAlign:'right', padding:'10px'}}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {laps.map((laps,index) =>(
                                <tr key={laps.id}>
                                    <td>{laps.name}</td>
                                    <td>{formatTime(laps.time)}</td>
                                  
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                )}
            </div>
        </div>
        
        </>
        
    )

}