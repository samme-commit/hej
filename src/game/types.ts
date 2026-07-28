export type SceneId =
    | "forgotten_road"
    | "silent_forest";


export type GameAction =
    | "choose_sword"
    | "choose_stone"
    | "choose_road"
    | "remember_ashen_gate"
    | "remember_blacksmith_oath"
    | "explore_forest";


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


export type PlayerPath =
    | "warrior"
    | "keeper"
    | "explorer"
    | null;
