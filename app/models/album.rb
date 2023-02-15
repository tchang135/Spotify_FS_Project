# == Schema Information
#
# Table name: albums
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  artist_id      :bigint           not null
#  published_date :date             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :artist_id, :published_date, presence: true

    has_one_attached :photo

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :songs,
        foreign_key: :album_id,
        dependent: :destroy
end
