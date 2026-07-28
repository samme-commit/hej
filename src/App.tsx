import GameExperience from "./components/GameExperience";
import NameEntry from "./components/NameEntry";

import { useGameStore } from "./stores/gameStore";


function App() {

    const playerName =
        useGameStore(
            (state) => state.playerName
        );

    const startNewGame =
        useGameStore(
            (state) => state.startNewGame
        );


    if (!playerName) {

        return (

            <NameEntry
                onSubmit={startNewGame}
            />

        );

    }


    return <GameExperience />;

}


export default App;
