class StocksController < ApplicationController 

  def index 
    @stocks = Stock.all
    render json: StockSerializer.new(stocks)
  end 

end