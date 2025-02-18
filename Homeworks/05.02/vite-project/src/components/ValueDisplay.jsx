import { useEffect, useRef  } from 'react';

function  ValueDisplay({value}){

    const prevRef = useRef("")
    useEffect(() => {prevRef.current = value, [value]})
    return(
        <div>
            <p>CurrentValue: {value}</p>
            <p>PrevValue: {prevRef.current}</p>
        </div>
    )
}
export default ValueDisplay;