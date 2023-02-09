# == Schema Information
#
# Table name: artists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, :description, presence: true

    has_many :albums,
        foreign_key: :artist_id,
        dependent: :destroy

end
