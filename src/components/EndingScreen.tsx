import {
    useCallback,
    useState
} from "react";

import TypewriterText from "./TypewriterText";

import type { EndingDefinition } from "../game/types";
import { GAME_CONSTANTS } from "../config/constants";
import {
    meetsRequirements,
    useGameStore
} from "../stores/gameStore";


interface Props {

    ending: EndingDefinition;

    onNewGame: () => void;

}


export default function EndingScreen({
    ending,
    onNewGame
}: Props) {

    const [hasFinishedEpilogue, setHasFinishedEpilogue] =
        useState(false);

    const finishEpilogue = useCallback(() => {

        setHasFinishedEpilogue(true);

    }, []);

    const gameState = useGameStore();

    const epilogue = [
        ...ending.epilogue,
        ...(
            ending.conditionalEpilogue
                ?.filter((entry) =>
                    meetsRequirements(
                        gameState,
                        entry.requirements
                    )
                )
                .flatMap((entry) => entry.lines) ?? []
        )
    ];

    return (

        <section className="ending-screen">

            <pre
                className="ending-art"
                aria-hidden="true"
            >
                {"      .     *     .\n   *     THE END     *\n      .     *     ."}
            </pre>


            <h2>
                {ending.title}
            </h2>


            <TypewriterText
                lines={epilogue}
                onComplete={finishEpilogue}
                characterDelay={
                    GAME_CONSTANTS.TYPEWRITER_CHARACTER_DELAY_MS
                }
            />


            {
                hasFinishedEpilogue && (

                    <button
                        className="continue-button"
                        onClick={onNewGame}
                    >
                        Begin Again
                    </button>

                )
            }

        </section>

    );

}
