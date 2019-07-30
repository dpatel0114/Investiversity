import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import  {snapshot, monthlySnap}  from '../chartFunctions'
import {connect} from 'react-redux'



 function Chart(props) {
  let obj = {'remaining_balance':props.remaining_balance,
              'invested_balance': props.invested_balance}
// console.log(snapshot)

  return (
          
            <Doughnut
              width={300}
              height={300}
              data={snapshot(obj)}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                cutoutPercentage: 60,
                animateScale: true
              }}
            legend={{
              display: true,
              position: 'top',
              fullWidth: true,
              reverse: false,
              
              labels: {
                fontColor: 'white'
              }
            }}
             />

  )
}



const mapStateToProps =(state)=>{
  return state.stock
}

export default connect(mapStateToProps)(Chart);



