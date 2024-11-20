import { StandardButton } from "../../components/StandardButton";
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
        <StandardButton $sm type="button" onClick={() => handleClickRest("pages")}>
          -
        </StandardButton>
        <input
          type="number"
          value={elements.pages}
          onChange={(e) =>
            setElements({ ...elements, pages: Number(e.target.value) })
          }
        />
        <StandardButton $sm type="button" onClick={() => handleClickAdd("pages")}>
          +
        </StandardButton>
      </div>
      <div className="number-input">
        <p>Languages</p>
        <StandardButton $sm type="button" onClick={() => handleClickRest("languages")}>
          -
        </StandardButton>
        <input
          type="number"
          value={elements.languages}
          onChange={(e) =>
            setElements({ ...elements, languages: Number(e.target.value) })
          }
        />
        <StandardButton $sm type="button" onClick={() => handleClickAdd("languages")}>
          +
        </StandardButton>
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