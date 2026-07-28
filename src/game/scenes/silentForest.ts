import type { Scene } from "../types";


export const silentForest: Scene = {

    id: "silent_forest",


    title:
        "THE SILENT FOREST",


    text: [

        "The fog follows you as you leave the road.",

        "The trees around you are ancient.",

        "For a moment, you hear a voice.",

        "\"You have returned...\""

    ],


    choices: [

        {
            id: "follow_forest_voice",

            text: "Follow the Voice",

            action: "follow_forest_voice"
        }

    ]

};
