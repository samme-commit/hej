import type {
    EndingDefinition,
    EnemyDefinition,
    EnemyId,
    ItemDefinition,
    ItemId,
    MemoryDefinition,
    MemoryId,
    QuestDefinition,
    QuestId,
    StoryNode,
    StoryNodeId,
    ZoneDefinition,
    ZoneId
} from "../types";


export const ITEMS: Record<ItemId, ItemDefinition> = {

    broken_sword: {
        id: "broken_sword",
        name: "Broken Sword",
        description: "A damaged blade that grows warmer near old violence.",
        lore: "It remembers a battle nobody can name.",
        kind: "weapon",
        power: 4,
        slot: "weapon"
    },

    memory_stone: {
        id: "memory_stone",
        name: "Memory Stone",
        description: "A warm black stone marked with a script you almost know.",
        lore: "Something inside it has been waiting to be remembered.",
        kind: "memory"
    },

    trail_map: {
        id: "trail_map",
        name: "Faded Trail Map",
        description: "A map that redraws itself whenever you stop looking.",
        lore: "The road does not show destinations. It shows absences.",
        kind: "key"
    },

    ashen_tonic: {
        id: "ashen_tonic",
        name: "Ashen Tonic",
        description: "A bitter vial that pulls warmth back into your body.",
        lore: "Made by hands that knew how to heal a world after war.",
        kind: "consumable",
        healAmount: 28
    },

    nameless_ring: {
        id: "nameless_ring",
        name: "Nameless Ring",
        description: "A silver ring worn smooth by a person no one can recall. Its promise steadies your hand.",
        lore: "It remembers a promise even when the promise-maker is gone.",
        kind: "charm",
        power: 1,
        slot: "charm"
    },

    forgotten_key: {
        id: "forgotten_key",
        name: "Forgotten Key",
        description: "A key that turns only when you stop trying to remember the lock.",
        lore: "Its teeth are shaped like a vanished city.",
        kind: "key"
    },

    archive_seal: {
        id: "archive_seal",
        name: "Archive Seal",
        description: "A wax seal that bears the mark of the Keepers of Memory.",
        lore: "The seal opens a record that was never meant to survive.",
        kind: "key"
    },

    hollow_shard: {
        id: "hollow_shard",
        name: "Hollow Shard",
        description: "A cold fragment that seems lighter whenever you forget it is there.",
        lore: "The Hollow does not consume things. It consumes why they mattered.",
        kind: "memory"
    }

};


export const MEMORIES: Record<MemoryId, MemoryDefinition> = {

    last_battle: {
        id: "last_battle",
        title: "The Last Battle",
        text: "Smoke. Steel. A gate beneath ash. Someone cries your name, but the sound is cut away before you can answer.",
        chapter: "The Awakening"
    },

    voice_in_the_dark: {
        id: "voice_in_the_dark",
        title: "The Voice in the Dark",
        text: "A voice waited inside the stone. It did not ask who you were. It asked whether you had returned.",
        chapter: "The Awakening"
    },

    place_that_should_not_exist: {
        id: "place_that_should_not_exist",
        title: "The Place That Should Not Exist",
        text: "Beyond the fog you saw a city, a tower, and a house with a light in its window. None of them were there when you looked again.",
        chapter: "The Awakening"
    },

    the_ashen_gate: {
        id: "the_ashen_gate",
        title: "The Ashen Gate",
        text: "Your name once stood before a gate buried in ash. The gate remembers. You do not.",
        chapter: "A Name Without a Past"
    },

    the_blacksmiths_oath: {
        id: "the_blacksmiths_oath",
        title: "The Blacksmith's Oath",
        text: "A hammer strikes in the fog. Someone promised to forge a weapon that could cut a memory loose.",
        chapter: "A Name Without a Past"
    },

    the_guardians_oath: {
        id: "the_guardians_oath",
        title: "The Guardian's Oath",
        text: "The guard was not waiting for an enemy. It was waiting for a kingdom to remember it existed.",
        chapter: "The Awakening"
    },

    the_broken_inscription: {
        id: "the_broken_inscription",
        title: "The Broken Inscription",
        text: "The first words beneath the shrine read: 'When the door opens, do not let the Keeper remember alone.'",
        chapter: "The Awakening"
    },

    the_lost_name: {
        id: "the_lost_name",
        title: "The Lost Name",
        text: "A letter begins with a name, but the ink fades each time you try to read it. The grief remains.",
        chapter: "A Name Without a Past"
    },

    the_first_fear: {
        id: "the_first_fear",
        title: "The First Fear",
        text: "Before the Hollow learned to erase history, it learned to make people fear what they could not name.",
        chapter: "A Name Without a Past"
    },

    the_silent_path: {
        id: "the_silent_path",
        title: "The Silent Path",
        text: "The forest opened a path only for you, then hid it again behind the roots.",
        chapter: "A Name Without a Past"
    },

    the_keepers_warning: {
        id: "the_keepers_warning",
        title: "The Keeper's Warning",
        text: "To remember is to open the door again. The Keepers knew the price and chose to pay it anyway.",
        chapter: "A Name Without a Past"
    },

    the_great_forgetting: {
        id: "the_great_forgetting",
        title: "The Great Forgetting",
        text: "The Forgetting was not a curse. It was a containment. The world surrendered its history to starve something that fed on meaning.",
        chapter: "The Forgotten City"
    },

    the_last_kings_silence: {
        id: "the_last_kings_silence",
        title: "The Last King's Silence",
        text: "The last king signed no decree. He simply forgot why he had been afraid, and the palace forgot him in return.",
        chapter: "The Forgotten City"
    },

    the_final_memory: {
        id: "the_final_memory",
        title: "The Final Memory",
        text: "You were a Keeper. You helped choose the Forgetting. Then you gave up your own name so the choice could not be undone by regret.",
        chapter: "The Truth"
    }

};


