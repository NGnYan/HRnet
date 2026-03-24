import "../styles/components/LoadingState.css";

function LoadingState() {
  return (
    <div className="loading-layout">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="#e0ebd0"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="#87A353"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="60 40"
          className="loading-layout__circle"
        />
      </svg>
      <p className="loading-layout__text">Loading...</p>
    </div>
  );
}

export default LoadingState;
