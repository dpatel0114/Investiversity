class PortfolioSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :stock_id, :user_id, :price
end
