import "./color-palette.css";
const ColorPalette = ({
  isColorPalette,
  setColorPalette,
  setUpdateNote,
  input,
  setInput,
  isEditing,
}) => {
  const updateColorPaletteHandler = (color) => {
    if (isEditing) {
      setUpdateNote((updateNote) => ({ ...updateNote, noteColor: color }));
    } else {
      setInput({ ...input, noteColor: color });
    }
  };

  return (
    <div className="color-palette-container shadow-box">
      <div
        className={isColorPalette ? "show-color-palette" : "hide-color-palette"}
      >
        <span
          className="color brown"
          onClick={() => updateColorPaletteHandler("brown")}
          title="brown"
        ></span>
        <span
          className="color green"
          onClick={() => updateColorPaletteHandler("green")}
          title="green"
        ></span>
        <span
          className="color blue"
          onClick={() => updateColorPaletteHandler("blue")}
          title="blue"
        ></span>
        <span
          className="color yellow"
          onClick={() => updateColorPaletteHandler("yellow")}
          title="yellow"
        ></span>
        <span
          className="color grey"
          onClick={() => updateColorPaletteHandler("grey")}
          title="grey"
        ></span>
      </div>
    </div>
  );
};

export { ColorPalette };
