import React from 'react';

export default function Counter(props) {
        return (
            <div>
                <h2>{props.header}</h2>
                <span>{props.count}</span>
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
            </div>
        )
}