import { useReducer, useEffect } from 'react';

// Action types
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// Pure reducer function
const initialState = {
  status: 'idle', // idle | loading | success | error
  data: null,
  error: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        status: 'loading',
        data: null,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        status: 'success',
        data: action.payload,
        error: null,
      };
    case FETCH_ERROR:
      return {
        status: 'error',
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default function FetchUsersStateMachine() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUsers = () => {
    dispatch({ type: FETCH_START });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: FETCH_SUCCESS, payload: data });
      })
      .catch(error => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRetry = () => {
    fetchUsers();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Fetch Users - State Machine</h1>

      {/* IDLE STATE */}
      {state.status === 'idle' && (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          <p>Ready to fetch users. Click the button below to start.</p>
          <button
            onClick={handleRetry}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#4c6ef5',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Fetch Users
          </button>
        </div>
      )}

      {/* LOADING STATE */}
      {state.status === 'loading' && (
        <div style={{ padding: '20px', backgroundColor: '#e7f5ff', borderRadius: '4px', border: '1px solid #4c6ef5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                border: '3px solid #4c6ef5',
                borderTop: '3px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
            <p style={{ margin: 0 }}>Loading users...</p>
          </div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* SUCCESS STATE */}
      {state.status === 'success' && (
        <div>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Users ({state.data?.length})</h2>
            <button
              onClick={handleRetry}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: '#51cf66',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Refresh
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
            {state.data?.map(user => (
              <div
                key={user.id}
                style={{
                  padding: '15px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{user.name}</h3>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
                  <strong>Email:</strong> {user.email}
                </p>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
                  <strong>Company:</strong> {user.company?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ERROR STATE */}
      {state.status === 'error' && (
        <div style={{ padding: '20px', backgroundColor: '#ffe0e0', borderRadius: '4px', border: '1px solid #ff6b6b' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#c92a2a' }}>Error</h2>
          <p style={{ margin: '0 0 15px 0', color: '#c92a2a' }}>
            {state.error}
          </p>
          <button
            onClick={handleRetry}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* State info for debugging */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px', color: '#666' }}>
        <p><strong>Current State:</strong> {state.status}</p>
      </div>
    </div>
  );
}
