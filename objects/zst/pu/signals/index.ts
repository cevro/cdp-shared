import entrySignals from "@app/consts/objects/zst/pu/signals/entry";
import exitSignals from "@app/consts/objects/zst/pu/signals/exit";
import pathSignals from '@app/consts/objects/zst/pu/signals/path';
import shuntSignals from "@app/consts/objects/zst/pu/signals/shunt";

export default {
    ...entrySignals,
    ...exitSignals,
    ...pathSignals,
    ...shuntSignals,
};