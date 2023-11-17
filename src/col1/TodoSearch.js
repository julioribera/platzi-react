import React from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <input
      placeholder="Escribe tu búsqueda"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
      }}
    />
  );
}

export {TodoSearch};
