import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaylists } from "../../store/playlist";

const CreatePlaylistButton = () => {
  const currentUser = useSelector((state) => state.session.user)
  const history = useHistory();
  const dispatch = useDispatch()

  

  const handleCreatePlaylist = async () => {
    try {
      const response = await fetch("/api/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify({
          playlist: {
            title: "New Playlist",
            description: "This is a new playlist", 
            public: true,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const playlist = await response.json();
      history.push(`/playlists/${playlist.id}`);
      dispatch(fetchPlaylists());
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div className="createPlaylistButton" onClick={handleCreatePlaylist}>
      <i id="createPlaylistLogo" className="fa-solid fa-plus"></i>
      <p id="createPlaylistText">Create a Playlist</p>
    </div>
  );
};

export default CreatePlaylistButton;
