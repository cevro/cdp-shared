import zstPuTurnouts from "@app/consts/objects/zst/pu/turnouts";

export interface TurnoutDefinition {
    name: string;
    locoNetId: number;
    sector?: number;
}

export interface TurnoutSchemeDefinition extends TurnoutDefinition {
    home: RequestedTurnoutPosition;
    SVGData: {
        x: number;
        y: number;
        rotate: number;
        dir: 'L' | 'P';
    };
}

const turnouts = {
    ...zstPuTurnouts
};

export type RequestedTurnoutPosition = -1 | 1;

export type TurnoutPosition = RequestedTurnoutPosition | 0;

export function getTurnoutDefinition(key: string): TurnoutDefinition {
    return turnouts[key];
}

export function getAllTurnouts(): TurnoutDefinition[] {
    const turnoutsArray = [];
    for (const index in turnouts) {
        if (turnouts.hasOwnProperty(index)) {
            turnoutsArray.push(turnouts[index]);
        }
    }
    return turnoutsArray;
}
