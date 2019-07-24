class PortfoliosController < ApplicationController

  def index 
    @portfolios = Portfolio.all
    render json: PortfolioSerializer.new(portfolios)
  end

  def my_portfolio
    @portfolio = Portfolio.find_by(user_id: params[:id])
    render json: {port_array: [@portfolio]}
  end

  def create 
    @portfolio = Portfolio.new(portfolio_params)
    if @portfolio.save 
      render json: {Portfolio: @portfolio }, status: :ok
    else 
      render json: {errors: @portfolio.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def update
    @portfolio = Portfolio.find(params[:id])
    @portfolio.update(portfolio_params)
    render json: {portfolio: @portfolio}

  end

  private 

  def portfolio_params 
    params.require(:portfolio).permit(:price, :ticker, :quantity, :total_price, :user_id)
  end

end
