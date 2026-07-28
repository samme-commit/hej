import ActionButton from "./ActionButton";
import HealthBar from "./HealthBar";

import {
    ENEMIES,
    ITEMS
} from "../game/data/content";
import { useGameStore } from "../stores/gameStore";


const ENEMY_BAR_SEGMENTS = 12;


function renderEnemyHealth(
    currentHealth: number,
    maxHealth: number
) {

    const filledSegments = Math.max(
        0,
        Math.min(
            ENEMY_BAR_SEGMENTS,
            Math.round(
                (currentHealth / maxHealth) * ENEMY_BAR_SEGMENTS
            )
        )
    );


    return `${"█".repeat(filledSegments)}${
        "░".repeat(ENEMY_BAR_SEGMENTS - filledSegments)
    }`;

}


export default function CombatEncounter() {

    const combat =
        useGameStore(
            (state) => state.combat
        );

    const stats =
        useGameStore(
            (state) => state.stats
        );

    const playerPath =
        useGameStore(
            (state) => state.playerPath
        );

    const runCombatAction =
        useGameStore(
            (state) => state.runCombatAction
        );

    const quickSlots =
        useGameStore(
            (state) => state.quickSlots
        );

    const inventory =
        useGameStore(
            (state) => state.inventory
        );


    if (!combat || !playerPath) {

        return null;

    }


    const enemy = ENEMIES[combat.enemyId];

    const memoryActionLabel = {
        warrior: "Last Battle",
        keeper: "Memory Ward",
        explorer: "Find Opening"
    }[playerPath];

    const tonicId = quickSlots.find((itemId) =>
        itemId !== null &&
        ITEMS[itemId].kind === "consumable" &&
        inventory.some(
            (entry) =>
                entry.itemId === itemId &&
                entry.quantity > 0
        )
    );

    const tonic = tonicId
        ? ITEMS[tonicId]
        : null;


    return (

        <section className="combat-encounter">

            <div className="combat-combatants">

                <section className="combatant combatant-player">

                    <p className="combatant-label">
                        YOU
                    </p>


                    <HealthBar
                        currentHealth={stats.currentHealth}
                        maxHealth={stats.maxHealth}
                    />

                </section>


                <section className="combatant combatant-enemy">

                    <pre
                        className="enemy-art"
                        aria-hidden="true"
                    >
                        {enemy.art.join("\n")}
                    </pre>


                    <p className="combatant-label">
                        {enemy.name}
                    </p>


                    <p className="enemy-health">
                        {renderEnemyHealth(
                            combat.currentHealth,
                            enemy.maxHealth
                        )}

                        <span>
                            {combat.currentHealth} / {enemy.maxHealth}
                        </span>
                    </p>

                </section>

            </div>


            <p className="combat-description">
                {enemy.description}
            </p>


            <section
                className="combat-log"
                aria-live="polite"
            >
                {
                    combat.log.map((entry, index) => (

                        <p key={`${entry}-${index}`}>
                            {"> "}{entry}
                        </p>

                    ))
                }

            </section>


            <div className="combat-actions">

                <ActionButton
                    onClick={() => {
                        runCombatAction("attack");
                    }}
                >
                    Attack
                </ActionButton>


                <ActionButton
                    onClick={() => {
                        runCombatAction("guard");
                    }}
                >
                    Guard
                </ActionButton>


                <ActionButton
                    onClick={() => {
                        runCombatAction("memory");
                    }}
                >
                    {memoryActionLabel}
                </ActionButton>


                <ActionButton
                    disabled={!tonic}
                    onClick={() => {
                        runCombatAction("item");
                    }}
                    title={
                        tonic
                            ? `${tonic.name}: restore ${tonic.healAmount ?? 0} health.`
                            : "No usable tonic in your quick slots."
                    }
                >
                    {tonic
                        ? `Use ${tonic.name}`
                        : "No Tonic"}
                </ActionButton>

            </div>

        </section>

    );

}
