import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
    ENEMIES,
    ITEMS,
    QUESTS,
    STORY_NODES,
    ZONES
} from "../game/data/content";
import type {
    CombatState,
    EndingId,
    EnemyId,
    Equipment,
    InventoryEntry,
    ItemId,
    MemoryId,
    PlayerPath,
    PlayerStats,
    QuestId,
    QuestProgress,
    Requirement,
    SceneId,
    StoryChoice,
    StoryNodeId,
    ZoneId
} from "../game/types";
import type { StoryEvent } from "../game/types/events";


type CombatAction =
    | "attack"
    | "guard"
    | "memory"
    | "item";


export interface GameState {

    playerName: string;

    playerPath: PlayerPath;

    stats: PlayerStats;

    echoes: number;

    inventory: InventoryEntry[];

    equipment: Equipment;

    quickSlots: Array<ItemId | null>;

    memories: MemoryId[];

    defeatedEnemies: EnemyId[];

    quests: Partial<Record<QuestId, QuestProgress>>;

    flags: Record<string, boolean>;

    discoveredZones: ZoneId[];

    currentZoneId: ZoneId;

    currentNodeId: StoryNodeId;

    resolvedChoiceIds: string[];

    combat: CombatState | null;

    ending: EndingId | null;

    journalOpen: boolean;

    mapOpen: boolean;

    // Kept for the original prototype components while the full game replaces
    // their route. They are deliberately excluded from persisted state.
    location: ZoneId;

    currentScene: SceneId;

    activeStoryEvent: StoryEvent | null;

    startNewGame: (name: string) => void;

    resetGame: () => void;

    resolveChoice: (choice: StoryChoice) => void;

    travelToZone: (zoneId: ZoneId) => void;

    runCombatAction: (action: CombatAction) => void;

    useQuickSlot: (slotIndex: number) => void;

    toggleJournal: () => void;

    toggleMap: () => void;

    closeOverlays: () => void;

    // Legacy actions
    discoverMemory: (memoryId: MemoryId) => void;

    addItem: (itemId: ItemId, quantity?: number) => void;

    setPlayerName: (name: string) => void;

    setPlayerPath: (path: PlayerPath) => void;

    updateStats: (stats: Partial<PlayerStats>) => void;

    setActiveStoryEvent: (event: StoryEvent | null) => void;

    changeScene: (scene: SceneId) => void;

}


function initialState() {

    return {

        playerName: "",

        playerPath: null as PlayerPath,

        stats: {
            currentHealth: 100,
            maxHealth: 100,
            strength: 0,
            knowledge: 0,
            awareness: 0
        },

        echoes: 0,

        inventory: [] as InventoryEntry[],

        equipment: {
            weapon: null,
            charm: null
        } as Equipment,

        quickSlots: [
            null,
            null,
            null,
            null
        ] as Array<ItemId | null>,

        memories: [] as MemoryId[],

        defeatedEnemies: [] as EnemyId[],

        quests: {} as Partial<Record<QuestId, QuestProgress>>,

        flags: {} as Record<string, boolean>,

        discoveredZones: ["forgotten_road"] as ZoneId[],

        currentZoneId: "forgotten_road" as ZoneId,

        currentNodeId: "forgotten_road" as StoryNodeId,

        resolvedChoiceIds: [] as string[],

        combat: null as CombatState | null,

        ending: null as EndingId | null,

        journalOpen: false,

        mapOpen: false,

        location: "forgotten_road" as ZoneId,

        currentScene: "forgotten_road" as SceneId,

        activeStoryEvent: null as StoryEvent | null

    };

}


function addInventoryItem(
    inventory: InventoryEntry[],
    itemId: ItemId,
    quantity: number
): InventoryEntry[] {

    const existingEntry = inventory.find(
        (entry) => entry.itemId === itemId
    );


    if (!existingEntry) {

        return [
            ...inventory,
            {
                itemId,
                quantity
            }
        ];

    }


    return inventory.map((entry) =>
        entry.itemId === itemId
            ? {
                ...entry,
                quantity: entry.quantity + quantity
            }
            : entry
    );

}


