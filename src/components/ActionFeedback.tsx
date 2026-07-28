import type { StoryEvent } from "../game/types/events";


interface Props {
    event: StoryEvent;
    onContinue: () => void;
}


export default function ActionFeedback({
    event,
    onContinue
}: Props) {

    return (

        <section
            className="action-feedback"
            aria-live="polite"
        >

            <h2 className="story-event-title">
                {event.title}
            </h2>


            <div className="story-event-text">

                {event.text.map((line) => (

                    <p key={line}>
                        {line}
                    </p>

                ))}

            </div>


            <button
                className="continue-button"
                onClick={onContinue}
            >
                {event.continueText ?? "Continue"}
            </button>


        </section>

    );
}
