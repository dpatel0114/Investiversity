Rails.application.routes.draw do
  resources :users
  resources :portfolios

post '/login', to: "sessions#authenticate" 

post '/profile/edit', to: "profiles#edit"
get '/profile/edit', to: "profiles#edit"
get '/portfolio/user/', to:"portfolios#my_portfolio"

  # post '/login', to: "sessions#authenticate"
  # get '/profile', to: 'users#profile'
  # get '/profile', to: 'application#current_user'

  # patch './profile/edit', to: "profiles#edit"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
 