import type { Scene } from "../types";


export const brokenShrine: Scene = {

    id: "broken_shrine",


    title: "THE BROKEN SHRINE",


    text: [

        "The stone pulls you from the road.",

        "Behind a curtain of ash, a shattered shrine waits.",

        "Its walls are covered in writing that feels almost familiar.",

        "Something beneath the rubble is still trying to be remembered."

    ],


    choices: [

        {
            id: "read_broken_shrine",

            text: "Read the Inscription",

            action: "read_broken_shrine"
        }

    ]

};
