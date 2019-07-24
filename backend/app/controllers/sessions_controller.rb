class SessionsController < ApplicationController

  def authenticate
    #get username, find user
    @user = User.find_by_username(params[:username])
    #get password, see if user exists and password is authenticated
    if @user && @user.authenticate(params[:password])
        jwt_token = JWT.encode({user_id: @user.id}, 'mys3cr3t')

    # if yes, encode user_id and secret into a JWT token
        render json: {token: jwt_token, user: UserSerializer.new(@user) }, status: :ok
    else
        render json: {errors: "Wrong Credentials!"}, status: :unauthorized
    end
  end


  def profile
    current_user
    if @user
      render json: {user: UserSerializer.new(@user), jwt: jwt_token}, status: :accepted
    else
      render json: {message: 'Invalid username or password.'}, status: :unauthorized
    end
  end




end