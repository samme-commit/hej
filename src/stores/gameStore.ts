import { create } from "zustand";

interface GameState {
    location: string;

    inventory: string[];

    memories: string[];

    echoes: number;

    discoverMemory: (memory: string) => void;
    addItem: (item: string) => void;
}


export const useGameStore = create<GameState>((set) => ({
    location: "forgotten_road",

    inventory: [],

    memories: [],

    echoes: 0,


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
        }))
}));