import { NPC } from './npc.model';

export class Encounter {
    Name: string;
    Npcs: NPC[];

    constructor(name){
        this.Name = name,
        this.Npcs = [];
    }
}