import { Link } from "react-router-dom";
import { format, parseISO } from 'date-fns';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                    <strong>{character.name}</strong> 
                    - 
                    <small>{format(parseISO(character.modified), 'MMMM d yyyy')}</small>
                    </Link>
                </li>
            ))}
        </ul>
    );
}