import { create } from "zustand";


type PlayerPath =
    | "warrior"
    | "keeper"
    | "explorer"
    | null;


interface PlayerStats {

    health: number;

    strength: number;

    knowledge: number;

    awareness: number;

}


interface GameState {

    location: string;

    currentScene: string;

    inventory: string[];

    memories: string[];

    echoes: number;

    playerPath: PlayerPath;

    stats: PlayerStats;


    discoverMemory: (
        memory: string
    ) => void;


    addItem: (
        item: string
    ) => void;


    setPlayerPath: (
        path: PlayerPath
    ) => void;


    updateStats: (
        stats: Partial<PlayerStats>
    ) => void;


    changeScene: (
        scene: string
    ) => void;

}



export const useGameStore = create<GameState>((set) => ({

    location: "forgotten_road",

    currentScene: "forgotten_road",


    inventory: [],

    memories: [],

    echoes: 0,


    playerPath: null,


    stats: {

        health: 100,

        strength: 0,

        knowledge: 0,

        awareness: 0

    },


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



    changeScene: (scene) =>
        set({

            currentScene: scene

        })

}));