export interface LocoNetDefinition {
    locoNetId: number;
}

export interface TrainRouteDump {
    buffer: TrainRouteBufferItem[];
    hasError: boolean;
    locked: boolean;
}

export interface TrainRouteBufferItem {
    id: number;
    state: string;
    name: string;
    reason: string;
    buildOptions: BuildOptions;
}


export interface ABSectorState extends LocoNetDefinition {
    state: number;
    errorCode: number,
    errorMessage: string,
    active: number,
    blockCondition: number;
}

export type ABRequestedDir = -1 | 1
export type ABDir = ABRequestedDir | 0;

export interface BiDirABState extends LocoNetDefinition {
    dir: ABDir;
}

export interface BuildOptions {
    PN: boolean;
    40: boolean;
    alert: boolean;
}

export interface RouteFinderRequest {
    startSignalId: number;
    endSectorId: number;
}

export namespace BackendSector {
    export interface Row {
        sector_id: number;
        sector_uid: string;
        name: string | null;
    }

    export interface Snapshot {
        name: string | null;
        sectorId: number;
        sectorUId: string;
        state: State;
    }

    export type State = 'busy' | 'free' | 'locked' | 'undefined';
}

export namespace BackendSignal {
    export interface Snapshot {
        displayAspect: number;
        requestedAspect: number;
        signalId: number;
        signalUId: string;
        name: string;
        type: Type;
        construction: Construction;
        lights: Light[];
        spec: {
            lastAutoBlock?: boolean;
        }
    }

    export interface Row {
        signal_id: number;
        signal_uid: string;
        name: string;
        loconet_id: number;
        type: 'entry' | 'exit' | 'path' | 'auto_block' | 'shunt';
        construction: 'T' | 'K' | null
        last_auto_block: boolean;
        lights: string;
    }

    export type Construction = 'T' | 'K' | null;

    export type Type = 'entry' | 'exit' | 'path' | 'auto_block' | 'shunt';

    export type Light = 'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ' | 'M';
}


export namespace BackendTurnout {
    export interface Snapshot {
        name: string;
        turnoutUId: string;
        turnoutId: number;
        basePosition: EndPosition;
        currentPosition: BackendTurnout.Position;
        requestedPosition: BackendTurnout.EndPosition | null;
    }
    export interface Row {
        turnout_id: number;
        turnout_uid: string;
        name: string;
        base_position: BackendTurnout.EndPosition;
    }

    export type EndPosition = 'D' | 'S';
    export type Position = EndPosition | 'U';
}


