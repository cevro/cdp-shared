export namespace BackendRouteLock {

    export type State = 'waiting' | 'building' | 'built';

    export interface BuildOptions {
        PN?: boolean;
        40?: boolean;
        alert?: boolean;
    }

    export interface Snapshot {
        buildOptions: BuildOptions;
        state: State;
        routeUId: string;
        lockUId: string;
        reason: string;
    }
}
