import "./WebElements.css";
import PropTypes from "prop-types";

export function WebElements({
  elements,
  setElements,
  handleClickAdd,
  handleClickRest,
}) {
  return (
    <div className="number-container">
      <div className="number-input">
        <p>Pages</p>
        <button type="button" onClick={() => handleClickRest("pages")}>
          ➖
        </button>
        <input
          type="number"
          value={elements.pages}
          onChange={(e) =>
            setElements({ ...elements, pages: Number(e.target.value) })
          }
        />
        <button type="button" onClick={() => handleClickAdd("pages")}>
          ➕
        </button>
      </div>
      <div className="number-input">
        <p>Languages</p>
        <button type="button" onClick={() => handleClickRest("languages")}>
          ➖
        </button>
        <input
          type="number"
          value={elements.languages}
          onChange={(e) =>
            setElements({ ...elements, languages: Number(e.target.value) })
          }
        />
        <button type="button" onClick={() => handleClickAdd("languages")}>
          ➕
        </button>
      </div>
    </div>
  );
}

WebElements.propTypes = {
  elements: PropTypes.shape({
    pages: PropTypes.number.isRequired,
    languages: PropTypes.number.isRequired,
  }).isRequired,
  setElements: PropTypes.func.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  handleClickRest: PropTypes.func.isRequired,
};