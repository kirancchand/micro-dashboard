import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { incrementCount } from '../../re-redux/reducer';
// import Headr from './Headr';
export default function Home() {
    // const { notificationCount } = useSelector(({ notification }) => ({
    //     notificationCount: notification.count,
    //   }));
    //   console.log(notificationCount)
    const dispatch = useDispatch();
    // const onClick = () => dispatch(incrementCount());
    return <div>My Home page dashboard in react !!!!!!!!!!!!!
            {/* <Headr/> */}
            {/* <div>notification: {notificationCount}</div>
            <button onClick={onClick}>Increment</button> */}
        </div>
}