import { useState } from "react";
import "./BudPages.css";

export function BudPages() {
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  return (
    <div className="number-container">
      <div className="number-input">
        <p>Pages</p>
        <button
          type="button"
          onClick={() => setPages(pages > 0 ? pages - 1 : 0)}
        >
          ➖
        </button>
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
        />
        <button type="button" onClick={() => setPages(pages + 1)}>
          ➕
        </button>
      </div>
      <div className="number-input">
        <p>Languages</p>
        <button
          type="button"
          onClick={() => setLanguages(languages > 0 ? languages - 1 : 0)}
        >
          ➖
        </button>
        <input
          type="number"
          value={languages}
          onChange={(e) => setLanguages(Number(e.target.value))}
        />
        <button type="button" onClick={() => setLanguages(languages + 1)}>
          ➕
        </button>
      </div>
    </div>
  );
}
