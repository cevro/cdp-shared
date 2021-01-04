import { BackendSignal } from './interfaces/signal';
import { BackendTurnout } from './interfaces/turnout';
import { BackendSector } from './interfaces/sector';

export type MapObjects<T> = {
    [id in string]: T;
};

export interface WebSocketStateUpdateMessage {
    store: BackendStore;
}

export interface BackendStore {
    signals: MapObjects<BackendSignal.Definition>;
    turnouts: MapObjects<BackendTurnout.Definition>;
    sectors: MapObjects<BackendSector.Definition>;
    routeBuilder: { buffer: any[] };
}
