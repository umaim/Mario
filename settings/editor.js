FullScreenMario.FullScreenMario.settings.editor = (function (things, macros) {
    return {
        "blocksize": FullScreenMario.FullScreenMario.unitsize * 4,
        "mapDefault": {
            "name": "New Map",
            "time": "Infinity",
            "locations": [
                { "entry": "Plain" }
            ],
            "areas": [
                {
                    "setting": "Overworld",
                    "creation": [
                        { "macro": "Floor", "x": 0, "y": 0, "width": 128 }
                    ]
                }
            ]
        },
        "mapSettingDefault": "Overworld",
        "mapEntryDefault": "Plain",
        "prethings": things,
        "thingGroups": ["Text", "Character", "Solid", "Scenery"],
        "thingKeys": (function () {
            var keys = [];

            Object.keys(things).forEach(function (group) {
                keys.push.apply(keys, Object.keys(things[group]));
            });

            return keys;
        })(),
        "macros": macros
    };
})({
    "Characters": {
        "Goomba": undefined,
        "Koopa": {
            "smart": "Boolean",
            "jumping": "Boolean",
            "flying": "Boolean"
        },
        "Beetle": undefined,
        "Piranha": {
            "evil": "Boolean"
        },
        "Blooper": undefined,
        "CheepCheep": {
            "smart": "Boolean"
        },
        "Podoboo": undefined,
        "Lakitu": undefined,
        "HammerBro": undefined,
        "Bowser": {
            "contents": {
                "type": "String",
                "options": [
                    "Gooma", "Koopa", "HammerBro", "Bowser"
                ]
            }
        }
    },
    "Items": {
        "Mushroom": undefined,
        "Mushroom1Up": undefined,
        "MushroomDeathly": undefined,
        "FireFlower": undefined,
        "Star": undefined,
        "Shell": {
            "smart": "Boolean"
        },
        "BeetleShell": undefined,
        "Coin": undefined
    },
    "Solids": {
        "Block": {
            "contents": {
                "type": "String",
                "options": [
                    "Coin", "Mushroom", "Star", "Mushroom1Up", "MushroomDeathly"
                ]
            },
            "hidden": "Boolean"
        },
        "Brick": {
            "contents": {
                "type": "String",
                "options": [
                    "", "Coin", "Mushroom", "Star", "Mushroom1Up", "MushroomDeathly"
                ]
            }
        },
        "Pipe": {
            "height": {
                "type": "Number",
                "value": 8,
                "mod": 8,
                "Infinite": true
            }
        },
        "PipeHorizontal": {
            "width": {
                "type": "Number",
                "value": 2,
                "mod": 8
            },
            "transport": "Location"
        },
        "PipeVertical": {
            "height": {
                "type": "Number",
                "value": 2,
                "mod": 8,
                "Infinite": true
            },
            "transport": "Location"
        },
        "Platform": {
            "width": 2
        },
        "Stone": {
            "width": 1,
            "height": {
                "type": "Number",
                "value": 1,
                "Infinite": true
            }
        },
        "Cannon": {
            "height": 1
        },
        "Springboard": undefined,
        "Floor": {
            "width": 8,
            "height": {
                "type": "Number",
                "value": Infinity,
                "Infinite": true
            }
        },
        "CastleBlock": {
            "fireballs": {
                "value": 0,
                "mod": 4
            }
        },
        "CastleBridge": {
            "width": 8
        },
        "Coral": {
            "width": 8,
            "height": 8
        }
    },
    "Scenery": {
        "BrickPlain": undefined,
        "Bush1": undefined,
        "Bush2": undefined,
        "Bush3": undefined,
        "Cloud1": undefined,
        "Cloud2": undefined,
        "Cloud3": undefined,
        "Fence": {
            "width": 8
        },
        "HillSmall": undefined,
        "HillLarge": undefined,
        "PlantSmall": undefined,
        "PlantLarge": undefined,
        "Railing": undefined,
        "Water": undefined
    }
}, {
    "Fill": {
        "description": "Place a bunch of Things at once, as a grid.",
        "options": {
            "thing": "Everything",
            "xnum": 1,
            "ynum": 1,
            "xwidth": 8,
            "yheight": 8
        }
    },
    "Pattern": {
        "description": "Fill one of the preset Scenery background patterns.",
        "options": {
            "pattern": [
                "BackRegular", "BackCloud", "BackFence", "BackFenceMin", "BackFenceMin2", "BackFenceMin3"
            ],
            "repeat": "Number"
        }
    },
    "Floor": {
        "description": "Place a floor of infinite height.",
        "options": {
            "width": {
                "type": "Number",
                "value": 8,
                "mod": 4
            }
        }
    },
    "Pipe": {
        "description": "Add a pipe with the option for piranhas and moving to locations.",
        "options": {
            "height": 8,
            "piranha": "Boolean",
            "transport": "Location",
            "entrance": "Location"
        }
    },
    "Tree": {
        "description": "Add a tree to the map.",
        "options": {
            "width": {
                "type": "Number",
                "value": 4,
                "mod": 8
            }
        }
    },
    "Shroom": {
        "function": "macroShroom",
        "description": "Add a mushroom tree to the map.",
        "options": {
            "width": {
                "type": "Number",
                "value": 4,
                "mod": 8
            }
        }
    },
    "Scale": {
        "function": "macroScale",
        "description": "Add two platforms suspended by string to the map.",
        "options": {
            "widthLeft": {
                "type": "Number",
                "value": 6,
                "mod": 4
            },
            "widthRight": {
                "type": "Number",
                "value": 6,
                "mod": 4
            },
            "between": {
                "type": "Number",
                "value": 10,
                "mod": 4
            },
            "dropLeft": {
                "type": "Number",
                "value": 6,
                "mod": 4
            },
            "dropRight": {
                "type": "Number",
                "value": 6,
                "mod": 4
            },
        }
    },
    "Water": {
        "function": "macroWater",
        "description": "Fill water of infinite height.",
        "options": {
            "width": 4
        }
    },
    "CastleSmall": {
        "description": "Add a one-story castle to the map."
    },
    "CastleLarge": {
        "description": "Add a two-story castle to the map."
    },
    "Ceiling": {
        "description": "Add an Underworld-style ceiling of Bricks.",
        "options": {
            "width": "Number"
        }
    },
    "Bridge": {
        "description": "Create a bridge, complete with stone columns.",
        "options": {
            "width": 8,
            "start": "Boolean",
            "end": "Boolean"
        }
    },
    "PlatformGenerator": {
        "description": "Add a columnn of infinitely generated platforms.",
        "options": {
            "width": 8,
            "direction": {
                "type": "Number",
                "options": [1, -1]
            }
        }
    },
    "StartInsideCastle": {
        "description": "Add the castle stones similar to typical Castles.",
        "options": {
            "width": 8
        }
    },
    "EndOutsideCastle": {
        "description": "End the map off with an outdoor flag and Castle.",
        "options": {
            "transport": "Location",
            "large": "Boolean",
            "castleDistance": {
                "type": "Number",
                "value": 24,
                "mod": 1,
            },
            "walls": {
                "type": "Number",
                "value": 2
            }
        }
    },
    "EndInsideCastle": {
        "description": "End the map off with an indoor bridge, Bowser, and Toad.",
        "options": {
            "transport": "Location",
            "npc": {
                "type": "String",
                "options": ["Toad", "Peach"]
            },
            "hard": "Boolean",
            "spawnType": "Everything",
            "throwing": "Boolean",
            "topScrollEnabler": "Boolean"
        }
    }
});
