import GameText from "./components/GameText";
import ActionButton from "./components/ActionButton";

import { useGameStore } from "./stores/gameStore";
import Divider from "./components/Divider";

import { t } from "./i18n";

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

            <Divider />

            <h1>
                {t("game.title")}
            </h1>

            <Divider />


            <GameText>
                {t("intro.wake_up")}
                <br />
                <br />
                {t("intro.cold_ground")}
                <br />
                <br />
                {t("intro.unknown")}
            </GameText>


            <Divider />


            <ActionButton>
                {t("actions.look_around")}
            </ActionButton>

            <ActionButton>
                {t("actions.examine_sword")}
            </ActionButton>

            <ActionButton>
                {t("actions.touch_stone")}
            </ActionButton>

            <Divider />

        </main>
    );
}


export default App;