class SessionsController < ApplicationController

	def create
		user = User.from_omniauth(env["omniauth.auth"])
		session[:user_id] = user.id
		# redirect_to root_url, notice: "Signed in!"
		redirect_to request.env['omniauth.origin'] || '/default', notice: "Signed in!"

	end

	def callback
		# do your authentication stuff here...
		redirect_to request.env['omniauth.origin'] || '/default'
	end

	def destroy
		session[:user_id] = nil
		redirect_to root_url, notice: "Signed out!"
	end
end
