export namespace BackendTurnout {
    export interface Definition {
        name: string;
        turnoutUId: string;
        turnoutId: number;
        basePosition: EndPosition;
        currentPosition: BackendTurnout.Position;
        requestedPosition: BackendTurnout.EndPosition | null;
    }

    export type EndPosition = 'D' | 'S';
    export type Position = EndPosition | 'U';
}
