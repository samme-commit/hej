import { useState } from "react";

import GameLayout from "./GameLayout";
import ActionButton from "./ActionButton";
import ActionFeedback from "./ActionFeedback";

import type { Scene } from "../game/types";


interface Props {
    scene: Scene;
}


export default function SceneRenderer({
    scene
}: Props) {

    const [selectedAction, setSelectedAction] =
        useState<string | null>(null);


    return (

        <GameLayout
            title={scene.title}
        >

            <div className="scene-text">

                {scene.text.map((line, index) => (

                    <p key={index}>
                        {line}
                    </p>

                ))}

            </div>


            <div className="scene-actions">

                {scene.choices.map((choice) => (

                    <ActionButton
                        key={choice.id}

                        onClick={() => {

                            setSelectedAction(
                                choice.text
                            );

                        }}
                    >

                        {choice.text}

                    </ActionButton>

                ))}

            </div>


            {
                selectedAction && (

                    <ActionFeedback
                        action={selectedAction}
                        onContinue={() => {

                            console.log("Continue");

                        }}
                    />
                )
            }


        </GameLayout>

    );

}