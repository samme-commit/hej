import {
    chooseBrokenSword,
    chooseMemoryStone,
    chooseSilentRoad
} from "./choiceActions";


export function executeAction(action: string) {


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


        default:

            console.warn(
                `Unknown action: ${action}`
            );

    }

}