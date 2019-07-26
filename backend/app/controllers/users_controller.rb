class UsersController < ApplicationController
  before_action :authorize, :only => [:update]


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

 

  def edit 
    render json: {message: "You have edited successfully"}
  end

  def update
    # @user = User.find(params[:id])
    @user = current_user
    # params[:user][:password]= @user[:password] if params[:user][:password].blank? 
    if @user.update(user_params)
      render json: @user
    else
      render json: {errors: @user.errors.full_messages }
    end
  end



  private 

  def user_params 
    params.require(:user).permit(:username, :firstname, :password, :lastname, :remaining_balance, :invested_balance,:email)
  end

end

