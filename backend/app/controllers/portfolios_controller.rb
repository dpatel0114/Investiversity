class PortfoliosController < ApplicationController

  def index 
    @portfolios = Portfolio.all
    render json: PortfolioSerializer.new(portfolios)
  end

  def my_portfolio
    @user = Portfolio.find_by(user_id:params[:id])
    if @user != nil
        @portfolio = Portfolio.where('user_id=?',params[:id]).select('ticker as ticker, min(price) as price ,sum(total_price) as total_price, sum(quantity) as quantity').group('ticker')
        render json: {portfolio: @portfolio,user: @user.user}

    else
      render json: {portfolio: [],user: []}

    end
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
