class UsersController < ApplicationController

  def index 
    @users = User.all
    render json: UserSerializer.new(users)
  end 

  def create 
    @user = User.new(user_params)
    if @user.save 
      render json: {user: @user }, status: :ok
    else 
      render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(params[:id])
    render json: { user: UserSerializer.new(user) }, status: :ok
  end

  # , portfolio: user.portfolios 
  # def profile
  #   render json: { user: UserSerializer.new(current_user) }, status: :accepted
  # end

  # def edit 
  #   render json: {message: "You have edited successfully"}
  # end


  private 

  def user_params 
    params.require(:user).permit(:username, :password, :firstname, :lastname, :remaining_balance, :invested_balance,:email)
  end

end

