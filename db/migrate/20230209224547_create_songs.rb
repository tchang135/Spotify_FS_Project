class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.references :album, foreign_key: true, null: true 
      t.references :artist, null: false, foreign_key: true
      t.string :title, null: false, index: true 
      t.timestamps
    end
  end
end
