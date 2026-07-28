import type {
    MemoryId,
    StoryChoice
} from "../types";


interface SpecialName {

    memoryId: MemoryId;

    choice: StoryChoice;

}


const specialNames: Record<string, SpecialName> = {

    arlen: {

        memoryId: "the_ashen_gate",

        choice: {
            id: "speak_arlen",
            label: "Speak to the Fog: \"Arlen.\"",
            hint: "A name the road refuses to forget.",
            response: [
                "The fog stills around you.",
                "For one breath, an ash-covered gate rises where the road should be.",
                "A voice beyond it says your name as if it is both a welcome and a warning.",
                "Then the gate is gone."
            ],
            effects: [
                { type: "add_memory", memoryId: "the_ashen_gate" },
                { type: "add_stat", stat: "awareness", amount: 1 },
                { type: "set_flag", flag: "name_arlen" }
            ]
        }

    },


    edric: {

        memoryId: "the_blacksmiths_oath",

        choice: {
            id: "listen_edric",
            label: "Listen for the Hammer",
            hint: "A promise survives somewhere in the ash.",
            response: [
                "A hammer falls once in the distance.",
                "You smell hot iron, rain, and a forge that should have been cold for centuries.",
                "Someone says: 'I will make it remember what it did.'",
                "The sound fades, but the oath remains."
            ],
            effects: [
                { type: "add_memory", memoryId: "the_blacksmiths_oath" },
                { type: "add_stat", stat: "strength", amount: 1 },
                { type: "set_flag", flag: "name_edric" }
            ]
        }

    }

};


export function getSpecialOpeningChoices(
    playerName: string,
    memories: MemoryId[]
): StoryChoice[] {

    const specialName =
        specialNames[playerName.trim().toLowerCase()];


    if (!specialName || memories.includes(specialName.memoryId)) {

        return [];

    }


    return [specialName.choice];

}
