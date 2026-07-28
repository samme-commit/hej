import SceneRenderer from "./components/SceneRenderer";

import { forgottenRoad } from "./game/scenes/forgottenRoad";


function App() {

    return (

        <SceneRenderer
            scene={forgottenRoad}
        />

    );

}


export default App;