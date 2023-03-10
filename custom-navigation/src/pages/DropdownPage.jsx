import { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function DropdownPage() {
  const [selection, setSelect] = useState(null);

  const handleSelect = (option) => {
    setSelect(option);
  };

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
