import "./HeaderInput.scss";
import "../sass/fonts.scss";
import "../sass/components.scss";

function HeaderInput({
  TitleInput,
  onChangeTitle,
  linkInput,
  onChangeLink,
  onDeleteSection,
}) {
  return (
    <div className="input font-ubuntu">
      <span className="input-label">Title: </span>
      <input
        className="input-text"
        type="text"
        value={TitleInput}
        onChange={onChangeTitle}
      />
      <span className="input-label">Link: </span>
      <input
        className="input-text"
        type="text"
        value={linkInput}
        onChange={onChangeLink}
      />
      <button
        className="header-delete-button buttonEmpty buttonEmpty-cross"
        onClick={onDeleteSection}
      >
        x
      </button>
    </div>
  );
}

export default HeaderInput;
