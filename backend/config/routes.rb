Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :protfolios, only: [:index]
  resources :stocks, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
