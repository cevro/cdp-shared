import { BackendRouteLock } from 'app/consts/interfaces/routeLock';

export namespace BackedRouteBuilder {
    export interface Snapshot {
        buffer: BackendRouteLock.Snapshot[];
    }
}
