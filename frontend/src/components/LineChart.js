import React from 'react'
import {Line} from 'react-chartjs-2'
import {monthlySnap} from '../chartFunctions'
import {connect} from 'react-redux'

function LineChart(props) {
  let obj = props.chartPrice
// console.log(snapshot)

  return (
          
            <Line
              width={300}
              height={300}
              data={monthlySnap(obj)}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                cutoutPercentage: 60,
                animateScale: true
              }}
            legend={{
              display: true,
              position: 'bottom',
              fullWidth: true,
              reverse: false,
              
              labels: {
                fontColor: 'black'
              }

            }}
            scales={{
              yAxes: [{
                  ticks: {
                      fontColor: "white",
                      fontSize: 18,
                      stepSize: 1,
                      beginAtZero: true
                  }
              }],
              xAxes: [{
                  ticks: {
                      fontColor: "white",
                      fontSize: 14,
                      stepSize: 1,
                      beginAtZero: true
                  }
              }]
          }}
             />

  )
}



const mapStateToProps =(state)=>{
  return state.stock
}

export default connect(mapStateToProps)(LineChart);

