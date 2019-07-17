class StockSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :ticker, :price
end
