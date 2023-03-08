class Api::PlaylistsController < ApplicationController
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
        @playlist.user_id = current_user.id

        if @playlist.save 
            render :show
        else  
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def update 
        @playlist = Playlist.find(params[:playlist_id])
        
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

    
end