export const ENEMIES: Record<EnemyId, EnemyDefinition> = {

    forgotten_guard: {
        id: "forgotten_guard",
        name: "Forgotten Guard",
        art: [
            "    /\\",
            "   /  \\",
            "  [====]",
            "  / || \\",
            "    /\\"
        ],
        maxHealth: 20,
        damage: 5,
        description: "A sworn protector with no kingdom left to defend."
    },

    hollowborn: {
        id: "hollowborn",
        name: "Hollowborn",
        art: [
            "   .---.",
            "  / .-. \\",
            "  | | | |",
            "  \\ '-' /",
            "   '---'"
        ],
        maxHealth: 28,
        damage: 6,
        description: "A shape made from what the forest failed to remember."
    },

    memory_wraith: {
        id: "memory_wraith",
        name: "Memory Wraith",
        art: [
            "    .-.",
            "   ( ? )",
            "  .-'-'-.",
            " /  .-.  \\",
            "    |_|"
        ],
        maxHealth: 38,
        damage: 7,
        description: "It wears the outline of every memory you refused to carry."
    },

    hollow_remnant: {
        id: "hollow_remnant",
        name: "Hollow Remnant",
        art: [
            "       .-^-.",
            "    .-'     '-.",
            "   /  .-.-.-.  \\",
            "  |  /  .-.  \\  |",
            "   \\ \\  |_|  / /",
            "    '._     _.'",
            "       '---'"
        ],
        maxHealth: 50,
        damage: 8,
        description: "The Hollow is not a beast. It is everything the world chose not to face."
    }

};


export const QUESTS: Record<QuestId, QuestDefinition> = {

    name_without_a_past: {
        id: "name_without_a_past",
        title: "A Name Without a Past",
        description: "Recover the three echoes hidden in the Silent Forest.",
        steps: [
            {
                id: "camp_echo",
                text: "Find the lost name at the abandoned camp."
            },
            {
                id: "grove_echo",
                text: "Face the fear growing beneath the roots."
            },
            {
                id: "cairn_echo",
                text: "Read the warning left by the Keepers."
            }
        ]
    },

    letter_unsent: {
        id: "letter_unsent",
        title: "A Letter Unsent",
        description: "Carry a promise for someone the world has forgotten.",
        steps: [
            {
                id: "promise_carried",
                text: "Carry the survivor's promise beyond the camp."
            },
            {
                id: "name_restored",
                text: "Give the lost name somewhere safe to return."
            }
        ]
    },

    door_that_remembers: {
        id: "door_that_remembers",
        title: "The Door That Remembers",
        description: "Recover the records needed to open the Memory Archive.",
        steps: [
            {
                id: "library_record",
                text: "Search the Old Library."
            },
            {
                id: "palace_record",
                text: "Listen to the Empty Palace."
            },
            {
                id: "final_record",
                text: "Recover the final record from the Memory Archive."
            }
        ]
    },

    the_final_memory: {
        id: "the_final_memory",
        title: "The Final Memory",
        description: "Decide what the world deserves to remember.",
        steps: [
            {
                id: "remnant_decided",
                text: "Decide the Hollow Remnant's fate."
            }
        ]
    }

};


export const ZONES: Record<ZoneId, ZoneDefinition> = {

    forgotten_road: {
        id: "forgotten_road",
        name: "The Forgotten Road",
        description: "A road covered in ash, waiting for someone to remember where it leads.",
        art: [
            "       . . .",
            "   ____/   \\____",
            "      /     \\",
            "     /       \\",
            "    /_________\\"
        ],
        entryNodeId: "forgotten_road",
        accent: "road"
    },

    silent_forest: {
        id: "silent_forest",
        name: "The Silent Forest",
        description: "A forest where even the wind has forgotten how to speak.",
        art: [
            "   Y   Y   Y",
            "  /|\\ /|\\ /|\\",
            " / | V | V | \\",
            "___|___|___|___"
        ],
        entryNodeId: "forest_hub",
        accent: "forest"
    },

    lost_camp: {
        id: "lost_camp",
        name: "The Lost Camp",
        description: "Ash-covered tents and a fire that was never properly extinguished.",
        art: [
            "    /\\",
            "   /__\\    _",
            "  /____\\  (_) ",
            "  ||  ||   /|\\"
        ],
        entryNodeId: "lost_camp",
        accent: "forest"
    },

    keepers_cairn: {
        id: "keepers_cairn",
        name: "Keeper's Cairn",
        description: "A broken shrine raised around a truth no one wanted to keep.",
        art: [
            "    /\\",
            "   /__\\",
            "  | [] |",
            " _|____|_"
        ],
        entryNodeId: "keepers_cairn",
        accent: "memory"
    },

    forgotten_city: {
        id: "forgotten_city",
        name: "The Forgotten City",
        description: "A city that looks abandoned only when you try to remember its people.",
        art: [
            " | |  | |  | |",
            " |_|__|_|__|_|",
            " |  _  _  _  |",
            "_|_| |_| |_|_|_"
        ],
        entryNodeId: "forgotten_city",
        accent: "city"
    },

    old_library: {
        id: "old_library",
        name: "The Old Library",
        description: "Its shelves hold books whose titles disappear when spoken aloud.",
        art: [
            "  __________",
            " || [] [] ||",
            " || [] [] ||",
            " ||________||"
        ],
        entryNodeId: "old_library",
        accent: "memory"
    },

    empty_palace: {
        id: "empty_palace",
        name: "The Empty Palace",
        description: "A throne room prepared for a king who has been erased from his own history.",
        art: [
            "     /\\",
            "  __/  \\__",
            " |  [] []  |",
            "_|__________|_"
        ],
        entryNodeId: "empty_palace",
        accent: "city"
    },

    memory_archive: {
        id: "memory_archive",
        name: "The Memory Archive",
        description: "A vault built to keep truth alive after its witnesses were gone.",
        art: [
            "  .--------.",
            " / .----.  \\",
            "| |    | |  |",
            "| '----' |  |",
            " '--------'"
        ],
        entryNodeId: "memory_archive",
        accent: "memory"
    },

    ashen_gate: {
        id: "ashen_gate",
        name: "The Ashen Gate",
        description: "The last threshold in the buried heart of the Ancient Kingdom, between the world that forgot and the truth that remained.",
        art: [
            "    _______",
            "   /       \\",
            "  |   ___   |",
            "  |  |   |  |",
            "__|__|___|__|__"
        ],
        entryNodeId: "ashen_gate",
        accent: "hollow"
    }

};


