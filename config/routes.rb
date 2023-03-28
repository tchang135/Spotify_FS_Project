Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      resources :playlist_songs, only: [:index, :show, :create, :destroy]
    end
    resources :songs, only: [:index, :show]
  end
  

  post 'api/test', to: 'application#test'

  get '*path', to: "static_pages#frontend_index"
end
