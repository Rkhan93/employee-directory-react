import React, { useRef } from "react";

function EmailSearch(props) {
    const inputRef = useRef(null);
    return (
        
        <div className="text-white">
            <div className="input-group-prepend">
                    <input ref={inputRef} type="text" className="form-control" placeholder="Search for Employee" />
                    <button onClick={() => props.employeeNarrow(inputRef.current.value)}>Search</button>            
                </div>
            </div>
       
    )
}

export default EmailSearch;