function removeInventoryItem(
    inventory: InventoryEntry[],
    itemId: ItemId,
    quantity: number
): InventoryEntry[] {

    return inventory
        .map((entry) =>
            entry.itemId === itemId
                ? {
                    ...entry,
                    quantity: entry.quantity - quantity
                }
                : entry
        )
        .filter((entry) => entry.quantity > 0);

}


function clampStats(stats: PlayerStats): PlayerStats {

    const maxHealth = Math.max(1, stats.maxHealth);


    return {
        ...stats,
        maxHealth,
        currentHealth: Math.min(
            maxHealth,
            Math.max(0, stats.currentHealth)
        ),
        strength: Math.max(0, stats.strength),
        knowledge: Math.max(0, stats.knowledge),
        awareness: Math.max(0, stats.awareness)
    };

}


export function meetsRequirements(
    state: Pick<
        GameState,
        "memories" | "inventory" | "quests" | "playerPath" | "flags" | "defeatedEnemies"
    >,
    requirements: Requirement[] = []
): boolean {

    return requirements.every((requirement) => {

        switch (requirement.type) {

            case "no_path":
                return state.playerPath === null;

            case "enemy_defeated":
                return state.defeatedEnemies.includes(
                    requirement.enemyId
                );

            case "enemy_not_defeated":
                return !state.defeatedEnemies.includes(
                    requirement.enemyId
                );

            case "memory":
                return state.memories.includes(
                    requirement.memoryId
                );

            case "item":
                return state.inventory.some(
                    (entry) =>
                        entry.itemId === requirement.itemId &&
                        entry.quantity > 0
                );

            case "quest_step":
                return state.quests[
                    requirement.questId
                ]?.completedSteps.includes(
                    requirement.stepId
                ) ?? false;

            case "quest_complete":
                return state.quests[
                    requirement.questId
                ]?.status === "completed";

            case "path":
                return state.playerPath === requirement.path;

            case "flag":
                return state.flags[requirement.flag] === true;

        }

    });

}


