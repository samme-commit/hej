import {
    useEffect,
    useRef,
    useState
} from "react";

import CombatEncounter from "./CombatEncounter";
import EndingScreen from "./EndingScreen";
import GameLayout from "./GameLayout";
import JournalPanel from "./JournalPanel";
import MapPanel from "./MapPanel";
import SceneTransition from "./SceneTransition";
import StoryPanel from "./StoryPanel";
import UtilityNav from "./UtilityNav";

import {
    ENDINGS,
    STORY_NODES
} from "../game/data/content";
import type { StoryChoice } from "../game/types";
import {
    meetsRequirements,
    useGameStore
} from "../stores/gameStore";
import { GAME_CONSTANTS } from "../config/constants";
import { getSpecialOpeningChoices } from "../game/data/specialNames";


export default function GameExperience() {

    const currentNodeId =
        useGameStore(
            (state) => state.currentNodeId
        );

    const playerPath =
        useGameStore(
            (state) => state.playerPath
        );

    const combat =
        useGameStore(
            (state) => state.combat
        );

    const ending =
        useGameStore(
            (state) => state.ending
        );

    const playerName =
        useGameStore(
            (state) => state.playerName
        );

    const memories =
        useGameStore(
            (state) => state.memories
        );

    const resolvedChoiceIds =
        useGameStore(
            (state) => state.resolvedChoiceIds
        );

    const journalOpen =
        useGameStore(
            (state) => state.journalOpen
        );

    const mapOpen =
        useGameStore(
            (state) => state.mapOpen
        );

    const resolveChoice =
        useGameStore(
            (state) => state.resolveChoice
        );

    const resetGame =
        useGameStore(
            (state) => state.resetGame
        );

    const flags =
        useGameStore(
            (state) => state.flags
        );

    const toggleJournal =
        useGameStore(
            (state) => state.toggleJournal
        );

    const toggleMap =
        useGameStore(
            (state) => state.toggleMap
        );

    const triggerQuickSlot =
        useGameStore(
            (state) => state.useQuickSlot
        );

    const gameState = useGameStore();

    const [transitioning, setTransitioning] =
        useState(false);

    const [storyRevision, setStoryRevision] =
        useState(0);

    const timeouts = useRef<number[]>([]);

    const node = STORY_NODES[currentNodeId];


    useEffect(() => {

        const pendingTimeouts = timeouts.current;

        return () => {

            pendingTimeouts.forEach((timeout) => {
                window.clearTimeout(timeout);
            });

        };

    }, []);


    useEffect(() => {

        function handleKeyDown(event: KeyboardEvent) {

            const target = event.target;

            if (
                target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement ||
                target instanceof HTMLSelectElement ||
                (target instanceof HTMLElement && target.isContentEditable)
            ) {

                return;

            }


            const key = event.key.toLowerCase();


            if (key === "j" && flags.journal_unlocked && !combat) {

                event.preventDefault();
                toggleJournal();

                return;

            }


            if (key === "m" && flags.map_unlocked && !combat) {

                event.preventDefault();
                toggleMap();

                return;

            }


            if ("1234".includes(event.key) && !combat) {

                triggerQuickSlot(Number(event.key) - 1);

            }

        }


        window.addEventListener("keydown", handleKeyDown);


        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [
        combat,
        flags.journal_unlocked,
        flags.map_unlocked,
        toggleJournal,
        toggleMap,
        triggerQuickSlot
    ]);


    function confirmChoice(choice: StoryChoice) {

        if (transitioning) {

            return;

        }


        setTransitioning(true);

        timeouts.current.push(
            window.setTimeout(() => {

                resolveChoice(choice);
                setStoryRevision((revision) => revision + 1);

            }, GAME_CONSTANTS.SCENE_TRANSITION_COVER_MS)
        );

        timeouts.current.push(
            window.setTimeout(() => {

                setTransitioning(false);

            }, GAME_CONSTANTS.SCENE_TRANSITION_DURATION_MS)
        );

    }


    function beginAgain() {

        resetGame();

    }


    if (ending) {

        return (

            <GameLayout title={ENDINGS[ending].title}>

                <SceneTransition active={transitioning} />

                <EndingScreen
                    ending={ENDINGS[ending]}
                    onNewGame={beginAgain}
                />

            </GameLayout>

        );

    }


    const unresolvedChoices = node.choices.filter((choice) =>
        choice.repeatable || !resolvedChoiceIds.includes(choice.id)
    );

    const availableChoices = [
        ...unresolvedChoices.filter((choice) =>
            meetsRequirements(gameState, choice.requirements)
        ),
        ...(
            node.id === "forgotten_road"
                && !playerPath
                ? getSpecialOpeningChoices(playerName, memories)
                : []
        )
    ];

    const lockedChoices = unresolvedChoices.filter((choice) =>
        !meetsRequirements(gameState, choice.requirements)
    );


    return (

        <GameLayout title={node.title}>

            <SceneTransition active={transitioning} />


            {
                playerPath && (

                    <UtilityNav
                        onNewGame={beginAgain}
                    />

                )
            }


            {
                combat
                    ? <CombatEncounter />
                    : (

                        <StoryPanel
                            availableChoices={availableChoices}
                            key={`${node.id}-${storyRevision}`}
                            lockedChoices={lockedChoices}
                            node={node}
                            onConfirmChoice={confirmChoice}
                        />

                    )
            }


            {journalOpen && <JournalPanel />}

            {mapOpen && <MapPanel />}

        </GameLayout>

    );

}