export const STORY_NODES: Record<StoryNodeId, StoryNode> = {

    forgotten_road: {
        id: "forgotten_road",
        zoneId: "forgotten_road",
        title: "THE FORGOTTEN ROAD",
        subtitle: "Chapter I — The Awakening",
        art: ZONES.forgotten_road.art,
        text: [
            "You wake up.",
            "The ground is cold beneath you.",
            "You do not remember who you are.",
            "Beside you, three things remain untouched.",
            "A broken sword, half-buried in ash.",
            "A strange stone covered in marks you cannot read.",
            "A path disappearing into the mist."
        ],
        choices: [
            {
                id: "take_sword",
                label: "Examine the Broken Sword",
                hint: "Choose strength, conflict, and an old oath.",
                response: [
                    "The moment your fingers close around the blade, a sharp pain tears through your mind.",
                    "Smoke. Steel. A gate beneath ash.",
                    "You are not watching the battle. You are standing in it.",
                    "Then the road returns."
                ],
                requirements: [
                    { type: "no_path" }
                ],
                nextNodeId: "forgotten_guard",
                effects: [
                    { type: "set_path", path: "warrior" },
                    { type: "add_stat", stat: "strength", amount: 3 },
                    { type: "add_item", itemId: "broken_sword", equip: true },
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 0 },
                    { type: "add_memory", memoryId: "last_battle" },
                    { type: "discover_zone", zoneId: "silent_forest" }
                ]
            },
            {
                id: "touch_stone",
                label: "Touch the Strange Stone",
                hint: "Choose endurance, knowledge, and a waiting voice.",
                response: [
                    "The stone is warm.",
                    "A voice inside it whispers: 'Finally.'",
                    "You do not know the voice, yet something in you is relieved to hear it.",
                    "When you open your eyes, a broken shrine waits beyond the fog."
                ],
                requirements: [
                    { type: "no_path" }
                ],
                nextNodeId: "broken_shrine",
                effects: [
                    { type: "set_path", path: "keeper" },
                    { type: "add_stat", stat: "maxHealth", amount: 25 },
                    { type: "add_stat", stat: "currentHealth", amount: 25 },
                    { type: "add_stat", stat: "knowledge", amount: 3 },
                    { type: "add_item", itemId: "memory_stone" },
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 0 },
                    { type: "add_memory", memoryId: "voice_in_the_dark" },
                    { type: "discover_zone", zoneId: "keepers_cairn" },
                    { type: "discover_zone", zoneId: "silent_forest" }
                ]
            },
            {
                id: "follow_road",
                label: "Follow the Silent Road",
                hint: "Choose discovery, hidden paths, and the unknown.",
                response: [
                    "The road begins to move beneath your feet.",
                    "For one breath you see a city, a tower, and a house with a lamp burning in its window.",
                    "When you blink, the forest has taken their place.",
                    "You have walked this way before."
                ],
                requirements: [
                    { type: "no_path" }
                ],
                nextNodeId: "silent_trail",
                effects: [
                    { type: "set_path", path: "explorer" },
                    { type: "add_stat", stat: "awareness", amount: 3 },
                    { type: "add_item", itemId: "trail_map" },
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 0 },
                    { type: "add_memory", memoryId: "place_that_should_not_exist" },
                    { type: "discover_zone", zoneId: "silent_forest" },
                    { type: "discover_zone", zoneId: "lost_camp" }
                ]
            }
        ]
    },

    forgotten_guard: {
        id: "forgotten_guard",
        zoneId: "forgotten_road",
        title: "THE FORGOTTEN GUARD",
        subtitle: "A kingdom without a name",
        art: ENEMIES.forgotten_guard.art,
        text: [
            "The road ends at a ruined gate.",
            "A lone guard stands beneath it, wrapped in rusted armor.",
            "Its banner has no crest.",
            "When it sees the sword in your hand, it remembers how to move."
        ],
        choices: [
            {
                id: "challenge_guard",
                label: "Challenge the Guard",
                repeatable: true,
                hint: "The gate recognizes the sword in your hand.",
                response: [
                    "The guard raises its sword.",
                    "'State the name of the kingdom.'",
                    "You cannot answer. The blade comes anyway."
                ],
                requirements: [
                    { type: "enemy_not_defeated", enemyId: "forgotten_guard" }
                ],
                effects: [
                    {
                        type: "start_combat",
                        enemyId: "forgotten_guard",
                        victoryNodeId: "guard_after",
                        defeatNodeId: "fallen_on_the_road"
                    }
                ]
            }
        ]
    },

    guard_after: {
        id: "guard_after",
        zoneId: "forgotten_road",
        title: "THE GUARDIAN'S OATH",
        subtitle: "A promise survives its kingdom",
        art: ENEMIES.forgotten_guard.art,
        text: [
            "The guard falls to one knee.",
            "Its empty banner stirs although there is no wind.",
            "For a moment, the broken blade in your hand feels whole."
        ],
        choices: [
            {
                id: "claim_guardians_oath",
                label: "Carry the Guardian's Oath",
                response: [
                    "The guard presses one rusted hand to its chest.",
                    "'Remember the gate,' it says, and the words become part of you.",
                    "When the ash clears, a lantern burns at the edge of the forest."
                ],
                nextNodeId: "unknown_wanderer",
                effects: [
                    { type: "add_memory", memoryId: "the_guardians_oath" },
                    { type: "add_stat", stat: "strength", amount: 1 },
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 1 },
                    { type: "discover_zone", zoneId: "silent_forest" }
                ]
            }
        ]
    },

    broken_shrine: {
        id: "broken_shrine",
        zoneId: "keepers_cairn",
        title: "THE BROKEN SHRINE",
        subtitle: "A warning left in stone",
        art: ZONES.keepers_cairn.art,
        text: [
            "The stone pulls you from the road.",
            "Behind a curtain of ash, a shattered shrine waits.",
            "Its walls are covered in writing that feels almost familiar.",
            "Something beneath the rubble is still trying to be remembered."
        ],
        choices: [
            {
                id: "read_first_warning",
                label: "Read the Inscription",
                response: [
                    "The markings shift beneath your hand.",
                    "A sentence forms in the dust: 'To remember is to open the door again.'",
                    "The final words have been scratched away."
                ],
                nextNodeId: "unknown_wanderer",
                effects: [
                    { type: "add_memory", memoryId: "the_broken_inscription" },
                    { type: "add_stat", stat: "knowledge", amount: 2 },
                    { type: "discover_zone", zoneId: "silent_forest" }
                ]
            }
        ]
    },

    silent_trail: {
        id: "silent_trail",
        zoneId: "silent_forest",
        title: "THE SILENT TRAIL",
        subtitle: "The world shifts around you",
        art: ZONES.silent_forest.art,
        text: [
            "The forest begins where the road should end.",
            "No birds call from the branches.",
            "A narrow trail opens between roots that were not there a moment ago.",
            "At its end, a lantern burns beneath a dead tree."
        ],
        choices: [
            {
                id: "follow_lantern",
                label: "Follow the Lantern",
                response: [
                    "The trail folds behind you as you walk.",
                    "You find a discarded tonic in the roots, still warm.",
                    "Someone expected you to arrive."
                ],
                nextNodeId: "unknown_wanderer",
                effects: [
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 1 },
                    { type: "discover_zone", zoneId: "keepers_cairn" }
                ]
            }
        ]
    },

    unknown_wanderer: {
        id: "unknown_wanderer",
        zoneId: "silent_forest",
        title: "THE UNKNOWN WANDERER",
        subtitle: "The first person who almost remembers",
        art: [
            "     .-.",
            "    /   \\",
            "    | o |",
            "   /|   |\\",
            "    / \\",
            "   /___\\"
        ],
        text: [
            "A lantern burns beneath a dead tree.",
            "Beside it sits a traveler wrapped in a grey cloak.",
            "They look at you for a long time.",
            "'You look like someone I once knew.'"
        ],
        choices: [
            {
                id: "accept_wanderer_quest",
                label: "Ask What They Remember",
                response: [
                    "'Three echoes are caught in this forest,' the wanderer says.",
                    "'Bring them back, and perhaps the city will remember how to open its gates.'",
                    "They give you a simple map and turn their lantern toward the trees."
                ],
                nextNodeId: "forest_hub",
                effects: [
                    { type: "activate_quest", questId: "name_without_a_past" },
                    { type: "set_flag", flag: "journal_unlocked" },
                    { type: "set_flag", flag: "map_unlocked" },
                    { type: "discover_zone", zoneId: "silent_forest" },
                    { type: "discover_zone", zoneId: "lost_camp" },
                    { type: "discover_zone", zoneId: "keepers_cairn" }
                ]
            }
        ]
    },

    forest_hub: {
        id: "forest_hub",
        zoneId: "silent_forest",
        title: "THE SILENT FOREST",
        subtitle: "Three echoes wait between the roots",
        art: ZONES.silent_forest.art,
        text: [
            "The wanderer's lantern is gone, but its light remains caught between the trees.",
            "You sense three places pulling at your memory.",
            "The forest is not silent. It is listening."
        ],
        choices: [
            {
                id: "go_lost_camp",
                label: "Follow the Smoke to the Lost Camp",
                repeatable: true,
                response: [
                    "A thin column of smoke rises where no fire should survive.",
                    "You follow it deeper into the trees."
                ],
                nextNodeId: "lost_camp"
            },
            {
                id: "go_rootbound_grove",
                label: "Enter the Rootbound Grove",
                repeatable: true,
                hint: "A forgotten fear waits beneath the roots.",
                response: [
                    "The roots knot together like fingers around something buried.",
                    "The darkness beneath them starts to breathe."
                ],
                nextNodeId: "rootbound_grove",
                requirements: [
                    { type: "enemy_not_defeated", enemyId: "hollowborn" }
                ]
            },
            {
                id: "go_keepers_cairn",
                label: "Return to the Keeper's Cairn",
                repeatable: true,
                response: [
                    "A line of pale stones leads you back to the ruined shrine.",
                    "This time, the writing is waiting."
                ],
                nextNodeId: "keepers_cairn"
            },
            {
                id: "trace_vanishing_trail",
                label: "Trace the Map's Vanishing Trail",
                hint: "Explorer path",
                response: [
                    "The map redraws itself beneath your fingers.",
                    "For one breath, it shows a path that crosses the forest without touching the ground.",
                    "You learn where the roots leave spaces for those who know how to look."
                ],
                nextNodeId: "forest_hub",
                requirements: [
                    { type: "path", path: "explorer" }
                ],
                effects: [
                    { type: "add_memory", memoryId: "the_silent_path" },
                    { type: "add_stat", stat: "awareness", amount: 2 },
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 1 }
                ]
            },
            {
                id: "follow_city_light",
                label: "Follow the Lantern Toward the City",
                repeatable: true,
                hint: "Requires the forest's three echoes.",
                response: [
                    "The three echoes answer each other.",
                    "Beyond the trees, a city appears where the map was blank."
                ],
                nextNodeId: "city_gate",
                requirements: [
                    {
                        type: "quest_complete",
                        questId: "name_without_a_past"
                    }
                ],
                effects: [
                    { type: "discover_zone", zoneId: "forgotten_city" },
                    { type: "activate_quest", questId: "door_that_remembers" }
                ]
            }
        ]
    },

    lost_camp: {
        id: "lost_camp",
        zoneId: "lost_camp",
        title: "THE LOST CAMP",
        subtitle: "A fire that remembers its keeper",
        art: ZONES.lost_camp.art,
        text: [
            "Tents lean against the trees, their canvas white with ash.",
            "A small fire burns in the center of the camp.",
            "Beside it, someone holds an unread letter with both hands."
        ],
        choices: [
            {
                id: "speak_to_survivor",
                label: "Speak to the Nameless Survivor",
                response: [
                    "The survivor looks up, startled to find someone else in the world.",
                    "'I had a name,' they whisper. 'I know I did.'",
                    "The letter shakes in their hands."
                ],
                nextNodeId: "nameless_survivor",
                effects: [
                    { type: "add_memory", memoryId: "the_lost_name" },
                    { type: "advance_quest", questId: "name_without_a_past", stepId: "camp_echo" }
                ]
            },
            {
                id: "search_camp",
                label: "Search the Abandoned Packs",
                response: [
                    "Among spoiled rations, you find an intact vial of tonic.",
                    "Someone packed for a journey they never got to take."
                ],
                nextNodeId: "forest_hub",
                effects: [
                    { type: "add_item", itemId: "ashen_tonic", quickSlot: 1 }
                ]
            },
            {
                id: "return_from_lost_camp",
                label: "Return to the Silent Forest",
                repeatable: true,
                response: [
                    "The campfire shrinks behind you.",
                    "Between the trees, the forest keeps listening."
                ],
                nextNodeId: "forest_hub"
            }
        ]
    },

    nameless_survivor: {
        id: "nameless_survivor",
        zoneId: "lost_camp",
        title: "A LETTER UNSENT",
        subtitle: "A promise without a recipient",
        art: [
            "      _",
            "     /_\\",
            "     | |",
            "    /| |\\",
            "     / \\",
            "    /___\\"
        ],
        text: [
            "The letter begins with a name, but the ink fades whenever you focus on it.",
            "The survivor closes their hand around a silver ring.",
            "'If you can remember them,' they say, 'tell them I kept my promise.'"
        ],
        choices: [
            {
                id: "take_ring_and_promise",
                label: "Carry the Promise",
                response: [
                    "The ring is cold, then warm, then almost weightless.",
                    "You do not know who the promise belonged to.",
                    "You know you will carry it anyway."
                ],
                nextNodeId: "forest_hub",
                effects: [
                    { type: "activate_quest", questId: "letter_unsent" },
                    { type: "advance_quest", questId: "letter_unsent", stepId: "promise_carried" },
                    { type: "add_item", itemId: "nameless_ring", equip: true },
                    { type: "add_echoes", amount: 1 }
                ]
            },
            {
                id: "leave_survivor",
                label: "Leave the Fire Burning",
                response: [
                    "You leave the survivor with their letter and their silence.",
                    "The fire keeps burning behind you."
                ],
                nextNodeId: "forest_hub"
            }
        ]
    },

    rootbound_grove: {
        id: "rootbound_grove",
        zoneId: "silent_forest",
        title: "THE ROOTBOUND GROVE",
        subtitle: "Fear has taken root",
        art: [
            "    Y  Y",
            "   /|/|\\",
            "  / |  | \\",
            " /__|__|__\\",
            "    ||||"
        ],
        text: [
            "Roots twist around a hollow at the center of the grove.",
            "Something moves inside it, wearing a shape that almost resembles a person.",
            "It looks at you with a face that has forgotten how to have one."
        ],
        choices: [
            {
                id: "fight_hollowborn",
                label: "Face the Hollowborn",
                repeatable: true,
                hint: "Something beneath the roots is still breathing.",
                response: [
                    "The thing unfolds from the roots.",
                    "It does not roar. It simply reaches for the part of you that still remembers fear."
                ],
                requirements: [
                    { type: "enemy_not_defeated", enemyId: "hollowborn" }
                ],
                effects: [
                    {
                        type: "start_combat",
                        enemyId: "hollowborn",
                        victoryNodeId: "rootbound_after",
                        defeatNodeId: "fallen_in_the_forest"
                    }
                ]
            }
        ]
    },

    rootbound_after: {
        id: "rootbound_after",
        zoneId: "silent_forest",
        title: "AFTER THE FEAR",
        subtitle: "An echo beneath the roots",
        art: ZONES.silent_forest.art,
        text: [
            "The Hollowborn comes apart without a scream.",
            "A shard remains where its heart should have been.",
            "The roots loosen, revealing a key wrapped in old cloth."
        ],
        choices: [
            {
                id: "take_grove_echo",
                label: "Take the Shard and the Key",
                response: [
                    "The shard shows you a room full of frightened people.",
                    "Someone says: 'If we remember the fear, it will find us again.'",
                    "The memory ends before you can see who answered."
                ],
                nextNodeId: "forest_hub",
                effects: [
                    { type: "add_item", itemId: "hollow_shard" },
                    { type: "add_item", itemId: "forgotten_key" },
                    { type: "add_memory", memoryId: "the_first_fear" },
                    { type: "advance_quest", questId: "name_without_a_past", stepId: "grove_echo" }
                ]
            }
        ]
    },

    keepers_cairn: {
        id: "keepers_cairn",
        zoneId: "keepers_cairn",
        title: "KEEPER'S CAIRN",
        subtitle: "The warning was left for someone",
        art: ZONES.keepers_cairn.art,
        text: [
            "The cairn has changed since you first saw it.",
            "Its stones are arranged around an empty space shaped like a memory.",
            "A line of writing glows beneath the ash."
        ],
        choices: [
            {
                id: "study_keepers_warning",
                label: "Study the Keeper's Warning",
                response: [
                    "The inscription completes itself beneath your hand.",
                    "'We did not destroy the past. We hid it from the thing that lived inside it.'",
                    "A route through the forest opens toward a city you have never seen."
                ],
                nextNodeId: "forest_hub",
                effects: [
                    { type: "add_memory", memoryId: "the_keepers_warning" },
                    { type: "add_stat", stat: "knowledge", amount: 2 },
                    { type: "advance_quest", questId: "name_without_a_past", stepId: "cairn_echo" }
                ]
            },
            {
                id: "keeper_hidden_line",
                label: "Read the Hidden Line",
                hint: "Keeper path",
                response: [
                    "The Memory Stone warms against your palm.",
                    "A hidden line appears: 'The Keeper returned by choice, not by fate.'",
                    "For a moment, the world feels less empty."
                ],
                nextNodeId: "forest_hub",
                requirements: [
                    { type: "path", path: "keeper" }
                ],
                effects: [
                    { type: "add_echoes", amount: 2 },
                    { type: "add_stat", stat: "knowledge", amount: 2 }
                ]
            },
            {
                id: "return_from_cairn",
                label: "Return to the Silent Forest",
                repeatable: true,
                response: [
                    "The cairn's light fades behind you.",
                    "The forest is waiting."
                ],
                nextNodeId: "forest_hub"
            }
        ]
    },

    city_gate: {
        id: "city_gate",
        zoneId: "forgotten_city",
        title: "THE CITY RETURNS",
        subtitle: "Chapter III — The Forgotten City",
        art: ZONES.forgotten_city.art,
        text: [
            "The forest ends at a wall of black stone.",
            "Beyond it waits a city with lights in every window.",
            "No voices answer from inside.",
            "The gate opens only after you stop asking who built it."
        ],
        choices: [
            {
                id: "enter_forgotten_city",
                label: "Enter the Forgotten City",
                response: [
                    "The gate opens without a sound.",
                    "A thousand empty homes seem to turn toward you at once.",
                    "Somewhere in the city, a door is waiting to remember your hand."
                ],
                nextNodeId: "forgotten_city",
                effects: [
                    { type: "discover_zone", zoneId: "old_library" },
                    { type: "discover_zone", zoneId: "empty_palace" }
                ]
            }
        ]
    },

    forgotten_city: {
        id: "forgotten_city",
        zoneId: "forgotten_city",
        title: "THE FORGOTTEN CITY",
        subtitle: "Every street leads back to a missing name",
        art: ZONES.forgotten_city.art,
        text: [
            "Tables are set behind open doors.",
            "Letters wait unfinished on desks.",
            "At the center of the city, three places refuse to disappear.",
            "The Old Library. The Empty Palace. The Memory Archive."
        ],
        choices: [
            {
                id: "visit_old_library",
                label: "Visit the Old Library",
                repeatable: true,
                response: [
                    "The books whisper when you pass them.",
                    "One shelf has left an empty place exactly your size."
                ],
                nextNodeId: "old_library"
            },
            {
                id: "visit_empty_palace",
                label: "Enter the Empty Palace",
                repeatable: true,
                response: [
                    "The palace doors are unlocked.",
                    "They have been waiting for a person who no longer exists."
                ],
                nextNodeId: "empty_palace"
            },
            {
                id: "open_memory_archive",
                label: "Open the Memory Archive",
                hint: "Requires the key and both city records.",
                response: [
                    "The Forgotten Key turns.",
                    "Behind the door, something remembers you too well."
                ],
                requirements: [
                    { type: "item", itemId: "forgotten_key" },
                    { type: "item", itemId: "archive_seal" },
                    { type: "quest_step", questId: "door_that_remembers", stepId: "library_record" },
                    { type: "quest_step", questId: "door_that_remembers", stepId: "palace_record" }
                ],
                nextNodeId: "memory_archive",
                effects: [
                    { type: "remove_item", itemId: "archive_seal" },
                    { type: "discover_zone", zoneId: "memory_archive" }
                ]
            }
        ]
    },

    old_library: {
        id: "old_library",
        zoneId: "old_library",
        title: "THE OLD LIBRARY",
        subtitle: "Records that survived their readers",
        art: ZONES.old_library.art,
        text: [
            "The library smells of dust and rain.",
            "A Keeper Remnant stands between the shelves, made of folded paper and candle smoke.",
            "It offers you a ledger with your name crossed out on every page."
        ],
        choices: [
            {
                id: "read_forgetting_ledger",
                label: "Read the Ledger",
                response: [
                    "The pages show the truth in fragments.",
                    "The Great Forgetting was a choice made to starve the Hollow of meaning.",
                    "At the last page, the Keeper Remnant presses a seal into your hand."
                ],
                nextNodeId: "forgotten_city",
                effects: [
                    { type: "add_memory", memoryId: "the_great_forgetting" },
                    { type: "add_item", itemId: "archive_seal" },
                    { type: "advance_quest", questId: "door_that_remembers", stepId: "library_record" }
                ]
            },
            {
                id: "shelve_unsent_letter",
                label: "Place the Ring Beside the Ledger",
                hint: "Complete A Letter Unsent.",
                response: [
                    "You place the ring beside the page where its name should have been.",
                    "For a single heartbeat, ink holds its shape.",
                    "You cannot read the name, but you know it has somewhere to return."
                ],
                nextNodeId: "forgotten_city",
                requirements: [
                    { type: "quest_step", questId: "letter_unsent", stepId: "promise_carried" }
                ],
                effects: [
                    { type: "advance_quest", questId: "letter_unsent", stepId: "name_restored" },
                    { type: "add_echoes", amount: 1 }
                ]
            },
            {
                id: "return_from_library",
                label: "Return to the Forgotten City",
                repeatable: true,
                response: [
                    "The books fall quiet behind you.",
                    "Outside, the city is still waiting to be remembered."
                ],
                nextNodeId: "forgotten_city"
            }
        ]
    },

    empty_palace: {
        id: "empty_palace",
        zoneId: "empty_palace",
        title: "THE EMPTY PALACE",
        subtitle: "A throne without a ruler",
        art: ZONES.empty_palace.art,
        text: [
            "The throne room is immaculate.",
            "A crown rests on the floor beneath the empty seat.",
            "When you touch it, the room fills with people who have forgotten why they were mourning."
        ],
        choices: [
            {
                id: "listen_to_empty_throne",
                label: "Listen to the Empty Throne",
                response: [
                    "A king kneels before a circle of Keepers.",
                    "'Let them forget me,' he says. 'Let them forget what I allowed.'",
                    "The crown turns to ash in your hand."
                ],
                nextNodeId: "forgotten_city",
                effects: [
                    { type: "add_memory", memoryId: "the_last_kings_silence" },
                    { type: "add_stat", stat: "strength", amount: 1 },
                    { type: "add_stat", stat: "knowledge", amount: 1 },
                    { type: "advance_quest", questId: "door_that_remembers", stepId: "palace_record" }
                ]
            },
            {
                id: "return_from_palace",
                label: "Return to the Forgotten City",
                repeatable: true,
                response: [
                    "The throne room becomes empty again.",
                    "The city waits beyond its open doors."
                ],
                nextNodeId: "forgotten_city"
            }
        ]
    },

    memory_archive: {
        id: "memory_archive",
        zoneId: "memory_archive",
        title: "THE MEMORY ARCHIVE",
        subtitle: "Truth has a guardian",
        art: ZONES.memory_archive.art,
        text: [
            "The Archive Seal melts into the lock.",
            "A chamber of suspended memories opens beneath the city.",
            "One memory descends from the darkness wearing a face you almost recognize."
        ],
        choices: [
            {
                id: "face_memory_wraith",
                label: "Face the Memory Wraith",
                repeatable: true,
                hint: "A truth in your own voice waits inside.",
                response: [
                    "The wraith speaks with your voice.",
                    "'You asked to forget,' it says. 'Why have you come back for the cost?'"
                ],
                requirements: [
                    { type: "enemy_not_defeated", enemyId: "memory_wraith" }
                ],
                effects: [
                    {
                        type: "start_combat",
                        enemyId: "memory_wraith",
                        victoryNodeId: "archive_after",
                        defeatNodeId: "fallen_in_the_archive"
                    }
                ]
            },
            {
                id: "leave_memory_archive",
                label: "Return to the Forgotten City",
                repeatable: true,
                response: [
                    "The Archive seals its lights behind you.",
                    "The city has not forgotten the way back."
                ],
                requirements: [
                    { type: "enemy_defeated", enemyId: "memory_wraith" }
                ],
                nextNodeId: "forgotten_city"
            }
        ]
    },

    archive_after: {
        id: "archive_after",
        zoneId: "memory_archive",
        title: "THE FINAL RECORD",
        subtitle: "The truth was kept for you",
        art: ZONES.memory_archive.art,
        text: [
            "The wraith breaks into a hundred fragments of light.",
            "One fragment remains in your palm.",
            "It is a memory you gave away willingly."
        ],
        choices: [
            {
                id: "take_final_memory",
                label: "Remember What You Chose",
                response: [
                    "You see yourself among the Keepers.",
                    "You chose the Forgetting. Then you gave up your own name so regret could not undo it.",
                    "Far beyond the city, the Ashen Gate opens."
                ],
                nextNodeId: "ashen_gate",
                effects: [
                    { type: "add_memory", memoryId: "the_final_memory" },
                    { type: "advance_quest", questId: "door_that_remembers", stepId: "final_record" },
                    { type: "activate_quest", questId: "the_final_memory" },
                    { type: "discover_zone", zoneId: "ashen_gate" }
                ]
            }
        ]
    },

    ashen_gate: {
        id: "ashen_gate",
        zoneId: "ashen_gate",
        title: "THE ASHEN GATE",
        subtitle: "Chapter IV — The Truth",
        art: ZONES.ashen_gate.art,
        text: [
            "The gate stands where the road began.",
            "Beyond it, the Hollow waits in the shape of everything the world could not bear to remember.",
            "It does not hate you.",
            "It knows you chose to make it hungry."
        ],
        choices: [
            {
                id: "face_hollow_remnant",
                label: "Face the Hollow Remnant",
                repeatable: true,
                hint: "The final threshold has remembered you.",
                response: [
                    "The Hollow opens around you like an old wound.",
                    "'If you restore the world,' it whispers, 'you will restore me too.'"
                ],
                requirements: [
                    { type: "enemy_not_defeated", enemyId: "hollow_remnant" }
                ],
                effects: [
                    {
                        type: "start_combat",
                        enemyId: "hollow_remnant",
                        victoryNodeId: "final_revelation",
                        defeatNodeId: "fallen_at_the_gate"
                    }
                ]
            }
        ]
    },

    final_revelation: {
        id: "final_revelation",
        zoneId: "ashen_gate",
        title: "THE FINAL CHOICE",
        subtitle: "Memory is power. Memory is danger. Memory is truth.",
        art: ZONES.ashen_gate.art,
        text: [
            "The Hollow Remnant is quiet now.",
            "The world waits at the edge of remembering.",
            "You can restore what was hidden, preserve the mercy of forgetting, or become the keeper of the threshold yourself."
        ],
        choices: [
            {
                id: "restore_memory",
                label: "Restore the World's Memory",
                hint: "Truth, even when it hurts.",
                response: [
                    "You open every sealed memory.",
                    "Across the world, names return with grief, love, shame, and joy.",
                    "The Hollow stirs—but so does the strength to face it."
                ],
                nextNodeId: "ending_restore",
                effects: [
                    { type: "advance_quest", questId: "the_final_memory", stepId: "remnant_decided" },
                    { type: "set_ending", endingId: "restore_memory" }
                ]
            },
            {
                id: "preserve_forgetting",
                label: "Preserve the Forgetting",
                hint: "Mercy, even when it costs truth.",
                response: [
                    "You close the memories one final time.",
                    "The Hollow fades to hungerless ash.",
                    "The world remains safe, and some names remain lost forever."
                ],
                nextNodeId: "ending_preserve",
                effects: [
                    { type: "advance_quest", questId: "the_final_memory", stepId: "remnant_decided" },
                    { type: "set_ending", endingId: "preserve_forgetting" }
                ]
            },
            {
                id: "become_keeper",
                label: "Become the Keeper",
                hint: "Carry the burden yourself.",
                response: [
                    "You take the memories into yourself instead of returning or destroying them.",
                    "The gate closes around your name.",
                    "The world will remember enough to live—and forget enough to survive."
                ],
                nextNodeId: "ending_keeper",
                effects: [
                    { type: "advance_quest", questId: "the_final_memory", stepId: "remnant_decided" },
                    { type: "set_ending", endingId: "become_keeper" }
                ]
            }
        ]
    },

    ending_restore: {
        id: "ending_restore",
        zoneId: "ashen_gate",
        title: "THE WORLD REMEMBERS",
        text: [],
        choices: []
    },

    ending_preserve: {
        id: "ending_preserve",
        zoneId: "ashen_gate",
        title: "THE MERCY OF FORGETTING",
        text: [],
        choices: []
    },

    ending_keeper: {
        id: "ending_keeper",
        zoneId: "ashen_gate",
        title: "THE NEW KEEPER",
        text: [],
        choices: []
    },

    fallen_on_the_road: {
        id: "fallen_on_the_road",
        zoneId: "forgotten_road",
        title: "THE ROAD REFUSES TO END",
        subtitle: "Defeat is not the end of the road",
        art: ZONES.forgotten_road.art,
        text: [
            "The guard's blade finds the ash beside you instead of your heart.",
            "When you wake, the ruined gate is still waiting.",
            "It has forgotten why it fought you. You have not."
        ],
        choices: [
            {
                id: "rise_on_the_road",
                label: "Rise and Face the Gate Again",
                repeatable: true,
                response: [
                    "You gather yourself from the ash.",
                    "The nameless guard raises its blade once more."
                ],
                nextNodeId: "forgotten_guard"
            }
        ]
    },

    fallen_in_the_forest: {
        id: "fallen_in_the_forest",
        zoneId: "silent_forest",
        title: "THE FOREST RETURNS YOU",
        subtitle: "Defeat is not the end of the road",
        art: ZONES.silent_forest.art,
        text: [
            "Darkness takes you before the final blow can land.",
            "When you wake, the wanderer's lantern is beside you.",
            "The forest has given you another chance."
        ],
        choices: [
            {
                id: "rise_again",
                label: "Rise and Continue",
                repeatable: true,
                response: [
                    "You stand with ash on your hands and one more breath in your lungs.",
                    "The road is still there."
                ],
                nextNodeId: "forest_hub"
            }
        ]
    },

    fallen_in_the_archive: {
        id: "fallen_in_the_archive",
        zoneId: "memory_archive",
        title: "THE ARCHIVE HOLDS YOU",
        subtitle: "A memory refuses to let you go",
        art: ZONES.memory_archive.art,
        text: [
            "The wraith unravels you into light.",
            "A moment later, the Archive gathers the pieces back into your hands.",
            "Your reflection waits in the chamber, patient and unfinished."
        ],
        choices: [
            {
                id: "return_to_the_archive",
                label: "Return to the Wraith",
                repeatable: true,
                response: [
                    "You step back into the chamber.",
                    "Your other self is waiting where it left you."
                ],
                nextNodeId: "memory_archive"
            }
        ]
    },

    fallen_at_the_gate: {
        id: "fallen_at_the_gate",
        zoneId: "ashen_gate",
        title: "THE GATE WAITS",
        subtitle: "The Hollow has not finished with you",
        art: ZONES.ashen_gate.art,
        text: [
            "The Hollow folds around you like a memory being erased.",
            "When it releases you, the Ashen Gate is still open.",
            "It believes you will choose forgetting. You are not finished choosing."
        ],
        choices: [
            {
                id: "return_to_the_hollow",
                label: "Return to the Hollow",
                repeatable: true,
                response: [
                    "You cross the threshold again.",
                    "This time, the Hollow sounds less certain."
                ],
                nextNodeId: "ashen_gate"
            }
        ]
    }

};


