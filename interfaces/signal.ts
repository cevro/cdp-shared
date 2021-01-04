export namespace BackendSignal {
    export interface Definition {
        signalId: number;
        signalUId: string;
        name: string;
        type: Type;
        construction: Construction;
        lights: Light[];
        spec: {
            lastAutoBlock?: boolean;
        };
        displayedAspect: number;
        requestedAspect: number;
    }

    export type Construction = 'T' | 'K' | null;

    export type Type = 'entry' | 'exit' | 'path' | 'auto_block' | 'shunt';

    export type Light = 'HZ' | 'Z' | 'C' | 'B' | 'X' | 'DZ' | 'M';
}

export namespace Aspect {

    export interface AspectDescription {
        label: string;
        lights: BackendSignal.Light[];
    }

    interface AspectDescriptions {
        [key: number]: Aspect.AspectDescription;
    }

    export const UNDEFINED = -1;
    export const STOP = 0;
    export const CLEAR = 1;
    export const EXPECT_STOP = 2;
    export const EXPECT_REDUCE_SPEED = 3;
    export const CLEAR_WITH_REDUCE_SPEED = 4;
    export const TEST = 5;
    export const EXPECT_STOP_WITH_REDUCE_SPEED = 6;
    export const EXPECT_REDUCE_SPEED_WITH_REDUCE_SPEED = 7;
    export const PN = 8;
    export const SHUNT_ALLOWED = 9;
    export const UNSECURED_SHUNT_ALLOWED = 10;
    export const REPEAT_CLEAR = 11;
    export const REPEAT_EXPECT_STOP = 12;
    export const OFF = 13;
    export const REPEAT_EXPECT_REDUCE_SPEED = 14;
    export const REPEAT_EXPECT_STOP_WITH_REDUCE_SPEED = 15;

    export const aspectsAttributes: AspectDescriptions = {
        [Aspect.STOP]: {
            label: 'Stop',
            lights: ['C'],
        },
        [Aspect.CLEAR]: {
            label: 'Clear',
            lights: ['Z'],
        },
        [Aspect.EXPECT_STOP]: {
            label: 'Expect stop',
            lights: ['HZ'],
        },
        [Aspect.EXPECT_REDUCE_SPEED]: {
            label: 'Expect reduce speed',
            lights: ['HZ'],
        },
        [Aspect.CLEAR_WITH_REDUCE_SPEED]: {
            label: 'Clear with reduced speed',
            lights: ['Z', 'DZ'],
        },
        [Aspect.TEST]: {
            label: 'Test',
            lights: [],
        },
        [Aspect.EXPECT_STOP_WITH_REDUCE_SPEED]: {
            label: 'Expect stop with reduced speed',
            lights: ['HZ', 'DZ'],
        },
        [Aspect.EXPECT_REDUCE_SPEED_WITH_REDUCE_SPEED]: {
            label: 'Expect reduce speed with reduced speed',
            lights: ['HZ', 'DZ'],
        },
        [Aspect.PN]: {
            label: 'PN',
            lights: ['C', 'B'],
        },
        [Aspect.SHUNT_ALLOWED]: {
            label: 'Shunt allowed',
            lights: ['B'],
        },
        [Aspect.UNSECURED_SHUNT_ALLOWED]: {
            label: 'Unsecured shunt allowed',
            lights: ['C', 'B'],
        },
        [Aspect.REPEAT_CLEAR]: {
            label: 'Repeat clear',
            lights: ['Z', 'B'],
        },
        [Aspect.REPEAT_EXPECT_STOP]: {
            label: 'Repeat expect stop',
            lights: ['HZ', 'B'],
        },
        [Aspect.OFF]: {
            label: 'Off',
            lights: [],
        },
        [Aspect.REPEAT_EXPECT_REDUCE_SPEED]: {
            label: 'Repeat expect reduce speed',
            lights: ['HZ', 'B'],
        },
        [Aspect.REPEAT_EXPECT_STOP_WITH_REDUCE_SPEED]: {
            label: 'Repeat expect stop with reduced speed',
            lights: ['HZ', 'B', 'DZ'],
        },
        [Aspect.UNDEFINED]: {
            label: 'Undefined',
            lights: [],
        },
    };

    export const signalStateMapping = (state: number): string => {
        if (aspectsAttributes.hasOwnProperty(state)) {
            return aspectsAttributes[state].label;
        }
        throw new Error();
    };
}
