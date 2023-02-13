# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  album_id   :bigint
#  artist_id  :bigint           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :artist_id, :song_url, presence: true

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist
    
    # has_many :playlist_songs,
    #     primary_key: :id,
    #     foreign_key: :song_id,
    #     class_name: :PlaylistSong,
    #     dependent: :destroy

    # belongs_to :playlists,
    #     through: :playlist_songs,
    #     source: :playlist

    

end
