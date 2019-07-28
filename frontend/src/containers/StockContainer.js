import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Container, Card } from 'react-bootstrap';
import  {getStocks}  from '../actions/stockActions';
import StockCard from '../components/StockCard';
import posed from 'react-pose'

// const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'

const Box = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});


const Modal = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class StockContainer extends Component {
  state = { isVisible: false };

  componentDidMount(){ 
    this.props.getStocks()   
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000); 
  }

  render() {
    const { isVisible } = this.state;

    // const result = this.props.items.map(s=> <StockCard eachStock={s}/>)
    return (

      this.state.isVisible && [
        <div key="shade" className="shade" />,
        <div key="modal" className="modal" />
      ], 
      <div>
        <Box className="box" >
          {this.props.stock.items.map(s=> <StockCard eachStock={s['Global Quote']}/>)} 
          </Box> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {stock: state.stock }
}


export default connect(mapStateToProps,{getStocks})(StockContainer);
