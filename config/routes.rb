Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
     resources :ideas, only: [:index, :create, :destroy, :update]
    end 
  end 

  root to: 'home#index'
end
