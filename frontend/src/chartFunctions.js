



const  snapshot = (obj)=> {
  console.log(obj)
  let data = {
    labels: ["Remaining Balance", "Invested Balance"],
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



export {snapshot}