export const ENDINGS: Record<EndingDefinition["id"], EndingDefinition> = {

    restore_memory: {
        id: "restore_memory",
        title: "THE WORLD REMEMBERS",
        epilogue: [
            "Names return across the forgotten world.",
            "The city remembers its king, its failures, and the Keepers who chose to hide them.",
            "The Hollow is not gone. But neither is the courage to face what it feeds upon.",
            "The name you lost returns last. You choose to carry it beside the name you gave yourself."
        ],
        conditionalEpilogue: [
            {
                requirements: [
                    { type: "quest_complete", questId: "letter_unsent" }
                ],
                lines: [
                    "At the camp, the survivor reads their letter and weeps for a person they can finally name."
                ]
            }
        ]
    },

    preserve_forgetting: {
        id: "preserve_forgetting",
        title: "THE MERCY OF FORGETTING",
        epilogue: [
            "The Ashen Gate closes without a sound.",
            "The Hollow fades with the memories that would have fed it.",
            "The world remains quiet, safe, and incomplete.",
            "Some promises will never find their names again.",
            "You walk the road knowing that mercy can be another kind of loss."
        ]
    },

    become_keeper: {
        id: "become_keeper",
        title: "THE NEW KEEPER",
        epilogue: [
            "You become the threshold between memory and oblivion.",
            "The world remembers enough to mourn, to love, and to learn.",
            "The memories too dangerous to release sleep behind your eyes.",
            "Far away, a lantern burns beneath a dead tree.",
            "Someone will wake on a forgotten road. You will be there to guide them."
        ]
    }

};
