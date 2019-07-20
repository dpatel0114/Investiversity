class PortfoliosController < ApplicationController

  def index 
    @portfolios = Portfolio.all
    render json: PortfolioSerializer.new(portfolios)
  end

  def my_portfolio
    @portfolio = Portfolio.find_by(user_id: params[:id])
    render json: {port_array: [@portfolio]}
  end

end
