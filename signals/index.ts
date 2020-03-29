import zstPUSignals from '../objects/zst/pu/signals';
import linePuLpmSignals from '../objects/line/pu-lpm';
import {SignalBuffer, SignalTypeDefinition} from "@app/consts/signals/interfaces";

const signals: SignalBuffer = {
    ...linePuLpmSignals,
    ...zstPUSignals,
};

export function getSignalDefinition(key: string): SignalTypeDefinition {
    return signals[key];
}

export function getAllSignals(): SignalTypeDefinition[] {
    const signalsArray = [];
    for (const index in signals) {
        if (signals.hasOwnProperty(index)) {
            signalsArray.push(signals[index]);
        }
    }
    return signalsArray;
}
