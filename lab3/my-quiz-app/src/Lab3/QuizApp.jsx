import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);

    // Khoi tao bo nho (State)
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: ''
    };
  }


  handleSelectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }


  handleCheckAndNext = () => {
    const { questions, currentQuestion, selectedAnswer, score } = this.state;
    const currentQuestionData = questions[currentQuestion];

    let updatedScore = score;

    if (selectedAnswer === currentQuestionData.answer) {
      updatedScore = score + 1;
    }

    const nextQuestionIndex = currentQuestion + 1;


    if (nextQuestionIndex < questions.length) {
      this.setState({
        score: updatedScore,
        currentQuestion: nextQuestionIndex,
        selectedAnswer: ''
      });
    } else {

      this.setState({
        score: updatedScore,
        quizEnd: true
      });
    }
  }


  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: ''
    });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd, selectedAnswer } = this.state;

    return (
      <div>
        <h1>Quiz App (No CSS)</h1>
        <hr />


        {quizEnd ? (

          <Score
            score={score}
            totalQuestions={questions.length}
            onReplay={this.handleReplay}
          />
        ) : (

          <div>
            <p><b>Cau so:</b> {currentQuestion + 1} / {questions.length}</p>
            <Question
              questionData={questions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={this.handleSelectAnswer}
              onSubmitAnswer={this.handleCheckAndNext}
            />
          </div>
        )}
      </div>
    );
  }
}

export default QuizApp;
