import "./WebElements.css";

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
