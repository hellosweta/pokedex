Rails.application.routes.draw do

  namespace :api do
  get 'pokemon/index'
  end

  namespace :api do
  get 'pokemon/show'
  end

  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [ :index, :create, :show, :update, :destroy]
  end

  root to: 'static_pages#root'
end
