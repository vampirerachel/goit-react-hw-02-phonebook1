import React from "react";

const Filter = ({ filter, setFilter }) => {
    const handleChange = evt => {
        const filterValue = evt.target.value;
        setFilter(filterValue);
    }

    return (
        <input type="text" name="filter" value={filter} onChange={handleChange} />
    );
};

export default Filter;
