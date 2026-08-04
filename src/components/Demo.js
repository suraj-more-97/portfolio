import React, { useState } from 'react';
import './Demo.css';

const quizQuestions = [
  {
    question: 'What is a core benefit of using React for UI development?',
    options: [
      'Automatic server-side rendering',
      'Reusable component structure',
      'Built-in database support',
      'Native mobile app compilation',
    ],
    correct: 'Reusable component structure',
  },
  {
    question: 'Which HTML feature is best for responsive layouts?',
    options: ['Grid', 'Frames', 'Tables', 'Marquee'],
    correct: 'Grid',
  },
  {
    question: 'What does the term “props” mean in React?',
    options: ['Global app state', 'Input data for components', 'CSS selector', 'Build tool'],
    correct: 'Input data for components',
  },
];

function Demo() {
  const [themeMode, setThemeMode] = useState('dark');
  const [typedValue, setTypedValue] = useState('');
  const [typingResult, setTypingResult] = useState(null);
  const [typingStart, setTypingStart] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [count, setCount] = useState(128);

  const typingText = 'Build beautiful interfaces with React and clean UI logic.';

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleTypingChange = (event) => {
    if (!typingStart) {
      setTypingStart(Date.now());
    }
    setTypedValue(event.target.value);
  };

  const submitTyping = () => {
    if (!typedValue.trim()) {
      setTypingResult(null);
      return;
    }

    const elapsedSeconds = Math.max((Date.now() - typingStart) / 1000, 1);
    const words = typedValue.trim().split(/\s+/).length;
    const correctChars = typedValue.split('').reduce((score, char, idx) => {
      return score + (char === typingText[idx] ? 1 : 0);
    }, 0);
    const accuracy = Math.round((correctChars / typingText.length) * 100);
    const wpm = Math.round((words / elapsedSeconds) * 60);

    setTypingResult({ accuracy, wpm });
  };

  const resetTyping = () => {
    setTypedValue('');
    setTypingResult(null);
    setTypingStart(null);
  };

  const submitQuiz = () => {
    const answer = quizQuestions[currentQuestion].correct;
    if (!selectedAnswer) {
      setQuizFeedback('Select an answer to continue.');
      return;
    }

    setQuizFeedback(
      selectedAnswer === answer
        ? 'Nice! That answer is correct.'
        : `Not quite. The correct answer is “${answer}”.`
    );
  };

  const nextQuestion = () => {
    const nextIndex = (currentQuestion + 1) % quizQuestions.length;
    setCurrentQuestion(nextIndex);
    setSelectedAnswer('');
    setQuizFeedback(null);
  };

  return (
    <section id="demo" className={`demo-section ${themeMode}`}>
      <div className="demo-header">
        <div>
          <p className="demo-badge">Interactive Playground</p>
          <h2 className="demo-title">Build, Play, and Explore</h2>
          <p className="demo-subtitle">
            Explore small UI tools and games that highlight your front-end skills, logic, and interactivity.
          </p>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      <div className="demo-grid">
        <article className="demo-card demo-theme-card">
          <div className="card-heading">
            <h3>Theme Switcher</h3>
            <span>UI widget</span>
          </div>
          <p>Toggle the interface tone and preview the theme results instantly.</p>
          <div className="theme-preview">
            <div className="theme-preview-box">
              <span>{themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <p>Theme is now: <strong>{themeMode}</strong></p>
          </div>
          <button className="demo-action" onClick={toggleTheme}>Toggle Theme</button>
        </article>

        <article className="demo-card demo-typing-card">
          <div className="card-heading">
            <h3>Typing Challenge</h3>
            <span>Mini game</span>
          </div>
          <p>Type the sentence below and check your speed and accuracy.</p>
          <div className="typing-box">
            <p className="typing-text">{typingText}</p>
            <textarea
              value={typedValue}
              onChange={handleTypingChange}
              placeholder="Start typing here..."
              rows="4"
            />
          </div>
          <div className="demo-footer-row">
            <button className="demo-action" onClick={submitTyping}>Check Score</button>
            <button className="demo-action secondary" onClick={resetTyping}>Reset</button>
          </div>
          {typingResult && (
            <div className="typing-result">
              <strong>WPM:</strong> {typingResult.wpm} • <strong>Accuracy:</strong> {typingResult.accuracy}%
            </div>
          )}
        </article>

        <article className="demo-card demo-quiz-card">
          <div className="card-heading">
            <h3>Quick Quiz</h3>
            <span>Mini game</span>
          </div>
          <p>Choose the best answer to sharpen your front-end knowledge.</p>
          <div className="quiz-question">{quizQuestions[currentQuestion].question}</div>
          <div className="quiz-options">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                type="button"
                className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="demo-footer-row">
            <button className="demo-action" onClick={submitQuiz}>Submit Answer</button>
            <button className="demo-action secondary" onClick={nextQuestion}>Next Question</button>
          </div>
          {quizFeedback && <div className="quiz-feedback">{quizFeedback}</div>}
        </article>

        <article className="demo-card demo-counter-card">
          <div className="card-heading">
            <h3>Animated Counter</h3>
            <span>UI widget</span>
          </div>
          <p>Use the increment controls to animate the counter and show responsive UI updates.</p>
          <div className="counter-display">{count}</div>
          <div className="counter-controls">
            <button className="demo-action" onClick={() => setCount((value) => value + 1)}>Increase</button>
            <button className="demo-action secondary" onClick={() => setCount((value) => Math.max(value - 1, 0))}>Decrease</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Demo;
