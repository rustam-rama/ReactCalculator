import { useState } from 'react';
import styles from './CyberCalc.module.css';

const CalcApp = () => {
  const [display, setDisplay] = useState('');
  const [isResult, setIsResult] = useState(false);

  const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-'];

  const handleClick = (value) => {
    if (isResult) {
      if (operators.includes(value)) {
        setDisplay((prev) => prev + value);
      } else {
        setDisplay(value);
      }
      setIsResult(false);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const handleReset = () => {
    setDisplay('');
    setIsResult(false);
  };

  const handleResult = () => {
    if (!display) return;
    
    try {
      // Проверяем, содержит ли выражение только разрешенные символы
      if (!/^[0-9+\-\s]*$/.test(display)) {
        return;
      }
      const res = eval(display);
      setDisplay(String(res));
      setIsResult(true);
    } catch (error) {
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.decorativeLine}></div>
        <div className={`${styles.display} ${isResult ? styles.displayResult : ''}`}>
          <div className={styles.displayOverlay}></div>
          <div className={styles.displayText}>{display || '0'}</div>
        </div>
        <div className={styles.buttons}>
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)} className={styles.button}>
              <div className={styles.buttonOverlay}></div>
              <span className={styles.buttonText}>{btn}</span>
            </button>
          ))}
          {operators.map((op) => (
            <button key={op} onClick={() => handleClick(op)} className={styles.operatorButton}>
              <div className={styles.buttonOverlay}></div>
              <span className={styles.buttonText}>{op}</span>
            </button>
          ))}
          <button onClick={handleResult} className={styles.equalsButton}>
            <div className={styles.buttonOverlay}></div>
            <span className={styles.buttonText}>=</span>
          </button>
          <button onClick={handleReset} className={styles.clearButton}>
            <div className={styles.buttonOverlay}></div>
            <span className={styles.buttonText}>C</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalcApp;

