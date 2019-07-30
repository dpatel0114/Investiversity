



const  snapshot = (obj)=> {
  // console.log(obj)
  let data = {
    labels: ["Remaining Balance", "Invested Balance"],
    fontstyle: 'bold', fontColor: 'white',
    datasets: [{
      data: [obj.remaining_balance, obj.invested_balance],
      backgroundColor: [
      '#06AED5',
      '#FF6384'
      ],
      hoverBackgroundColor: [
      '#06AED5',
      '#FF6384'
      ]
    
   }]
}
return data

}

const monthlySnap=(obj)=> {

  let data = {
    // labels: "reamining balance",
    datasets: [{
      label: "Revenue",
      backgroundColor: "#06AED5",
      data: [1,2]
    }, {
       label: "Expenses",
       backgroundColor: "#FF6384",
       data: [4,3]
    }]
  }
  return data

}



export {snapshot, monthlySnap}
