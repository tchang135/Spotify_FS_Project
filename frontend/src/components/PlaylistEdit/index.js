import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editPlaylist } from "../../store/playlist";
import "./PlaylistEdit.css"

const PlaylistEdit = ({ playlistId, setEditMode }) => {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlists[playlistId]);
    const [title, setTitle] = useState(playlist?.title);
    const [description, setDescription] = useState(playlist?.description);
    const [isPublic, setIsPublic] = useState(playlist?.public);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedPlaylist = { ...playlist, title, description, public: isPublic };
      dispatch(editPlaylist(playlistId, updatedPlaylist)).then(() => {
        setEditMode(false);
      });
    };

    const handleEditCancel = (e) => {
        e.preventDefault();
        setEditMode(false)
    }
  
  
  
    return (
      <form className="playlistEditForm" onSubmit={handleSubmit}>
        <h2 className="editingPlaylistHeader">Edit Playlist</h2>
        <div className="editTitleSection">
          <label htmlFor="title" className="editTitleHeader">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="editDescriptionSection">
          <label htmlFor="description" className="editDescriptionHeader">Description</label>
          <textarea
            className="descriptionTextBox"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="editPublicSection">
          <label htmlFor="public" className="editPublicHeader">Privacy</label>
          <div className="publicOptions">
            <label className="publicButton">
              <input
                type="radio"
                name="public"
                value="public"
                checked={isPublic === true}
                onChange={(e) => setIsPublic(true)}
              />
              Public
            </label>
            <label>
              <input
                type="radio"
                name="public"
                value="private"
                checked={isPublic === false}
                onChange={(e) => setIsPublic(false)}
              />
              Private
            </label>
          </div>
        </div>
        <div className="submitEditSection">
          <button className="submitEditPlaylist" type="submit">Save</button>
          <button className="cancelEditPlaylist" type="button" onClick={handleEditCancel}>Cancel</button>
        </div>
    </form>
  );
};

  
  export default PlaylistEdit;