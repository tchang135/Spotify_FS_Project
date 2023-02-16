class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false, index: true
      t.references :artist, index: true, null: false, foreign_key: true
      t.date :published_date, null: false
      t.string :photo_url, null: false
      t.timestamps
    end
  end
end
