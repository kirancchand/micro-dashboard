import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { IncrementGlobalCounter, DecrementGlobalCounter } from '../../re-redux/global.actions';
import { IncrementLocalCounter, DecrementLocalCounter } from '../../re-redux/local.actions';
export default function Counter(props) {
    const dispatch = useDispatch();
    const newCount=useSelector(state=>state.global)
    const ConventionalCounter=()=>{
        if(props.header=="Global Counter")
        {
            dispatch(IncrementGlobalCounter());
        }else{
            dispatch(IncrementLocalCounter());
        }
           
    }
        return (
            <div>
                <div>
                    <h2>{props.header}</h2>
                    <span>{props.count}</span>
                    <button onClick={props.increment}>+</button>
                    <button onClick={props.decrement}>-</button>
                </div>
                <br/>
                <div><button onClick={()=>ConventionalCounter()}>update counter by conventional method</button>&nbsp;
                 {newCount}
                 </div>
               
            </div>
        )
}