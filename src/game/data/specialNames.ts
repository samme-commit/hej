import type { Choice } from "../types";


interface SpecialName {

    memoryId: string;

    choice: Choice;

}


const specialNames: Record<string, SpecialName> = {

    arlen: {

        memoryId: "the_ashen_gate",

        choice: {
            id: "remember_ashen_gate",
            text: "Speak to the Fog",
            action: "remember_ashen_gate"
        }

    },


    edric: {

        memoryId: "the_blacksmiths_oath",

        choice: {
            id: "remember_blacksmith_oath",
            text: "Listen for the Hammer",
            action: "remember_blacksmith_oath"
        }

    }

};


export function getSpecialOpeningChoices(
    playerName: string,
    memories: string[]
): Choice[] {

    const specialName =
        specialNames[playerName.trim().toLowerCase()];


    if (!specialName || memories.includes(specialName.memoryId)) {

        return [];

    }


    return [specialName.choice];

}
