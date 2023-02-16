json.albums do
  @albums.each do |album|
    json.set! album.id do
        json.extract! album, 
        :id, 
        :title,
        :artist_id, 
        :published_date,
        :photo_url
        # json.photoUrl album.photo.attached? ? url_for(album.photo) : nil
    end
  end
end

