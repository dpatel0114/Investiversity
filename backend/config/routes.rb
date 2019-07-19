Rails.application.routes.draw do
  resources :users
  resources :protfolios, only: [:index, :create]

  post '/login', to: "sessions#authenticate"
  get '/profile', to: 'users#profile'
  get '/profile', to: 'auth#profile'

  patch './profile/edit', to: "profiles#edit"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
 