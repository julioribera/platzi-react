import React from "react";

function TodoSearch({
  searchValue,
  setSearchValue
}) {


  return (
    <input
      placeholder="Escribe tu búsqueda"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export {TodoSearch};
