class Api::AlbumsController < ApplicationController

    def index 
        @albums = Album.all.include(:artist, :songs)
        render :index
    end 

    def show 
        @album = Album.find_by(id: params[:id])
        render :show
    end
end
