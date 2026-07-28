import type { Scene } from "../types";


export const forgottenRoad: Scene = {

    id: "forgotten_road",

    title:
        "THE FORGOTTEN ROAD",


    text: [

        "You wake up.",

        "The ground is cold beneath you.",

        "You don't remember who you are.",

        "Beside you, three things remain untouched.",

        "A broken sword, half-buried in ash.",

        "A strange stone covered in marks you cannot read.",

        "A path disappearing into the mist."

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
