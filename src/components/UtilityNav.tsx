import { useGameStore } from "../stores/gameStore";


interface Props {

    onNewGame: () => void;

}


export default function UtilityNav({
    onNewGame
}: Props) {

    const flags =
        useGameStore(
            (state) => state.flags
        );

    const toggleJournal =
        useGameStore(
            (state) => state.toggleJournal
        );

    const toggleMap =
        useGameStore(
            (state) => state.toggleMap
        );


    return (

        <nav
            className="utility-nav"
            aria-label="Game controls"
        >

            {
                flags.journal_unlocked && (

                    <button onClick={toggleJournal}>
                        [J] Journal
                    </button>

                )
            }


            {
                flags.map_unlocked && (

                    <button onClick={toggleMap}>
                        [M] Map
                    </button>

                )
            }


            <button onClick={onNewGame}>
                [New Game]
            </button>

        </nav>

    );

}
