function Filter({ title, onClick, setActive, id, activeBtn }) {
  function handleClick() {
    onClick();
    setActive(() => id);
  }

  return (
    <button
      onClick={handleClick}
      className={`text-white text-xl p-3   hover:bg-[#0069d9] transition  ${
        activeBtn === id
          ? "bg-[#0069d9] border-[#0062cc] border-2 "
          : "bg-blue-500"
      } `}
      id={id}
    >
      {title}
    </button>
  );
}

export default Filter;
