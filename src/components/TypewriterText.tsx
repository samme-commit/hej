import {
    useEffect,
    useMemo,
    useState
} from "react";
import type { KeyboardEvent } from "react";


interface Props {

    lines: string[];

    onComplete: () => void;

    characterDelay?: number;

}


export default function TypewriterText({
    lines,
    onComplete,
    characterDelay = 18
}: Props) {

    const fullText = useMemo(
        () => lines.join("\n"),
        [lines]
    );

    const [characterCount, setCharacterCount] =
        useState(0);


    const isComplete =
        characterCount >= fullText.length;


    useEffect(() => {

        if (isComplete) {

            onComplete();

            return;

        }


        const timeout = window.setTimeout(() => {

            setCharacterCount((currentCount) =>
                currentCount + 1
            );

        }, characterDelay);


        return () => {

            window.clearTimeout(timeout);

        };

    }, [
        characterCount,
        characterDelay,
        isComplete,
        onComplete
    ]);


    const visibleLines =
        fullText
            .slice(0, characterCount)
            .split("\n");


    function revealAll() {

        if (!isComplete) {

            setCharacterCount(fullText.length);

        }

    }


    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();
            revealAll();

        }

    }


    return (

        <div
            className={
                "scene-text typewriter-text " +
                (!isComplete ? "typewriter-text-active" : "")
            }
            onClick={revealAll}
            onKeyDown={handleKeyDown}
            role={!isComplete ? "button" : undefined}
            tabIndex={!isComplete ? 0 : undefined}
            title={!isComplete ? "Click to reveal text" : undefined}
        >

            {visibleLines.map((line, index) => (

                <p key={index}>
                    {line}
                    {
                        index === visibleLines.length - 1 &&
                        !isComplete && (
                            <span
                                className="typewriter-cursor"
                                aria-hidden="true"
                            >
                                ▌
                            </span>
                        )
                    }
                </p>

            ))}

        </div>

    );

}
