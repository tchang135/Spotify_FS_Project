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
    validates :title, :author_id, presence: true

    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: :User
end
