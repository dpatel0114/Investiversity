const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'

export function getStocks(){
  return fetch(API)
    .then(res => res.json())
    
}