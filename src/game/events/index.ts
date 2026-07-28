import type { GameAction } from "../types";
import type { StoryEvent } from "../types/events";

import { introEvents } from "./introEvents";


const storyEventsByAction: Partial<
    Record<GameAction, StoryEvent>
> = {

    choose_sword: introEvents.chooseSword,

    choose_stone: introEvents.chooseStone,

    choose_road: introEvents.chooseRoad,

    remember_ashen_gate: introEvents.rememberAshenGate,

    remember_blacksmith_oath: introEvents.rememberBlacksmithOath,

    confront_forgotten_guard: introEvents.confrontForgottenGuard,

    read_broken_shrine: introEvents.readBrokenShrine,

    follow_forest_voice: introEvents.followForestVoice

};


export function getStoryEventForAction(
    action: GameAction
): StoryEvent | null {

    return storyEventsByAction[action] ?? null;

}
