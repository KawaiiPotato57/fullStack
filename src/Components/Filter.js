import React from "react";

function Filter(props) {
  const [filter, setFilter] = React.useState("");
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    const filteredPersons = props.persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredPersons.length === 0) {
      window.alert(`No results found for "${filter}".`);
    } else {
      const message = filteredPersons
        .map((person) => `Name: ${person.name}, Number: ${person.number}`)
        .join("\n");
      window.alert(`Search results for "${filter}":\n${message}`);
    }
  };
  return (
    <div>
      {" "}
      Filter shown with :
      <form onSubmit={search}>
        <input
          value={filter}
          onChange={handleFilter}
          placeholder="name to search"
        />
      </form>
      <button type="submit">Search</button>
    </div>
  );
}

export default Filter;
