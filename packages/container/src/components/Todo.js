import React from 'react';

export default function Todo(props){
        return(
            <div onClick={() => this.props.removeTodo(props.id)}>
                <span>{props.description}</span>
            </div>
        )
}