// в первой трети компонента происходят импорты из других файлов + работа с неизменяемыми данными
import "./lesson04.css"
import { useState } from "react";

function Lesson04() {
    // в второй трети - теле функции мы работаем с изменяемыми данными
    // здесь вызываются функции, происходят асинхронные запросы
    // вызываются специальные методы внутри react

    // let count = 1;

    // const handelPlus = () => {
    //     count++
    //     console.log(count);
    // }

    const [count, setCount] = useState(0);

    const handelPlus = () => {
        setCount(prev => prev + 1);
    }

    const handelMinus = () => {
        setCount(prev => prev - 1);
    }

    const [isVisible, setIsVisible] = useState(false);


    const handleSwitcher = () => {
        setIsVisible(prev => !prev)
        console.log(isVisible);
    }

    const [color, setColor] = useState("transparent");

    const handleColorChange = () => {
        setColor(prev => prev);
    };


    return (
        // в последней трети - после return мы показываем верстку и отображаем данные в тегах
        <div>
            <h4>Lesson04:</h4>
            <h2>UseState() hook 🪝</h2>
            <p>Чтобы при изменении переменной,
                как в примере ниже мы видели результат
                и компонент обновился - не достаточно
                обычной переменной 🫣</p>

            <p>Нужно использовать специальную
                переменную состояния из встроенной в
                React функции useState()</p>

            <div>
                <button onClick={handleSwitcher}>✨ {isVisible ? 'show' : 'hide'} counter ✨</button>
            </div>

            {isVisible && (
                <div className="counter" style={{ backgroundColor: color }}>
                    <p>React Counter with useState hook</p>
                    <button onClick={handelMinus}>-</button>
                    <span>{count}</span>
                    <button onClick={handelPlus}>+</button>
                </div>
            )}

            <div className="color-buttons">
                <button onClick={() => handleColorChange('red')}>Red</button>
                <button onClick={() => handleColorChange('green')}>Green</button>
                <button onClick={() => handleColorChange('blue')}>Blue</button>

            </div>

        </div>

    )
}

export default Lesson04;