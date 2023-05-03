import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPlaylist } from "../../store/playlist";
import { fetchPlaylists } from "../../store/playlist";

const CreatePlaylistButton = () => {
  const currentUser = useSelector((state) => state.session.user)
  const history = useHistory();
  const dispatch = useDispatch()

  

  const handleCreatePlaylist = () => {
    dispatch(createPlaylist(currentUser, history))
    dispatch(fetchPlaylists())
  };

  return (
    <div className="createPlaylistButton" onClick={handleCreatePlaylist}>
      <i id="createPlaylistLogo" className="fa-solid fa-plus"></i>
      <p id="createPlaylistText">Create a Playlist</p>
    </div>
  );
};

export default CreatePlaylistButton;
