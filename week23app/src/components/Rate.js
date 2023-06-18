import React from "react";
import "./rate.css"

class Rate extends React.Component{
render() {
    const {title, backgroundColor, price, speed, theBestRate} = this.props;
        return(
            <div className={theBestRate? "theBestRate":"card"}>
                <div className="title_price" style = {{backgroundColor: backgroundColor}}>
                    <h1 className="title">{title}</h1>
                    <div className="price">{price}</div>
                </div>
                <div className="speed">{speed}</div>
                <div className="description">Объем включенного трафика не ограничен</div>


                </div>
        )
    }
}

export default Rate