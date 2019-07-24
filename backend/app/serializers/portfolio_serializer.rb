class PortfolioSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes  :user_id, :price, :total_price, :ticker, :quantity, :id
  belongs_to :user
end
