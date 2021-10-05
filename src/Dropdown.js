import react from "react";

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const Dropdown = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default Dropdown;
