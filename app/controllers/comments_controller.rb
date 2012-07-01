class CommentsController < ApplicationController
  helper_method :current_user

  
 def create
  @post = Post.find(params[:comment][:commentable_id])
  @user_who_commented = current_user
  @user_who_commented ||= 0
  @comment = Comment.build_from(@post, @user_who_commented, params[:comment][:body])
  @comment.save

  if params[:comment][:parent_id]
	  @parent_comment = Comment.find(params[:comment][:parent_id])

	  unless @parent_comment.blank? 
	  	@comment.move_to_child_of(@parent_comment)
	  end	
  end

  redirect_to :controller => 'posts', :action => 'show', :slug => @post.slug

 end

 def destroy
 	@comment = Comment.find(params[:id])
 	@post = Post.find(@comment.commentable_id)
 	@comment.destroy

  	redirect_to :controller => 'posts', :action => 'show', :slug => @post.slug

 end

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end