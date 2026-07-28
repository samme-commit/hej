import SceneRenderer from "./components/SceneRenderer";
import NameEntry from "./components/NameEntry";

import { useGameStore } from "./stores/gameStore";

import { scenes } from "./game/scenes";


function App() {

    const currentScene =
        useGameStore(
            (state) => state.currentScene
        );


    const playerName =
        useGameStore(
            (state) => state.playerName
        );


    const setPlayerName =
        useGameStore(
            (state) => state.setPlayerName
        );


    if (!playerName) {

        return (

            <NameEntry
                onSubmit={setPlayerName}
            />

        );

    }


    const scene =
        scenes[currentScene];


    if (!scene) {

        return (

            <div>
                Scene not found:
                {currentScene}
            </div>

        );

    }


    return (

        <SceneRenderer
            scene={scene}
        />

    );

}


export default App;
