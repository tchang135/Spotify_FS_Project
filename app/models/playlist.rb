# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  author_id  :bigint           not null
#  title      :string           not null
#  public     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord
    validates :title, presence: true
    validates :public, inclusion: { in: [true, false] }
    validates :description, presence: true
    
    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: :User

    has_many :playlist_songs, dependent: :destroy 

    has_many :songs, 
    through: :playlist_songs, 
    source: :song
end
