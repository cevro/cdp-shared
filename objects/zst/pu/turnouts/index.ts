import {TurnoutSchemeDefinition} from "@app/consts/turnouts";

const turnouts: { [key: string]: TurnoutSchemeDefinition } = {
    'zst.pu.1': {
        name: '1',
        locoNetId: 1,
        home: 1,
        SVGData: {x: 125, y: 60, rotate: 0, dir: 'L'},
        sector: 4001,
    },
    'zst.pu.2': {
        name: '2',
        locoNetId: 2,
        home: 1,
        SVGData: {x: 150, y: 0, rotate: 0, dir: 'P'},
        sector: 1002,
    },
    'zst.pu.3': {
        name: '3',
        locoNetId: 3,
        home: 1,
        SVGData: {x: 175, y: 30, rotate: 180, dir: 'L'},
        sector: 2002,
    },

    'zst.pu.4': {
        name: '4',
        locoNetId: 4,
        home: 1,
        SVGData: {x: 200, y: 30, rotate: 180, dir: 'P'},
        sector: 2002,
    },
    'zst.pu.5': {
        name: '5',
        locoNetId: 5,
        home: 1,
        SVGData: {x: 225, y: 30, rotate: 0, dir: 'L'},
    },
    'zst.pu.6': {
        name: '6',
        locoNetId: 6,
        home: 1,
        SVGData: {x: 275, y: 30, rotate: 0, dir: 'P'},
    },
    'zst.pu.7': {
        name: '7',
        locoNetId: 7,
        home: 1,
        SVGData: {x: 275, y: 0, rotate: 180, dir: 'L'},
        sector: 1003,
    },
    'zst.pu.8': {
        name: '8',
        locoNetId: 8,
        home: 1,
        SVGData: {x: 325, y: 60, rotate: 180, dir: 'P'},
    },
    'zst.pu.9': {
        name: '9',
        locoNetId: 9,
        home: 1,
        SVGData: {x: 350, y: 0, rotate: 0, dir: 'L'},
        sector: 1004,
    },
    'zst.pu.10': {
        name: '10',
        locoNetId: 10,
        home: 1,
        SVGData: {x: 375, y: 60, rotate: 0, dir: 'P'},
    },
    'zst.pu.11': {
        name: '11',
        locoNetId: 11,
        home: 1,
        SVGData: {x: 400, y: 30, rotate: 0, dir: 'P'},
    },
    'zst.pu.12': {
        name: '12',
        locoNetId: 12,
        home: 1,
        SVGData: {x: 575, y: 180, rotate: 26.23, dir: 'L'},
    },
    'zst.pu.13': {
        name: '13',
        home: 1,
        locoNetId: 13,
        SVGData: {x: 400, y: -30, rotate: -26.23, dir: 'P'},
    },
    'zst.pu.14a': {
        name: '',
        locoNetId: 1014,
        home: 1,
        SVGData: {x: 450, y: 60, rotate: 0, dir: 'P'},
    },
    'zst.pu.14b': {
        name: 'a14b',
        locoNetId: 2014,
        home: 1,
        SVGData: {x: 450, y: 60, rotate: 180, dir: 'P'},
    },
    'zst.pu.15': {
        name: '15',
        locoNetId: 15,
        home: -1,
        SVGData: {x: 500, y: 90, rotate: 26.23, dir: 'L'},
    },
    'zst.pu.16': {
        name: '16',
        locoNetId: 16,
        home: -1,
        SVGData: {x: 625, y: 210, rotate: 26.23, dir: 'L'},
    },
    'zst.pu.17': {
        name: '17',
        locoNetId: 17,
        home: 1,
        SVGData: {x: 550, y: 90, rotate: 0, dir: 'P'},
    },
    'zst.pu.18': {
        name: '18',
        locoNetId: 18,
        home: 1,
        SVGData: {x: 675, y: 210, rotate: 0, dir: 'P'},
    },

    'zst.pu.21a': {
        name: 'a21b',
        locoNetId: 1021,
        home: 1,
        SVGData: {x: 1150, y: 240, rotate: 180, dir: 'L'},
    },
    'zst.pu.21b': {
        name: '',
        locoNetId: 2021,
        home: 1,
        SVGData: {x: 1150, y: 240, rotate: 0, dir: 'L'},
    },

    'zst.pu.22': {
        name: '22',
        locoNetId: 22,
        home: 1,
        SVGData: {x: 1200, y: 210, rotate: 180, dir: 'L'},
    },

    'zst.pu.23': {
        name: '23',
        locoNetId: 23,
        home: 1,
        SVGData: {x: 1050, y: -30, rotate: 180, dir: 'P'},
    },
    'zst.pu.24': {
        name: '24',
        locoNetId: 24,
        home: 1,
        SVGData: {x: 1425, y: 0, rotate: 0, dir: 'P'},
    },
    'zst.pu.25': {
        name: '25',
        locoNetId: 25,
        home: 1,
        SVGData: {x: 1475, y: 30, rotate: 180, dir: 'P'},
    },
    /* {
         name: '26',
         locoNetId: 26,
         home: 1,
         SVGData: {x: 1500, y: 30, rotate: 0, dir: 'P'},
     },
     {
         name: '27',
         locoNetId: 27,
         home: 1,
         SVGData: {x: 1400, y: 180, rotate: 153.77, dir: 'P'},
     },
     {
         name: '28',
         locoNetId: 28,
         home: 1,
         SVGData: {x: 1450, y: 150, rotate: 153.77, dir: 'P'},
     },

     {
         name: '',
         locoNetId: 1029,
         home: 1,
         SVGData: {x: 1550, y: 60, rotate: 180, dir: 'P'},
     },

     {
         name: 'a29b',
         locoNetId: 2029,
         home: 1,
         SVGData: {x: 1550, y: 60, rotate: 0, dir: 'P'},
     },

     {
         name: '30',
         locoNetId: 30,
         home: 1,
         SVGData: {x: 1500, y: 120, rotate: 180, dir: 'L'},
     },

     {
         name: '31',
         locoNetId: 31,
         home: 1,
         SVGData: {x: 1600, y: 120, rotate: 0, dir: 'L'},
     },

     {
         name: '',
         locoNetId: 1032,
         home: 1,
         SVGData: {x: 1600, y: 90, rotate: 180, dir: 'P'},
     },

     {
         name: 'a32b',
         locoNetId: 2032,
         home: 1,
         SVGData: {x: 1600, y: 90, rotate: 0, dir: 'P'},
     },

     {
         name: '33',
         locoNetId: 33,
         home: 1,
         SVGData: {x: 1625, y: 0, rotate: 180, dir: 'P'},
     },

     {
         name: '',
         locoNetId: 1034,
         home: 1,
         SVGData: {x: 1650, y: 90, rotate: 180, dir: 'L'},
     },

     {
         name: 'a34b',
         locoNetId: 2034,
         home: 1,
         SVGData: {x: 1650, y: 90, rotate: 0, dir: 'L'},
     },

     {
         name: '',
         locoNetId: 1035,
         home: 1,
         SVGData: {x: 1650, y: 120, rotate: 180, dir: 'P'},
     },

     {
         name: 'a35b',
         locoNetId: 2035,
         home: 1,
         SVGData: {x: 1650, y: 120, rotate: 0, dir: 'P'},
     },
     {
         name: '36',
         locoNetId: 36,
         home: 1,
         SVGData: {x: 1650, y: 0, rotate: 0, dir: 'P'},
     },
     {
         name: '37',
         locoNetId: 37,
         home: 1,
         SVGData: {x: 1700, y: 60, rotate: 180, dir: 'L'},
     },
     {
         name: '38',
         locoNetId: 38,
         home: 1,
         SVGData: {x: 1750, y: 60, rotate: 0, dir: 'P'},
     },
     {
         name: '40',
         locoNetId: 40,
         home: 1,
         SVGData: {x: 1775, y: 60, rotate: 0, dir: 'L'},
     },

     {
         name: '41',
         locoNetId: 41,
         home: 1,
         SVGData: {x: 1700, y: 30, rotate: 180, dir: 'P'},
     },
     {
         name: '42',
         locoNetId: 42,
         home: 1,
         SVGData: {x: 1825, y: 30, rotate: 180, dir: 'L'},
     },

     {
         name: '43',
         locoNetId: 43,
         home: 1,
         SVGData: {x: 1850, y: 30, rotate: 0, dir: 'L'},
     },

     {
         name: '44',
         locoNetId: 44,
         home: 1,
         SVGData: {x: 1900, y: 0, rotate: 180, dir: 'L'},
     },*/
};

export default turnouts;