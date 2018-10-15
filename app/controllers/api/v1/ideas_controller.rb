class Api::V1::IdeasController < ApplicationController
    def index
      render json: Idea.all
    end
  
    def create
      idea = Idea.create(idea_params)
      render json: idea
    end
  
    def destroy
      Idea.destroy(params[:id])
    end
  
    def update
      idea = Idea.find(params[:id])
      idea.update_attributes(idea_params)
      render json: idea
    end
  
    private
  
    def idea_params
      params.require(:idea).permit(:id, :name, :description)
    end
  end