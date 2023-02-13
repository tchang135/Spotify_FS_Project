@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album_id, :artist_id
        json.set! "artist" do
            json.extract! song.artist, :name
        end
    end
end