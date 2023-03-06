require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


artist1 = Artist.create!(name: "Drake", description: "I'm a certified lover boy")
artist2 = Artist.create!(name: "Bruno Mars", description: "Synonymous with smooth or butter")
artist3 = Artist.create!(name: "Kendrick Lamar", description: "Kendrick Lamar Duckworth is an American rapper and songwriter. Known for his progressive musical styles and socially conscious songwriting, he is often considered one of the most influential hip hop artists of his generation.")
artist4 = Artist.create!(name: "Rex Orange County", description: "Alexander James O'Connor, known professionally as Rex Orange County, is an English singer, multi-instrumentalist and songwriter. O'Connor rose to prominence in 2017 following multiple features on Tyler, the Creator's Grammy-nominated album Flower Boy, including the single 'Boredom'.")



album1 = Album.create!(title: "Certified Lover Boy", artist_id: 1, published_date: '20210903', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/certified_lover_boy.jpeg' )
album2 = Album.create!(title: "Scorpion", artist_id: 1, published_date: '20180629', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/scorpion.jpeg')
album3 = Album.create!(title: "Views", artist_id: 1, published_date: '20160429', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/views.jpeg')
album4 = Album.create!(title: "24K Magic", artist_id: 2, published_date: '20161118', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/24k_magic.png')
album5 = Album.create!(title: "An Evening with Silk Sonic", artist_id: 2, published_date: '20211112', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/an_evening_with.png')
album6 = Album.create!(title: "Doo-Wops & Hooligans", artist_id: 2, published_date: '20101004', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/doo_wops.png')
album7 = Album.create!(title: "DAMN.", artist_id: 3, published_date: '20170414', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/DAMN.png')
album8 = Album.create!(title: "good kid, m.A.A.d city", artist_id: 3, published_date: '20121022', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/good_kid.jpeg')
album9 = Album.create!(title: "To Pimp a Butterfly", artist_id: 3, published_date: '20150315', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/pimp_butterfly.webp')
album10 = Album.create!(title: "Apricot Princess", artist_id: 4, published_date: '20150315', photo_url:'https://symphonifyphotos.s3.amazonaws.com/photos/apricot_princess.jpeg')
album11 = Album.create!(title: "Pony", artist_id: 4, published_date: '20150315', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/pony.png')
album12 = Album.create!(title: "Who Cares?", artist_id: 4, published_date: '20150315', photo_url: 'https://symphonifyphotos.s3.amazonaws.com/photos/who_cares%3F.png')



# album1.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/certified_lover_boy.jpeg")
#     filename: "certified_lover_boy.jpeg"
# )
# album2.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/scorpion.jpeg")
#     filename: "scorpion.jpeg"
# )
# album3.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/views.jpeg")
#     filename: "views.jpeg"
# )
# album4.photo.attach (
#     io: URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/24k_magic.png")
#     filename: "24k_magic.png"
# )
# album5.photo.attach (
#     io: URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/an_evening_with.png")
#     filename: "an_evening_with.png"
# )
# album6.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/doo_wops.png")
#     filename: "doo_wops.png"
# )
# album7.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/DAMN.png")
#     filename: "DAMN.png"
# )
# album8.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/good_kid.jpeg")
#     filename: "good_kid.jpeg"
# )
# album9.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/pimp_butterfly.webp")
#     filename: "pimp_butterfly.webp"
# )
# album10.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/apricot_princess.jpeg")
#     filename: "apricot_princess.jpeg"
# )
# album11.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/pony.png")
#     filename: "pony.png"
# )
# album12.photo.attach(
#     io:URI.open("https://symphonifyphotos.s3.amazonaws.com/photos/who_cares%3F.png")
#     filename: "who_cares%3F.png"
# )



song1 = Song.create!(album_id: 1, artist_id: 1, title: "Fair Trade", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song2 = Song.create!(album_id: 1, artist_id: 1, title: "Knife Talk", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Knife+Talk+(Audio)+ft.+21+Savage%2C+Project+Pat.mp3')
song3 = Song.create!(album_id: 1, artist_id: 1, title: "No Friends in the Industry", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+No+Friends+In+The+Industry.mp3')
song4 = Song.create!(album_id: 2, artist_id: 1, title: "In My Feelings", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song5 = Song.create!(album_id: 2, artist_id: 1, title: "Nonstop", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song6 = Song.create!(album_id: 2, artist_id: 1, title: "God's Plan", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song7 = Song.create!(album_id: 3, artist_id: 1, title: "Hype", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song8 = Song.create!(album_id: 3, artist_id: 1, title: "Pop Style", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song9 = Song.create!(album_id: 3, artist_id: 1, title: "Hotline Bling", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song10 = Song.create!(album_id: 4, artist_id: 2, title: "Finesse", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song11 = Song.create!(album_id: 4, artist_id: 2, title: "That's What I Like", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song12 = Song.create!(album_id: 4, artist_id: 2, title: "Versace on the Floor", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Drake+-+Fair+Trade+(Audio)+ft.+Travis+Scott+(1).mp3')
song13 = Song.create!(album_id: 5, artist_id: 2, title: "Smokin Out the Window", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song14 = Song.create!(album_id: 5, artist_id: 2, title: "Skate", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Skate+(Audio).mp3')
song15 = Song.create!(album_id: 5, artist_id: 2, title: "Leave the Door Open", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Leave+The+Door+Open+(Audio).mp3')
song16 = Song.create!(album_id: 6, artist_id: 2, title: "Talking to the Moon", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song17 = Song.create!(album_id: 6, artist_id: 2, title: "Just the Way You Are", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song18 = Song.create!(album_id: 6, artist_id: 2, title: "Count on Me", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song19 = Song.create!(album_id: 7, artist_id: 3, title: "LOYALTY", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song20 = Song.create!(album_id: 7, artist_id: 3, title: "DNA", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song21 = Song.create!(album_id: 7, artist_id: 3, title: "HUMBLE", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song22 = Song.create!(album_id: 8, artist_id: 3, title: "Money Trees", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Money+Trees.mp3')
song23 = Song.create!(album_id: 8, artist_id: 3, title: "m.A.A.d city", url:'https://symphonifyphotos.s3.amazonaws.com/songs/m.A.A.d+city.mp3')
song24 = Song.create!(album_id: 8, artist_id: 3, title: "Poetic Justice", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Poetic+Justice.mp3')
song26 = Song.create!(album_id: 9, artist_id: 3, title: "Alright", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song27 = Song.create!(album_id: 9, artist_id: 3, title: "These Walls", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song28 = Song.create!(album_id: 12, artist_id: 4, title: "THE SHADE", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song29 = Song.create!(album_id: 12, artist_id: 4, title: "OPEN A WINDOWS", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song30 = Song.create!(album_id: 12, artist_id: 4, title: "AMAZING", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song31 = Song.create!(album_id: 10, artist_id: 4, title: "Untitled", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song32 = Song.create!(album_id: 10, artist_id: 4, title: "Television / So Far So Good" , url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song33 = Song.create!(album_id: 10, artist_id: 4, title: "Happiness", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song34 = Song.create!(album_id: 11, artist_id: 4, title: "Always", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song35 = Song.create!(album_id: 11, artist_id: 4, title: "Pluto Projector", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')
song36 = Song.create!(album_id: 11, artist_id: 4, title: "Face to Face", url:'https://symphonifyphotos.s3.amazonaws.com/songs/Bruno+Mars%2C+Anderson.+Paak%2C+Silk+Sonic+-+Smokin+Out+The+Window+(Audio).mp3')



user1 = User.create!(username: "guest", email: "guest@guest.com", password: "password", name: "demo-man")