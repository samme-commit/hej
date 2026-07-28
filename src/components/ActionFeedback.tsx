import {
    useCallback,
    useState
} from "react";

import TypewriterText from "./TypewriterText";

import type { StoryEvent } from "../game/types/events";
import { GAME_CONSTANTS } from "../config/constants";


interface Props {
    event: StoryEvent;
    onContinue: () => void;
}


export default function ActionFeedback({
    event,
    onContinue
}: Props) {

    const [hasFinishedTyping, setHasFinishedTyping] =
        useState(false);


    const finishTyping = useCallback(() => {

        setHasFinishedTyping(true);

    }, []);

    return (

        <section
            className="action-feedback"
            aria-live="polite"
        >

            <h2 className="story-event-title">
                {event.title}
            </h2>


            <div className="story-event-text">

                <TypewriterText
                    lines={event.text}
                    onComplete={finishTyping}
                    characterDelay={
                        GAME_CONSTANTS.TYPEWRITER_CHARACTER_DELAY_MS
                    }
                />

            </div>

            {
                hasFinishedTyping && (

                    <button
                        className="continue-button"
                        onClick={onContinue}
                    >
                        {event.continueText ?? "Continue"}
                    </button>

                )
            }


        </section>

    );
}
