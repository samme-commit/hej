import GameText from "./components/GameText";
import ActionButton from "./components/ActionButton";

import { useGameStore } from "./stores/gameStore";


function App() {

    const discoverMemory =
        useGameStore(
            state => state.discoverMemory
        );

    const addItem =
        useGameStore(
            state => state.addItem
        );


    return (
        <main>

            <h1>
                THE FORGOTTEN ROAD
            </h1>


            <GameText>
                You wake up.
                <br />
                <br />
                The ground is cold.
                <br />
                <br />
                You don't remember who you are.
            </GameText>


            <ActionButton
                onClick={() => {
                    discoverMemory(
                        "The Forgotten Road"
                    );

                    addItem(
                        "Broken Sword"
                    );
                }}
            >
                Look around
            </ActionButton>


        </main>
    );
}


export default App;