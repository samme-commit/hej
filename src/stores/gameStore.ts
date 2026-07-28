import { create } from "zustand";

import type {
    PlayerPath,
    SceneId
} from "../game/types";
import type { StoryEvent } from "../game/types/events";


interface PlayerStats {

    health: number;

    strength: number;

    knowledge: number;

    awareness: number;

}


interface GameState {

    location: string;

    currentScene: SceneId;

    inventory: string[];

    memories: string[];

    echoes: number;

    playerName: string;

    playerPath: PlayerPath;

    stats: PlayerStats;

    activeStoryEvent: StoryEvent | null;


    discoverMemory: (
        memory: string
    ) => void;


    addItem: (
        item: string
    ) => void;


    setPlayerName: (
        name: string
    ) => void;


    setPlayerPath: (
        path: PlayerPath
    ) => void;


    updateStats: (
        stats: Partial<PlayerStats>
    ) => void;


    setActiveStoryEvent: (
        event: StoryEvent | null
    ) => void;


    changeScene: (
        scene: SceneId
    ) => void;

}



export const useGameStore = create<GameState>((set) => ({

    location: "forgotten_road",

    currentScene: "forgotten_road",


    inventory: [],

    memories: [],

    echoes: 0,


    playerName: "",


    playerPath: null,


    stats: {

        health: 100,

        strength: 0,

        knowledge: 0,

        awareness: 0

    },


    activeStoryEvent: null,


    discoverMemory: (memory) =>
        set((state) => ({

            memories: [
                ...state.memories,
                memory
            ],

            echoes: state.echoes + 1

        })),



    addItem: (item) =>
        set((state) => ({

            inventory: [
                ...state.inventory,
                item
            ]

        })),


    setPlayerName: (name) =>
        set({

            playerName: name

        }),



    setPlayerPath: (path) =>
        set({

            playerPath: path

        }),



    updateStats: (stats) =>
        set((state) => ({

            stats: {

                ...state.stats,

                ...stats

            }

        })),


    setActiveStoryEvent: (event) =>
        set({

            activeStoryEvent: event

        }),



    changeScene: (scene) =>
        set({

            currentScene: scene

        })

}));
