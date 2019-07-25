class ProfilesController < ApplicationController
  before_action :authorize

  def edit
    render json: {message: "You are authorized for this action!", user: current_user}
  end

  def update
    @profile = current_user
    @profile.update(profile_params)
    render json: {profile: @profile}
  end

  def profile_params
    params.require(:profile).permit(:username, :password, :firstname, :lastname, :email)

  end

end