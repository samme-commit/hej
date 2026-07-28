export interface Choice {
    id: string;
    text: string;
    action: string;
}


export interface Scene {
    id: string;
    title: string;
    text: string[];
    choices: Choice[];
}