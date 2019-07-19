class ApplicationController < ActionController::API

  def current_user
    #decode the token that came from the post
    #find user by id 
    #set to current user

    token = request.headers['Access-Token']
    return nil unless token
    @user_id = JWT.decode(token, 'mys3cr3t').first['user_id']
    current_user = User.find(@user_id)
  end

  def authorize
      return nil unless current_user
  end

end
