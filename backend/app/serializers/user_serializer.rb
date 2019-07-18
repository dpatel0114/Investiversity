class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :username, :password, :remaining_balance, :invested_balance, :email
end
