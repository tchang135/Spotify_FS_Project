Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :artists, only: [:show]
    resources :albums, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create, :update, :destroy]
    resources :songs, only: [:index, :show]
    resources :playlist_songs, only: [:index, :show, :create, :destroy]
  end

  post 'api/test', to: 'application#test'

  get '*path', to: "static_pages#frontend_index"
end
