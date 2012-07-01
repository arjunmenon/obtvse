Obtvse::Application.routes.draw do
	resources :posts
	match '/admin', :to => 'posts#admin'
	match '/new', :to => 'posts#new'
	match '/edit/:id', :to => 'posts#edit'
	post '/preview', :to => 'posts#preview'
	put '/preview', :to => 'posts#preview'
	get '/:slug', :to => 'posts#show', :as => 'post'
	delete '/:slug', :to => 'posts#destroy', :as  => 'post'
	put '/:slug', :to => 'posts#update', :as  => 'post'
	root :to => 'posts#index'

	delete '/delete_comment/:id', :to => 'comments#destroy' 

	resources :posts do
		resources :comments
	end

	match 'auth/:provider/callback', to: 'sessions#create'
	match 'auth/failure', to: redirect('/')
	match 'auth/signout', to: 'sessions#destroy'
end