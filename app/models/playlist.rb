# == Schema Information
#
# Table name: playlists
#
#  id           :bigint           not null, primary key
#  author_id_id :bigint           not null
#  title        :string           not null
#  public       :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Playlist < ApplicationRecord
end
