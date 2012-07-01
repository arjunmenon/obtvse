class CommentsController < ApplicationController
 def create
  @post = Post.find(params[:comment][:commentable_id])
  @user_who_commented = 0
  @comment = Comment.build_from(@post, @user_who_commented, params[:comment][:body])
  @comment.save

  @parent_comment = Comment.find(params[:comment][:parent_id])

  unless @parent_comment.blank? 
  	@comment.move_to_child_of(@parent_comment)
  end	

  redirect_to :controller => 'posts', :action => 'show', :slug => @post.slug

 end
end