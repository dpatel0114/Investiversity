class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :username,:id, :remaining_balance, :invested_balance, :email
  has_many :portfolios
  
  # def portfolio
  #   object.past_visits.map do |visit|
  #     PortfolioSerializer.new(visit.park)
  #   end
  # end

end
