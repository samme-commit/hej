import {
    chooseBrokenSword,
    chooseMemoryStone,
    chooseSilentRoad,
    rememberAshenGate,
    rememberBlacksmithOath,
    confrontForgottenGuard,
    readBrokenShrine,
    followForestVoice
} from "./choiceActions";

import type { GameAction } from "../types";

export function executeAction(action: GameAction) {


    switch(action) {


        case "choose_sword":

            chooseBrokenSword();

            break;


        case "choose_stone":

            chooseMemoryStone();

            break;


        case "choose_road":

            chooseSilentRoad();

            break;


        case "remember_ashen_gate":

            rememberAshenGate();

            break;


        case "remember_blacksmith_oath":

            rememberBlacksmithOath();

            break;


        case "confront_forgotten_guard":

            confrontForgottenGuard();

            break;


        case "read_broken_shrine":

            readBrokenShrine();

            break;


        case "follow_forest_voice":

            followForestVoice();

            break;


        default:

            console.warn(
                `Unknown action: ${action}`
            );

    }

}
