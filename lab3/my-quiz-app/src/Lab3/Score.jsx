import React from "react";

function Score({ score, totalQuestions, onReplay }) {
  return (
    <div>
      <h2> Ket qua bai Quiz</h2>
      <p>Diem cua ban: {score}/{totalQuestions}</p>

      <button onClick={onReplay}> lam lai (REplay)</button>
    </div>
  );
}

export default Score;
