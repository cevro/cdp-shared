export namespace BackendApproval {
    export interface Snapshot {
        position: AvailablePosition;
    }

    export type EndPosition = 'F' | 'R';
    export type AvailablePosition = EndPosition | 'U';
}
