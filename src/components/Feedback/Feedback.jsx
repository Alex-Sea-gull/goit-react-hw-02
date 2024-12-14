import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, pozitive }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Pozitive: {pozitive}%</p>
    </div>
  );
};

export default Feedback;
