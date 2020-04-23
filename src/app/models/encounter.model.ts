import { NPC } from './npc.model';

export class Encounter {
    name: string;
    npcs: NPC[];

    constructor(name){
        this.name = name;
    }
}