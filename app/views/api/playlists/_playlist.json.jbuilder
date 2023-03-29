# app/views/api/playlists/_playlist.json.jbuilder

json.extract! playlist, :id, :author_id, :title, :public, :description 

json.playlist_songs playlist.playlist_songs do |playlist_song|
  json.extract! playlist_song, :id, :song_id, :playlist_id
end
