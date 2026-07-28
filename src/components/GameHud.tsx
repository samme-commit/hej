import HealthBar from "./HealthBar";

import { ZONES } from "../game/data/content";
import { useGameStore } from "../stores/gameStore";


const PATH_LABELS = {

    warrior: "Warrior",

    keeper: "Keeper",

    explorer: "Explorer"

};


export default function GameHud() {

    const playerPath =
        useGameStore(
            (state) => state.playerPath
        );

    const echoes =
        useGameStore(
            (state) => state.echoes
        );

    const stats =
        useGameStore(
            (state) => state.stats
        );

    const playerName =
        useGameStore(
            (state) => state.playerName
        );

    const currentZoneId =
        useGameStore(
            (state) => state.currentZoneId
        );


    if (!playerPath) {

        return null;

    }


    return (

        <section
            className="game-hud"
            aria-label="Player status"
        >

            <p className="hud-zone">
                {ZONES[currentZoneId].name}
            </p>

            <HealthBar
                currentHealth={stats.currentHealth}
                maxHealth={stats.maxHealth}
            />


            <p className="hud-value hud-echoes">
                <span className="hud-label">
                    Echoes
                </span>

                {echoes}
            </p>


            <p className="hud-value hud-path">
                <span className="hud-label">
                    Path
                </span>

                {PATH_LABELS[playerPath]}
            </p>


            <p className="hud-value hud-name">
                {playerName}
            </p>

        </section>

    );

}
