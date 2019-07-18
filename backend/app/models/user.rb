class User < ApplicationRecord
  has_many :portfolios
  has_secure_password

  validates :username, uniqueness: { case_sensitive: false }
  validates :password, :presence => true, :length => { :within => 6..10 }
  # validates_confirmation_of :password

  def full_name 
    self.firstname + " " + self.lastname
  end

end
