class Api::PlaylistsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @playlists = Playlist.all 
        render :index 
    end

    def show 
        @playlist = Playlist.find(params[:id])
        render :show
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.author_id = current_user.id
      
        if @playlist.save
          render :show
        else
          puts @playlist.errors.full_messages
          render json: @playlist.errors.full_messages, status: 422
        end
      end
      

      def update 
        @playlist = Playlist.find(params[:id])
        
        if @playlist.update(playlist_params)
          render :show 
        else  
          render json: @playlist.errors.full_messages, status: 422
        end
      end

    def destroy 
        playlist = Playlist.find(params[:id])
        if playlist 
            playlist.destroy 
            render :index 
        else  
            render json: ["Playlist doesn't exist"], status: 404
        end
    end



    private 

    def playlist_params
        params.require(:playlist).permit(:title, :public, :description)
    end

end
