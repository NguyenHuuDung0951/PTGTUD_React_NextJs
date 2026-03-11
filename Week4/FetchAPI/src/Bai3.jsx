import { useEffect, useState } from "react";

export default function Bai3() {
  const [input, setInput] = useState("0");
  const [userId, setUserId] = useState(""); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = parseInt(userId, 10);

    if (!userId) {
      setUser(null);
      setError(null);
      return;
    }

    if (isNaN(id) || id < 1 || id > 10) {
      setUser(null);
      setError("User not found");
      console.log("User ID must be a number between 1 and 10.");
      console.log("User not found");
    
      
      return;
    }

    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) {
          setUser(null);
          setError("User not found");
          return;
        }
        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch (err) {
        if (!cancelled) setError("User not found");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  function handleFetch(e) {
    e.preventDefault();
    setUserId(input.trim());
  }

  return (
    <div>
      <form onSubmit={handleFetch}>
        <label>
          Enter userId (1-10):
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
        <button type="submit" style={{ marginLeft: 8 }}>
          Fetch
        </button>
      </form>

      <div style={{ marginTop: 16 }}>
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && user && (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        )}
        {!loading && !error && !user && <p>Enter an ID and press Fetch.</p>}
      </div>
    </div>
  );
}