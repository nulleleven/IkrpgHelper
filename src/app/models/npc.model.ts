export class NPC {
    Name: string;
    Spd: Number;
    Mat: Number;
    Rat: Number;
    Def: Number;
    Arm: Number;
    Abilities: string[];

    constructor(name){
        this.Name = name;
        this.Spd = 0;
        this.Mat = 0;
        this.Rat = 0;
        this.Def = 0;
        this.Arm = 0;
        this.Abilities = [];
    }
}