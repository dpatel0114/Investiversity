{localStorage.token ?
  <Nav.Item style={{margin:"10px"}}>
    {/* <Button> */}
    <Link class="button" color= "black"to='/acchistory'>History</Link>
    {/* </Button> */}
  </Nav.Item>
    :
    null
} 

// stock card
{/* <Card.Header> Ticker: {props.eachStock['01. symbol']}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form onSubmit={(e)=>props.buyStock(e,props.eachStock,{"remaining_balance":props.remaining_balance,"invested_balance":props.invested_balance})}> <label> Quantity: </label>
                <input name="quantity" type="number" step="1" style={{width:'5rem'}} min='1' required="required"/>

                <Button  data-toggle="button" type="submit" style={{margin: '3px'}}> Buy </Button>
              
                </Form>
                <Button  data-toggle="button" style={{margin: '3px'}} onClick={handleShow}> Info </Button>
              </Card.Text> */}