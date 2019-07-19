class ProfilesController < ApplicationController
  before_action :authorize

  def edit
    render json: {message: "You are authorized for this action!", user: current_user}
  end

end