import {
    useCallback,
    useState
} from "react";

import GameLayout from "./GameLayout";
import ActionButton from "./ActionButton";
import ActionFeedback from "./ActionFeedback";
import TypewriterText from "./TypewriterText";

import type {
    Choice,
    Scene
} from "../game/types";
import { executeAction } from "../game/actions";
import { getStoryEventForAction } from "../game/events";
import { useGameStore } from "../stores/gameStore";
import SceneTransition from "./SceneTransition";
import { GAME_CONSTANTS } from "../config/constants";

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

    const activeStoryEvent =
        useGameStore(
            (state) => state.activeStoryEvent
        );

    const setActiveStoryEvent =
        useGameStore(
            (state) => state.setActiveStoryEvent
        );

    const [selectedChoice, setSelectedChoice] =
        useState<Choice | null>(null);

    const [transitioning, setTransitioning] =
        useState(false);

    const [completedSceneId, setCompletedSceneId] =
        useState<string | null>(null);


    const finishTyping = useCallback(() => {

        setCompletedSceneId(scene.id);

    }, [scene.id]);


    const hasFinishedTyping =
        completedSceneId === scene.id;


    const choices = scene.choices;

    function selectChoice(choice: Choice) {

        const storyEvent =
            getStoryEventForAction(choice.action);

        if (!storyEvent) {

            console.warn(
                `No story event found for action: ${choice.action}`
            );

            return;

        }

        setSelectedChoice(choice);
        setActiveStoryEvent(storyEvent);

    }


    function continueStory() {

        if (!selectedChoice || !activeStoryEvent) {

            return;

        }

        setTransitioning(true);

        window.setTimeout(() => {

            executeAction(selectedChoice.action);

            setSelectedChoice(null);
            setActiveStoryEvent(null);

            changeScene(
                activeStoryEvent.nextScene ?? scene.id
            );

        }, GAME_CONSTANTS.SCENE_TRANSITION_COVER_MS);

        window.setTimeout(() => {

            setTransitioning(false);

        }, GAME_CONSTANTS.SCENE_TRANSITION_DURATION_MS);

    }

    return (

        <GameLayout
            title={scene.title}
        >

            <SceneTransition
                active={transitioning}
            />

            <TypewriterText
                key={scene.id}
                lines={scene.text}
                onComplete={finishTyping}
                characterDelay={
                    GAME_CONSTANTS.TYPEWRITER_CHARACTER_DELAY_MS
                }
            />


            {
                hasFinishedTyping && (

                    <div className="scene-interaction">

                <div className="scene-actions">

                    {choices.map((choice) => (

                        <ActionButton
                            key={choice.id}

                            onClick={() => {

                                selectChoice(choice);

                            }}
                        >

                            {choice.text}

                        </ActionButton>

                    ))}

                </div>


                <div className="scene-event">

                    {
                        activeStoryEvent && (

                            <ActionFeedback
                                key={activeStoryEvent.id}
                                event={activeStoryEvent}
                                onContinue={continueStory}
                            />

                        )
                    }

                </div>

                    </div>

                )
            }


        </GameLayout>

    );

}
