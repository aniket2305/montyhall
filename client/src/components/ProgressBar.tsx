import "../css/progress.css";

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="progress-container">
      <div className="progress-ele" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
