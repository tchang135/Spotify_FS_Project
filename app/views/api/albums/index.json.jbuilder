json.albums({})

json.albums do
  @albums.each do |album|
    json.set! album.id do
        json.extract! album, 
        :id, 
        :title,
        :artist_id, 
        :published_date, 
    end
  end
end

  