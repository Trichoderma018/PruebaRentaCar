import React from "react";

const HElmet = (props) => {
 document.title = "Renta Car Service -" + props.title;
 return <div className="w-100">{props.children}</div>
}

export default HElmet
    