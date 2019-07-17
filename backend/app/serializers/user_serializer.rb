class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :firstname, :lastname, :username, :email
end
