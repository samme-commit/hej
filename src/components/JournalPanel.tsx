import {
    ITEMS,
    MEMORIES,
    QUESTS
} from "../game/data/content";
import { useGameStore } from "../stores/gameStore";


export default function JournalPanel() {

    const memories =
        useGameStore(
            (state) => state.memories
        );

    const quests =
        useGameStore(
            (state) => state.quests
        );

    const inventory =
        useGameStore(
            (state) => state.inventory
        );

    const stats =
        useGameStore(
            (state) => state.stats
        );

    const equipment =
        useGameStore(
            (state) => state.equipment
        );

    const closeOverlays =
        useGameStore(
            (state) => state.closeOverlays
        );


    const activeQuests = Object.values(QUESTS).filter(
        (quest) => quests[quest.id]?.status === "active" ||
            quests[quest.id]?.status === "completed"
    );


    return (

        <aside
            className="overlay-panel journal-panel"
            aria-label="Journal"
        >

            <header className="overlay-heading">

                <h2>
                    JOURNAL
                </h2>

                <button
                    className="overlay-close"
                    onClick={closeOverlays}
                >
                    [Close]
                </button>

            </header>


            <section className="journal-section">

                <h3>
                    THREADS
                </h3>

                {
                    activeQuests.length > 0
                        ? activeQuests.map((quest) => {

                            const progress = quests[quest.id];


                            return (

                                <article
                                    className="journal-entry"
                                    key={quest.id}
                                >

                                    <p className="journal-title">
                                        {progress?.status === "completed"
                                            ? "[x]"
                                            : "[ ]"} {quest.title}
                                    </p>

                                    <p>
                                        {quest.description}
                                    </p>

                                    {
                                        quest.steps.map((step) => (

                                            <p
                                                className="journal-step"
                                                key={step.id}
                                            >
                                                {
                                                    progress?.completedSteps.includes(
                                                        step.id
                                                    )
                                                        ? "[x]"
                                                        : "[ ]"
                                                } {step.text}
                                            </p>

                                        ))
                                    }

                                </article>

                            );

                        })
                        : (

                            <p className="journal-empty">
                                No threads have found you yet.
                            </p>

                        )
                }

            </section>


            <section className="journal-section">

                <h3>
                    MEMORIES
                </h3>

                {
                    memories.length > 0
                        ? memories.map((memoryId) => {

                            const memory = MEMORIES[memoryId];


                            return (

                                <article
                                    className="journal-entry memory-entry"
                                    key={memoryId}
                                >

                                    <p className="journal-title">
                                        {memory.title}
                                    </p>

                                    <p>
                                        {memory.text}
                                    </p>

                                </article>

                            );

                        })
                        : (

                            <p className="journal-empty">
                                Nothing has returned yet.
                            </p>

                        )
                }

            </section>


            <section className="journal-section journal-columns">

                <div>

                    <h3>
                        PACK
                    </h3>

                    {
                        inventory.length > 0
                            ? inventory.map((entry) => (

                                <p
                                    className="journal-step"
                                    key={entry.itemId}
                                    title={ITEMS[entry.itemId].description}
                                >
                                    {ITEMS[entry.itemId].name}
                                    {entry.quantity > 1
                                        ? ` x${entry.quantity}`
                                        : ""}
                                </p>

                            ))
                            : (

                                <p className="journal-empty">
                                    Your pack is empty.
                                </p>

                            )
                    }


                    <h3>
                        EQUIPPED
                    </h3>

                    <p className="journal-step">
                        Weapon: {equipment.weapon
                            ? ITEMS[equipment.weapon].name
                            : "None"}
                    </p>

                    <p className="journal-step">
                        Charm: {equipment.charm
                            ? `${ITEMS[equipment.charm].name} (+${
                                ITEMS[equipment.charm].power ?? 0
                            } Resolve)`
                            : "None"}
                    </p>

                </div>


                <div>

                    <h3>
                        SELF
                    </h3>

                    <p className="journal-step">
                        Strength: {stats.strength}
                    </p>

                    <p className="journal-step">
                        Knowledge: {stats.knowledge}
                    </p>

                    <p className="journal-step">
                        Awareness: {stats.awareness}
                    </p>

                </div>

            </section>

        </aside>

    );

}
