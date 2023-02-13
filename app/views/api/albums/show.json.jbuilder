json.album do
    json.extract! album, 
    :id, 
    :title,
    :artist_id, 
    :published_date, album: @album
  end
  
  @album.songs.includes(:artist).each do |song|
    json.songs do
      json.set! song.id do
        json.partial! 'api/songs/song', song: song
      end
    end
  
    json.artists do
      json.set! song.artist_id do
        json.partial! 'api/artists/artist', user: song.artist
      end
    end
  end