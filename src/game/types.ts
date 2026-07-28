export type PlayerPath =
    | "warrior"
    | "keeper"
    | "explorer"
    | null;


export type ZoneId =
    | "forgotten_road"
    | "silent_forest"
    | "lost_camp"
    | "keepers_cairn"
    | "forgotten_city"
    | "old_library"
    | "empty_palace"
    | "memory_archive"
    | "ashen_gate";


export type StoryNodeId =
    | "forgotten_road"
    | "forgotten_guard"
    | "guard_after"
    | "broken_shrine"
    | "silent_trail"
    | "unknown_wanderer"
    | "forest_hub"
    | "lost_camp"
    | "nameless_survivor"
    | "rootbound_grove"
    | "rootbound_after"
    | "keepers_cairn"
    | "city_gate"
    | "forgotten_city"
    | "old_library"
    | "empty_palace"
    | "memory_archive"
    | "archive_after"
    | "ashen_gate"
    | "final_revelation"
    | "ending_restore"
    | "ending_preserve"
    | "ending_keeper"
    | "fallen_on_the_road"
    | "fallen_in_the_forest"
    | "fallen_in_the_archive"
    | "fallen_at_the_gate";


export type ItemId =
    | "broken_sword"
    | "memory_stone"
    | "trail_map"
    | "ashen_tonic"
    | "nameless_ring"
    | "forgotten_key"
    | "archive_seal"
    | "hollow_shard";


export type MemoryId =
    | "last_battle"
    | "voice_in_the_dark"
    | "place_that_should_not_exist"
    | "the_ashen_gate"
    | "the_blacksmiths_oath"
    | "the_guardians_oath"
    | "the_broken_inscription"
    | "the_lost_name"
    | "the_first_fear"
    | "the_silent_path"
    | "the_keepers_warning"
    | "the_great_forgetting"
    | "the_last_kings_silence"
    | "the_final_memory";


export type EnemyId =
    | "forgotten_guard"
    | "hollowborn"
    | "memory_wraith"
    | "hollow_remnant";


export type QuestId =
    | "name_without_a_past"
    | "letter_unsent"
    | "door_that_remembers"
    | "the_final_memory";


export type EndingId =
    | "restore_memory"
    | "preserve_forgetting"
    | "become_keeper";


export type EquipmentSlot =
    | "weapon"
    | "charm";


export type ItemKind =
    | "weapon"
    | "charm"
    | "consumable"
    | "key"
    | "memory";


export interface PlayerStats {

    currentHealth: number;

    maxHealth: number;

    strength: number;

    knowledge: number;

    awareness: number;

}


export interface InventoryEntry {

    itemId: ItemId;

    quantity: number;

}


export interface Equipment {

    weapon: ItemId | null;

    charm: ItemId | null;

}


export interface QuestProgress {

    status: "locked" | "active" | "completed";

    completedSteps: string[];

}


export interface CombatState {

    enemyId: EnemyId;

    currentHealth: number;

    log: string[];

    isDefending: boolean;

    victoryNodeId: StoryNodeId;

    defeatNodeId: StoryNodeId;

}


export interface ItemDefinition {

    id: ItemId;

    name: string;

    description: string;

    lore: string;

    kind: ItemKind;

    power?: number;

    healAmount?: number;

    slot?: EquipmentSlot;

}


export interface MemoryDefinition {

    id: MemoryId;

    title: string;

    text: string;

    chapter: string;

}


export interface EnemyDefinition {

    id: EnemyId;

    name: string;

    art: string[];

    maxHealth: number;

    damage: number;

    description: string;

}


export interface QuestDefinition {

    id: QuestId;

    title: string;

    description: string;

    steps: Array<{
        id: string;
        text: string;
    }>;

}


export interface ZoneDefinition {

    id: ZoneId;

    name: string;

    description: string;

    art: string[];

    entryNodeId: StoryNodeId;

    accent: "road" | "forest" | "memory" | "city" | "hollow";

}


export type Requirement =
    | {
        type: "no_path";
    }
    | {
        type: "enemy_defeated";
        enemyId: EnemyId;
    }
    | {
        type: "enemy_not_defeated";
        enemyId: EnemyId;
    }
    | {
        type: "memory";
        memoryId: MemoryId;
    }
    | {
        type: "item";
        itemId: ItemId;
    }
    | {
        type: "quest_step";
        questId: QuestId;
        stepId: string;
    }
    | {
        type: "quest_complete";
        questId: QuestId;
    }
    | {
        type: "path";
        path: Exclude<PlayerPath, null>;
    }
    | {
        type: "flag";
        flag: string;
    };


export type GameEffect =
    | {
        type: "set_path";
        path: Exclude<PlayerPath, null>;
    }
    | {
        type: "add_stat";
        stat: keyof PlayerStats;
        amount: number;
    }
    | {
        type: "add_item";
        itemId: ItemId;
        quantity?: number;
        equip?: boolean;
        quickSlot?: number;
    }
    | {
        type: "remove_item";
        itemId: ItemId;
        quantity?: number;
    }
    | {
        type: "add_memory";
        memoryId: MemoryId;
    }
    | {
        type: "add_echoes";
        amount: number;
    }
    | {
        type: "discover_zone";
        zoneId: ZoneId;
    }
    | {
        type: "activate_quest";
        questId: QuestId;
    }
    | {
        type: "advance_quest";
        questId: QuestId;
        stepId: string;
    }
    | {
        type: "set_flag";
        flag: string;
        value?: boolean;
    }
    | {
        type: "start_combat";
        enemyId: EnemyId;
        victoryNodeId: StoryNodeId;
        defeatNodeId: StoryNodeId;
    }
    | {
        type: "set_ending";
        endingId: EndingId;
    };


export interface StoryChoice {

    id: string;

    label: string;

    hint?: string;

    response: string[];

    nextNodeId?: StoryNodeId;

    requirements?: Requirement[];

    effects?: GameEffect[];

    // Most narrative decisions are permanent. A retry choice after defeat is
    // intentionally repeatable so the player can continue the journey.
    repeatable?: boolean;

}


export interface StoryNode {

    id: StoryNodeId;

    zoneId: ZoneId;

    title: string;

    subtitle?: string;

    art?: string[];

    text: string[];

    choices: StoryChoice[];

}


export interface EndingDefinition {

    id: EndingId;

    title: string;

    epilogue: string[];

    conditionalEpilogue?: Array<{
        requirements: Requirement[];
        lines: string[];
    }>;

}


// Legacy scene contracts are kept while the original prototype files remain
// in the repository. The full game uses StoryNode above.
export type SceneId =
    | StoryNodeId
    | "silent_forest";


export type GameAction =
    | "choose_sword"
    | "choose_stone"
    | "choose_road"
    | "remember_ashen_gate"
    | "remember_blacksmith_oath"
    | "confront_forgotten_guard"
    | "read_broken_shrine"
    | "follow_forest_voice";


export interface Choice {

    id: string;

    text: string;

    action: GameAction;

}


export interface Scene {

    id: SceneId;

    title: string;

    text: string[];

    choices: Choice[];

}