export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({

            ...initialState(),


            startNewGame: (name) => {

                const cleanName = name.trim().slice(0, 24);


                set({
                    ...initialState(),
                    playerName: cleanName
                });

            },


            resetGame: () => {

                set(initialState());

            },


            resolveChoice: (choice) => {

                const state = get();


                if (
                    !meetsRequirements(state, choice.requirements) ||
                    (!choice.repeatable && state.resolvedChoiceIds.includes(
                        choice.id
                    ))
                ) {

                    return;

                }


                set((currentState) => {

                    let stats = {
                        ...currentState.stats
                    };

                    let inventory = [
                        ...currentState.inventory
                    ];

                    let equipment = {
                        ...currentState.equipment
                    };

                    const quickSlots = [
                        ...currentState.quickSlots
                    ];

                    const memories = [
                        ...currentState.memories
                    ];

                    let echoes = currentState.echoes;

                    const discoveredZones = [
                        ...currentState.discoveredZones
                    ];

                    const quests = {
                        ...currentState.quests
                    };

                    const flags = {
                        ...currentState.flags
                    };

                    let playerPath = currentState.playerPath;

                    let combat = currentState.combat;

                    let ending = currentState.ending;

                    const resolvedChoiceIds = choice.repeatable
                        ? currentState.resolvedChoiceIds
                        : currentState.resolvedChoiceIds.includes(choice.id)
                            ? currentState.resolvedChoiceIds
                            : [
                                ...currentState.resolvedChoiceIds,
                                choice.id
                            ];


                    for (const effect of choice.effects ?? []) {

                        if (effect.type === "set_path") {

                            playerPath = effect.path;

                        }


                        if (effect.type === "add_stat") {

                            stats = {
                                ...stats,
                                [effect.stat]: stats[effect.stat] +
                                    effect.amount
                            };

                        }


                        if (effect.type === "add_item") {

                            const quantity = effect.quantity ?? 1;

                            inventory = addInventoryItem(
                                inventory,
                                effect.itemId,
                                quantity
                            );

                            const item = ITEMS[effect.itemId];


                            if (effect.equip && item.slot) {

                                equipment = {
                                    ...equipment,
                                    [item.slot]: effect.itemId
                                };

                            }


                            if (effect.quickSlot !== undefined) {

                                quickSlots[effect.quickSlot] =
                                    effect.itemId;

                            }

                        }


                        if (effect.type === "remove_item") {

                            inventory = removeInventoryItem(
                                inventory,
                                effect.itemId,
                                effect.quantity ?? 1
                            );

                        }


                        if (effect.type === "add_memory") {

                            if (!memories.includes(effect.memoryId)) {

                                memories.push(effect.memoryId);
                                echoes += 1;

                            }

                        }


                        if (effect.type === "add_echoes") {

                            echoes += effect.amount;

                        }


                        if (effect.type === "discover_zone") {

                            if (!discoveredZones.includes(effect.zoneId)) {

                                discoveredZones.push(effect.zoneId);

                            }

                        }


                        if (effect.type === "activate_quest") {

                            const existingQuest = quests[effect.questId];

                            quests[effect.questId] = {
                                status: existingQuest?.status === "completed"
                                    ? "completed"
                                    : "active",
                                completedSteps:
                                    existingQuest?.completedSteps ?? []
                            };

                        }


                        if (effect.type === "advance_quest") {

                            const existingQuest = quests[effect.questId] ?? {
                                status: "active" as const,
                                completedSteps: []
                            };

                            const completedSteps =
                                existingQuest.completedSteps.includes(
                                    effect.stepId
                                )
                                    ? existingQuest.completedSteps
                                    : [
                                        ...existingQuest.completedSteps,
                                        effect.stepId
                                    ];

                            const quest = QUESTS[effect.questId];

                            quests[effect.questId] = {
                                status: completedSteps.length >=
                                    quest.steps.length
                                    ? "completed"
                                    : "active",
                                completedSteps
                            };

                        }


                        if (effect.type === "set_flag") {

                            flags[effect.flag] = effect.value ?? true;

                        }


                        if (effect.type === "start_combat") {

                            const enemy = ENEMIES[effect.enemyId];

                            combat = {
                                enemyId: effect.enemyId,
                                currentHealth: enemy.maxHealth,
                                log: [
                                    `${enemy.name} emerges from the forgotten dark.`
                                ],
                                isDefending: false,
                                victoryNodeId: effect.victoryNodeId,
                                defeatNodeId: effect.defeatNodeId
                            };

                        }


                        if (effect.type === "set_ending") {

                            ending = effect.endingId;

                        }

                    }


                    const nextNodeId = choice.nextNodeId ??
                        currentState.currentNodeId;


                    const nextZoneId =
                        STORY_NODES[nextNodeId]?.zoneId ??
                        currentState.currentZoneId;


                    return {
                        playerPath,
                        stats: clampStats(stats),
                        inventory,
                        equipment,
                        quickSlots,
                        memories,
                        echoes,
                        discoveredZones,
                        quests,
                        flags,
                        combat,
                        ending,
                        resolvedChoiceIds,
                        currentNodeId: nextNodeId,
                        currentScene: nextNodeId,
                        currentZoneId: nextZoneId,
                        location: nextZoneId
                    };

                });

            },


            travelToZone: (zoneId) => {

                const state = get();


                if (!state.discoveredZones.includes(zoneId) || state.combat) {

                    return;

                }


                const zone = ZONES[zoneId];


                set({
                    currentZoneId: zoneId,
                    location: zoneId,
                    currentNodeId: zone.entryNodeId,
                    currentScene: zone.entryNodeId,
                    mapOpen: false
                });

            },


            runCombatAction: (action) => {

                const state = get();

                const combat = state.combat;


                if (!combat) {

                    return;

                }


                const enemy = ENEMIES[combat.enemyId];

                const weaponPower = state.equipment.weapon
                    ? ITEMS[state.equipment.weapon].power ?? 0
                    : 0;

                const charmPower = state.equipment.charm
                    ? ITEMS[state.equipment.charm].power ?? 0
                    : 0;

                const equippedPower = weaponPower + charmPower;

                let playerHealth = state.stats.currentHealth;

                let enemyHealth = combat.currentHealth;

                let inventory = [
                    ...state.inventory
                ];

                let isDefending = false;

                const log = [
                    ...combat.log
                ];


                if (action === "attack") {

                    const damage = Math.max(
                        2,
                        3 + equippedPower + state.stats.strength
                    );

                    enemyHealth -= damage;

                    log.push(
                        `You strike for ${damage} damage.`
                    );

                }


                if (action === "guard") {

                    isDefending = true;

                    log.push(
                        "You steady yourself against what comes next."
                    );

                }


                if (action === "memory") {

                    if (state.playerPath === "warrior") {

                        const damage = 6 +
                            state.stats.strength * 2 +
                            charmPower;

                        enemyHealth -= damage;

                        log.push(
                            `The Last Battle returns: ${damage} damage.`
                        );

                    }

                    if (state.playerPath === "keeper") {

                        const damage = 3 +
                            state.stats.knowledge * 2 +
                            charmPower;

                        const healing = 5 + state.stats.knowledge;

                        enemyHealth -= damage;

                        playerHealth = Math.min(
                            state.stats.maxHealth,
                            playerHealth + healing
                        );

                        isDefending = true;

                        log.push(
                            `A Memory Ward restores ${healing} health and reflects ${damage} damage.`
                        );

                    }

                    if (state.playerPath === "explorer") {

                        const damage = 4 +
                            state.stats.awareness * 2 +
                            charmPower;

                        enemyHealth -= damage;

                        isDefending = true;

                        log.push(
                            `You find an opening: ${damage} damage.`
                        );

                    }

                }


                if (action === "item") {

                    const tonicId = state.quickSlots.find((itemId) =>
                        itemId !== null &&
                        ITEMS[itemId].kind === "consumable" &&
                        state.inventory.some(
                            (entry) =>
                                entry.itemId === itemId &&
                                entry.quantity > 0
                        )
                    );


                    if (!tonicId) {

                        return;

                    }


                    const tonic = ITEMS[tonicId];

                    const healing = tonic.healAmount ?? 0;

                    playerHealth = Math.min(
                        state.stats.maxHealth,
                        playerHealth + healing
                    );

                    inventory = removeInventoryItem(
                        inventory,
                        tonicId,
                        1
                    );

                    log.push(
                        `You drink ${tonic.name} and recover ${healing} health.`
                    );

                }


                if (enemyHealth <= 0) {

                    log.push(`${enemy.name} loses its hold on this world.`);


                    set({
                        combat: null,
                        echoes: state.echoes + 2,
                        defeatedEnemies: state.defeatedEnemies.includes(
                            combat.enemyId
                        )
                            ? state.defeatedEnemies
                            : [
                                ...state.defeatedEnemies,
                                combat.enemyId
                            ],
                        inventory,
                        currentNodeId: combat.victoryNodeId,
                        currentScene: combat.victoryNodeId,
                        currentZoneId: STORY_NODES[
                            combat.victoryNodeId
                        ].zoneId,
                        location: STORY_NODES[
                            combat.victoryNodeId
                        ].zoneId,
                        stats: {
                            ...state.stats,
                            currentHealth: playerHealth
                        }
                    });

                    return;

                }


                const enemyDamage = Math.max(
                    1,
                    enemy.damage - Math.floor(state.stats.awareness / 3)
                );

                const receivedDamage = isDefending
                    ? Math.ceil(enemyDamage / 2)
                    : enemyDamage;

                playerHealth -= receivedDamage;

                log.push(
                    `${enemy.name} answers for ${receivedDamage} damage.`
                );


                if (playerHealth <= 0) {

                    set({
                        combat: null,
                        inventory,
                        currentNodeId: combat.defeatNodeId,
                        currentScene: combat.defeatNodeId,
                        currentZoneId: STORY_NODES[
                            combat.defeatNodeId
                        ].zoneId,
                        location: STORY_NODES[
                            combat.defeatNodeId
                        ].zoneId,
                        stats: {
                            ...state.stats,
                            currentHealth: Math.max(
                                1,
                                Math.floor(state.stats.maxHealth * 0.45)
                            )
                        }
                    });

                    return;

                }


                set({
                    combat: {
                        ...combat,
                        currentHealth: enemyHealth,
                        isDefending,
                        log: log.slice(-6)
                    },
                    inventory,
                    stats: {
                        ...state.stats,
                        currentHealth: playerHealth
                    }
                });

            },


            useQuickSlot: (slotIndex) => {

                const state = get();


                if (state.combat) {

                    return;

                }

                const itemId = state.quickSlots[slotIndex];


                if (!itemId) {

                    return;

                }


                const item = ITEMS[itemId];


                if (item.kind !== "consumable" || !item.healAmount) {

                    return;

                }


                const inventoryEntry = state.inventory.find(
                    (entry) => entry.itemId === itemId
                );


                if (!inventoryEntry) {

                    return;

                }


                set({
                    inventory: removeInventoryItem(
                        state.inventory,
                        itemId,
                        1
                    ),
                    stats: {
                        ...state.stats,
                        currentHealth: Math.min(
                            state.stats.maxHealth,
                            state.stats.currentHealth + item.healAmount
                        )
                    }
                });

            },


            toggleJournal: () => {

                set((state) => ({
                    journalOpen: !state.journalOpen,
                    mapOpen: false
                }));

            },


            toggleMap: () => {

                set((state) => ({
                    mapOpen: !state.mapOpen,
                    journalOpen: false
                }));

            },


            closeOverlays: () => {

                set({
                    journalOpen: false,
                    mapOpen: false
                });

            },


            discoverMemory: (memoryId) => {

                set((state) => {

                    if (state.memories.includes(memoryId)) {

                        return state;

                    }


                    return {
                        memories: [
                            ...state.memories,
                            memoryId
                        ],
                        echoes: state.echoes + 1
                    };

                });

            },


            addItem: (itemId, quantity = 1) => {

                set((state) => ({
                    inventory: addInventoryItem(
                        state.inventory,
                        itemId,
                        quantity
                    )
                }));

            },


            setPlayerName: (name) => {

                set({
                    playerName: name.trim().slice(0, 24)
                });

            },


            setPlayerPath: (path) => {

                set({
                    playerPath: path
                });

            },


            updateStats: (updates) => {

                set((state) => ({
                    stats: clampStats({
                        ...state.stats,
                        ...updates
                    })
                }));

            },


            setActiveStoryEvent: (event) => {

                set({
                    activeStoryEvent: event
                });

            },


            changeScene: (scene) => {

                set({
                    currentScene: scene,
                    currentNodeId: scene as StoryNodeId
                });

            }

        }),
        {
            name: "the-forgotten-road-save",
            version: 2,
            partialize: (state) => ({
                playerName: state.playerName,
                playerPath: state.playerPath,
                stats: state.stats,
                echoes: state.echoes,
                inventory: state.inventory,
                equipment: state.equipment,
                quickSlots: state.quickSlots,
                memories: state.memories,
                defeatedEnemies: state.defeatedEnemies,
                quests: state.quests,
                flags: state.flags,
                discoveredZones: state.discoveredZones,
                currentZoneId: state.currentZoneId,
                currentNodeId: state.currentNodeId,
                resolvedChoiceIds: state.resolvedChoiceIds,
                ending: state.ending,
                location: state.location,
                currentScene: state.currentScene
            })
        }
    )
);
