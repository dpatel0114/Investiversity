import React from 'react'


function StockCard(props) {

  return (
    <div>
        {props.eachStock['01. symbol']}
        {props.eachStock['05. price']}

    </div>
  )
}

export default StockCard;
