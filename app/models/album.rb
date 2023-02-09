# == Schema Information
#
# Table name: albums
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  artist_id       :bigint           not null
#  published_date  :date             not null
#  album_photo_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :artist_id, :published_date, :albumn_photo_url, presence: true

    belongs_to :artist,
        foreign_key: :artist_id

    has_many :songs,
        foreign_key: :album_id,
        dependent: :destroy
end
