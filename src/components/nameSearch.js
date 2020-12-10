import React from "react";
import "../styles/EmailSearch.css";











function Namesearch() {
    return (
        
            <div className="text-white">
                <div className="input-group-prepend">
                    <input type="text" className="form-control" placeholder="First Name"></input>
                    <input type="text" className="form-control" placeholder="Last Name"></input>
                    <button onClick={() => console.log("name search clicked!")}>Search</button>           
                </div>
            </div>
        
    )
}

export default Namesearch;