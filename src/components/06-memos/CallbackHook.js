import React, {useState, useCallback} from 'react'
import '../03-examples/hooks.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        () => {
            setCounter(c => c + 1);
        },
        [ setCounter ],
    )


    // const increment = () => {
            
    // }
    return (
        <div>
            <h1>use callback hook {counter}</h1>
            <hr/>
            <ShowIncrement increment ={ increment } />
        </div>
    )
}
