import type { Scene } from "../types";


export const forgottenGuard: Scene = {

    id: "forgotten_guard",


    title: "THE FORGOTTEN GUARD",


    text: [

        "The road ends at a ruined gate.",

        "A lone guard stands beneath it, wrapped in rusted armor.",

        "Its banner has no crest.",

        "When it sees the sword in your hand, it remembers how to move."

    ],


    choices: [

        {
            id: "confront_forgotten_guard",

            text: "Approach the Guard",

            action: "confront_forgotten_guard"
        }

    ]

};
