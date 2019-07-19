class UserSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :username,:id, :password, :remaining_balance, :invested_balance, :email

  # def portfolio
  #   object.past_visits.map do |visit|
  #     PortfolioSerializer.new(visit.park)
  #   end
  # end

end
