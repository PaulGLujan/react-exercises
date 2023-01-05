import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    const cleanUp = () => {
      document.removeEventListener("click", handler);
    };

    return cleanUp;
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <div
          className="cursor-pointer rounded p-1 hover:bg-sky-100"
          onClick={() => handleOptionClick(option)}
          key={option.value}
        >
          {option.label}
        </div>
      );
    });
  };

  return (
    <div className="relative w-48" ref={divEl}>
      <Panel
        className="flex cursor-pointer items-center justify-between"
        onClick={handleClick}
      >
        {value?.label || "Select..."} <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions()}</Panel>}
    </div>
  );
};

export default Dropdown;
