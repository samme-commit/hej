import SceneRenderer from "./components/SceneRenderer";

import { useGameStore } from "./stores/gameStore";

import { scenes } from "./game/scenes";


function App() {

    const currentScene =
        useGameStore(
            (state) => state.currentScene
        );


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