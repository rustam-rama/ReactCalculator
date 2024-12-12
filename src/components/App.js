import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DateComponent from './DateComponent'; 

export const App = () => {
    // Декларативный стиль: использование useState для управления состоянием
    const [count, setCount] = useState(0);

    return React.createElement(
        React.Fragment, // Декларативный стиль: использование фрагмента для группировки элементов
        null,
        React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: 'https://vite.dev', target: '_blank' },
                React.createElement('img', { src: viteLogo, className: 'logo', alt: 'Vite logo' })
            ),
            React.createElement(
                'a',
                { href: 'https://react.dev', target: '_blank' },
                React.createElement('img', { src: reactLogo, className: 'logo react', alt: 'React logo' })
            )
        ),
        React.createElement('h1', null, 'Vite + React'),
        React.createElement(
            'div',
            { className: 'card' },
            // Императивный стиль: обработчик события для кнопки
            React.createElement(
                'button',
                { onClick: () => setCount(count => count + 1) }, // Декларативный стиль: обновление состояния через функцию
                `count is ${count}` // Декларативный стиль: отображение состояния
            ),
            React.createElement(
                'p',
                null,
                'Edit ',
                React.createElement('code', null, 'src/App.jsx'),
                ' and save to test HMR'
            )
        ),
        React.createElement('p', { className: 'read-the-docs' }, 'Click on the Vite and React logos to learn more'),
        // Декларативный стиль: использование компонента DateComponent
        React.createElement(DateComponent, null) 
    );
};
// This is a test comment