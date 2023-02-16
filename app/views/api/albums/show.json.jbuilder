json.album do
  json.extract! @album, 
    :id, 
    :title,
    :artist_id, 
    :published_date,
    :photo_url
end

  json.songs do
    @album.songs.includes(:artist).each do |song|
      json.set! song.id do
        json.partial! 'api/songs/song', song: song
      end
    end
  end

  json.artists do
    @album.songs.includes(:artist).map(&:artist).uniq.each do |artist|
      json.set! artist.id do
        json.partial! 'api/artists/artist', artist: artist
      end
    end
  end


