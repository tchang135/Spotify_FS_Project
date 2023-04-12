class Api::PlaylistSongsController < ApplicationController
    before_action :set_playlist_song, only: [:destroy]
    skip_before_action :verify_authenticity_token
  
    def create
      playlist_song = PlaylistSong.new(playlist_song_params)
  
      if playlist_song.save
        render json: playlist_song, status: :created
      else
        render json: playlist_song.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      playlist = Playlist.find(params[:playlist_id])
      playlist_song = playlist.playlist_songs.find_by(song_id: params[:song_id])
    
      if playlist_song
        playlist_song.destroy
        head :no_content
      else
        render json: { error: 'Playlist Song not found' }, status: :not_found
      end
    end
    
  
    private
  
    def set_playlist_song
      @playlist_song = PlaylistSong.find(params[:id])
    end
  
    def playlist_song_params
      params.require(:playlist_song).permit(:song_id, :playlist_id)
    end
  end
  