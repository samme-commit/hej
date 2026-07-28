import {
    useCallback,
    useState
} from "react";

import ActionButton from "./ActionButton";
import TypewriterText from "./TypewriterText";

import { ZONES } from "../game/data/content";
import type {
    StoryChoice,
    StoryNode
} from "../game/types";
import { GAME_CONSTANTS } from "../config/constants";


interface Props {

    node: StoryNode;

    availableChoices: StoryChoice[];

    lockedChoices: StoryChoice[];

    onConfirmChoice: (choice: StoryChoice) => void;

}


export default function StoryPanel({
    node,
    availableChoices,
    lockedChoices,
    onConfirmChoice
}: Props) {

    const zoneAccent = ZONES[node.zoneId].accent;

    const [hasFinishedNarrative, setHasFinishedNarrative] =
        useState(false);

    const [selectedChoice, setSelectedChoice] =
        useState<StoryChoice | null>(null);

    const [hasFinishedResponse, setHasFinishedResponse] =
        useState(false);


    const finishNarrative = useCallback(() => {

        setHasFinishedNarrative(true);

    }, []);


    const finishResponse = useCallback(() => {

        setHasFinishedResponse(true);

    }, []);


    function selectChoice(choice: StoryChoice) {

        setSelectedChoice(choice);
        setHasFinishedResponse(false);

    }


    return (

        <section
            className={`story-panel story-panel--${zoneAccent}`}
        >

            {
                node.art && (

                    <pre
                        className="zone-art"
                        aria-hidden="true"
                    >
                        {node.art.join("\n")}
                    </pre>

                )
            }


            {
                node.subtitle && (

                    <p className="story-subtitle">
                        {node.subtitle}
                    </p>

                )
            }


            <TypewriterText
                key={node.id}
                lines={node.text}
                onComplete={finishNarrative}
                characterDelay={
                    GAME_CONSTANTS.TYPEWRITER_CHARACTER_DELAY_MS
                }
            />


            {
                hasFinishedNarrative && (

                    <div className="story-interaction">

                        <div className="story-choices">

                            {
                                availableChoices.map((choice) => (

                                    <div
                                        className="story-choice"
                                        key={choice.id}
                                    >

                                        <ActionButton
                                            onClick={() => {

                                                selectChoice(choice);

                                            }}
                                        >
                                            {choice.label}
                                        </ActionButton>

                                        {
                                            choice.hint && (

                                                <p className="choice-hint">
                                                    {choice.hint}
                                                </p>

                                            )
                                        }

                                    </div>

                                ))
                            }

                            {
                                lockedChoices.map((choice) => (

                                    <div
                                        className="story-choice choice-locked"
                                        key={choice.id}
                                    >

                                        <ActionButton
                                            disabled
                                            onClick={() => undefined}
                                            title={choice.hint}
                                        >
                                            {choice.label}
                                        </ActionButton>

                                        <p className="choice-hint">
                                            {choice.hint ?? "Something is still missing."}
                                        </p>

                                    </div>

                                ))
                            }

                        </div>


                        <div className="story-response">

                            {
                                selectedChoice && (

                                    <section
                                        className="choice-response"
                                        key={selectedChoice.id}
                                        aria-live="polite"
                                    >

                                        <p className="response-label">
                                            THE WORLD RESPONDS
                                        </p>


                                        <TypewriterText
                                            lines={selectedChoice.response}
                                            onComplete={finishResponse}
                                            characterDelay={
                                                GAME_CONSTANTS.TYPEWRITER_CHARACTER_DELAY_MS
                                            }
                                        />


                                        {
                                            hasFinishedResponse && (

                                                <ActionButton
                                                    onClick={() => {

                                                        onConfirmChoice(
                                                            selectedChoice
                                                        );

                                                    }}
                                                >
                                                    Continue
                                                </ActionButton>

                                            )
                                        }

                                    </section>

                                )
                            }

                        </div>

                    </div>

                )
            }

        </section>

    );

}
