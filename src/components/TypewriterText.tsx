import {
    useEffect,
    useMemo,
    useState
} from "react";


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


    return (

        <div className="scene-text typewriter-text">

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
