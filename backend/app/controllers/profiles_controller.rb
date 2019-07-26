class ProfilesController < ApplicationController
  before_action :authorize

  def edit
    render json: {message: "You are authorized for this action!", user: current_user}
  end

  def update
    # @user = current_user
    current_user.update(profile_params)
    render json: {user: current_user}
  end

  def profile_params
    params.require(:profile).permit(:username, :password, :firstname, :lastname, :email, :remaining_balance, :invested_balance)

  end

end