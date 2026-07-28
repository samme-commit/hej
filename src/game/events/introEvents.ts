import type { StoryEvent } from "../types/events";


export const introEvents = {

    chooseSword: {

        id: "broken_sword_memory",

        title: "The Broken Sword",

        text: [

            "The moment your fingers close around the blade...",

            "A sharp pain shoots through your mind.",

            "You see a battlefield.",

            "You are not watching it.",

            "You are standing in it.",

            "Then the road returns."

        ],

        nextScene: "forgotten_guard"

    } satisfies StoryEvent,


    chooseStone: {

        id: "strange_stone_memory",

        title: "The Strange Stone",

        text: [

            "The stone is warm.",

            "It whispers a name.",

            "You cannot remember whose.",

            "When you open your eyes, the fog has thinned."

        ],

        nextScene: "broken_shrine"

    } satisfies StoryEvent,


    chooseRoad: {

        id: "silent_road_memory",

        title: "The Silent Road",

        text: [

            "The road stretches endlessly.",

            "Every step feels familiar.",

            "Someone has walked here before.",

            "You cannot remember when."

        ],

        nextScene: "silent_forest"

    } satisfies StoryEvent,


    rememberAshenGate: {

        id: "ashen_gate_memory",

        title: "The Ashen Gate",

        text: [

            "Your name leaves your lips before you can stop it.",

            "The fog parts around a gate buried beneath ash.",

            "For one breath, you remember standing before it.",

            "Then the gate is gone."

        ],

        nextScene: "forgotten_road",

        continueText: "Return"

    } satisfies StoryEvent,


    rememberBlacksmithOath: {

        id: "blacksmith_oath_memory",

        title: "The Blacksmith's Oath",

        text: [

            "The smell of hot iron cuts through the cold air.",

            "A hammer falls somewhere beyond the fog.",

            "A voice says: \"I remember the promise.\"",

            "When the sound fades, your hands are shaking."

        ],

        nextScene: "forgotten_road",

        continueText: "Return"

    } satisfies StoryEvent,


    confrontForgottenGuard: {

        id: "forgotten_guard_memory",

        title: "The Forgotten Guard",

        text: [

            "The guard raises its sword, but its hand trembles.",

            "\"Halt. State the name of the kingdom.\"",

            "You have no answer.",

            "For a moment, neither does it.",

            "The blade lowers. The guard steps aside."

        ],

        nextScene: "unknown_wanderer"

    } satisfies StoryEvent,


    readBrokenShrine: {

        id: "keepers_warning_memory",

        title: "The Keeper's Warning",

        text: [

            "The markings shift beneath your hand.",

            "A sentence forms in the dust.",

            "\"To remember is to open the door again.\"",

            "The final words have been scratched away."

        ],

        nextScene: "unknown_wanderer"

    } satisfies StoryEvent,


    followForestVoice: {

        id: "silent_path_memory",

        title: "The Silent Path",

        text: [

            "You follow the voice until even your footsteps disappear.",

            "A narrow trail opens between the roots.",

            "Someone has been waiting for you beyond the trees.",

            "You cannot remember who."

        ],

        nextScene: "unknown_wanderer"

    } satisfies StoryEvent

};
