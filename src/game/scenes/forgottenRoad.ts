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
            id: "examine_sword",

            text:
                "Examine Sword",

            action:
                "examine_sword"
        },


        {
            id: "touch_stone",

            text:
                "Touch Strange Stone",

            action:
                "touch_stone"
        },


        {
            id: "follow_road",

            text:
                "Follow The Road",

            action:
                "follow_road"
        }

    ]

};