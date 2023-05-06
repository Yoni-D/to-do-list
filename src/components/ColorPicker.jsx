export const ColorRadioButtons = ({ setSelectedColor }) => {
  return (
    <div>
      <input
        type="radio"
        id="red"
        name="color"
        value="red"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <label htmlFor="red"></label>

      <input
        type="radio"
        id="green"
        name="color"
        value="green"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <label htmlFor="green"></label>

      <input
        type="radio"
        id="blue"
        name="color"
        value="blue"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <label htmlFor="blue"></label>
      <input
        type="radio"
        id="yellow"
        name="color"
        value="yellow"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <label htmlFor="yellow"></label>
    </div>
  );
};
