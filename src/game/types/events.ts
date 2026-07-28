import type { SceneId } from "../types";


export interface StoryEvent {

    id: string;

    title: string;

    text: string[];

    nextScene?: SceneId;

    continueText?: string;

}
