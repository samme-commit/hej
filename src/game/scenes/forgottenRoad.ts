import type { Scene } from "../types";


export const forgottenRoad: Scene = {

    id: "forgotten_road",

    title:
        "THE FORGOTTEN ROAD",


    text: [

        "You wake up.",

        "The ground is cold beneath you.",

        "You don't remember who you are.",

        "A broken sword lies beside you."

    ],


    choices: [

        {
            id: "broken_sword",

            text: "Examine the Broken Sword",

            action: "choose_sword"
        },


        {
            id: "memory_stone",

            text: "Touch the Strange Stone",

            action: "choose_stone"
        },


        {
            id: "silent_road",

            text: "Follow the Silent Road",

            action: "choose_road"
        }

    ]

};