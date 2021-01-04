export namespace BackendSector {
    export interface Definition {
        name: string | null;
        sectorId: number;
        sectorUId: string;
        locked: boolean;
        occupied: boolean;
    }

    export type States = 'occupied' | 'free' | 'locked' | 'undefined';
}
