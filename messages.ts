import { ENTITY_SECTOR, ENTITY_SIGNAL, ENTITY_TURNOUT } from 'app/consts/entity';
import { BackendSector, BackendSignal, BackendTurnout } from 'app/consts/interfaces';

export interface WebSocketStateUpdateMessage {
    data: {
        [ENTITY_SIGNAL]?: BackendSignal.Snapshot[]
        [ENTITY_SECTOR]?: BackendSector.Snapshot[],
        [ENTITY_TURNOUT]?: BackendTurnout.Snapshot[],
        // routeBuilder: routeBuilder.dumpBuffer(),
        // [ENTITY_AB_SECTOR]: autoBlockSectorFactory.dump(),
        // [ENTITY_BI_DIR_AB]: biDirAutoBlockFactory.dump(),
    }
}
