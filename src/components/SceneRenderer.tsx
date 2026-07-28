import { useState } from "react";

import GameLayout from "./GameLayout";
import ActionButton from "./ActionButton";
import ActionFeedback from "./ActionFeedback";

import type { Scene } from "../game/types";
import { executeAction } from "../game/actions";
import { useGameStore } from "../stores/gameStore";
import SceneTransition from "./SceneTransition";

interface Props {
    scene: Scene;
}

export default function SceneRenderer({
    scene
}: Props) {

    const changeScene =
        useGameStore(
            (state) => state.changeScene
        );

    const [selectedAction, setSelectedAction] =
        useState<string | null>(null);

    const [transitioning, setTransitioning] =
        useState(false);

    return (

        <GameLayout
            title={scene.title}
        >

            <SceneTransition
                active={transitioning}
            />

            <div className="scene-text">

                {scene.text.map((line, index) => (

                    <p key={index}>
                        {line}
                    </p>

                ))}

            </div>


            {
                !selectedAction && (

                    <div className="scene-actions">

                        {scene.choices.map((choice) => (

                            <ActionButton
                                key={choice.id}

                                onClick={() => {

                                    executeAction(choice.action);

                                    setSelectedAction(choice.text);

                                }}
                            >

                                {choice.text}

                            </ActionButton>

                        ))}

                    </div>

                )
            }

            {
                selectedAction && (

                    <ActionFeedback
                        action={selectedAction}
                        onContinue={() => {

                            setTransitioning(true);


                            setTimeout(() => {

                                changeScene(
                                    "silent_forest"
                                );


                            }, 500);


                        }}
                    />
                )
            }


        </GameLayout>

    );

}