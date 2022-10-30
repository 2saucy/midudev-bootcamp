import React from "react";

const Persons = ({persons, filter}) => {
    return (
        <div>
            {
                persons
                    .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((person) => (
                        <div key={person.name}>
                            <p>{person.name} - {person.number}</p>
                        </div>
                    ))
            }
        </div>
    )
}

export default Persons