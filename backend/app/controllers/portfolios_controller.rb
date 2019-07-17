class PortfoliosController < ApplicationController

  def index 
    @portfolios = Portfolio.all
    render json: PortfolioSerializer.new(portfolios)
  end
end
