/**
 * Created by julien on 07/07/17.
 */
"use strict";
const Games = [
    {
        types: [
            {
                'name': 'bush',
                'sign': '+',
                'permission': 'forbidden'
            }, {
                'name': 'soil',
                'sign': ' ',
                'permission': 'allowed'
            }, {
                'name': 'stone',
                'sign': '$',
                'permission': 'allowed'
            }, {
                'name': 'mud',
                'sign': 'x',
                'permission': 'forbidden'
            }, {
                'name': 'door',
                'sign': 'd',
                'permission': 'allowed'
            }, {
                'name': 'arrow',
                'sign': 'a',
                'permission': 'allowed'
            }, {
                'name': 'monster',
                'sign': 'm',
                'permission': 'none'
            }, {
                'name': 'life',
                'sign': 'l',
                'permission': 'allowed'
            }

        ]
    }, {
        'worlds': [
            {
                world_1: [
                    {
                        level_1:
                            {
                                map: [
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '++++a           $     +++',
                                    '++++                    d',
                                    '+++          m          d',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++        m           ++',
                                    '++                     ++',
                                    '++                     ++',
                                    '++    +++++++++++++++++++',
                                    '++    +++++++++++++++++++',
                                ],
                            }
                    }, {
                        level_2:
                            {
                                map: [
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                    '+++++                 +++',
                                    '++++                     ',
                                    'd                        ',
                                    'd    m              $  ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++           m        ++',
                                    '+++                    ++',
                                    '++                     ++',
                                    '++                     ++',
                                    '+++++++++++++++++++++++++',
                                    '+++++++++++++++++++++++++',
                                ],
                            }
                    },
                ],
            }, {
                world_2: [
                    {
                        level_1: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx      ddd        xxx',
                                'xx                     xx',
                                '           m           xx',
                                '                       xx',
                                'xxx     $              xx',
                                'xxx             m      xx',
                                'xxx                    xx',
                                'xxx                   lxx',
                                'xx                     xx',
                                'xx                     xx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx                 xxx',
                                'xxxx        m          xx',
                                'xxx                    xx',
                                'xxx                 $  xx',
                                'xxx                    xx',
                                'xxx     m              xx',
                                'xxx                    xx',
                                'xxx                    xx',
                                'xx              m      xx',
                                'xx                     xx',
                                'xxxxxxxxxxxxxxx   xxxxxxx',
                                'xxxxxxxxxxxxxxxdddxxxxxxx',
                            ],
                        }
                    }
                ]
            }, {
                world_3: [
                    {
                        level_1: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx                   d',
                                'xxxx                    d',
                                'xxx         m           d',
                                'xxx                    xx',
                                'xxx     $              xx',
                                'xxx              m     xx',
                                'xxx                    xx',
                                'xxx                    xx',
                                'xx       m             xx',
                                'xx                     xx',
                                'xxxxxxxxxxxxxxx   xxxxxxx',
                                'xxxxxxxxxxxxxxx   xxxxxxx',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx                    ',
                                'xxxx                     ',
                                'xxx                      ',
                                'xxx                 $  xx',
                                'xxx    m               xx',
                                'xxx                    xx',
                                'xxx                    xx',
                                'xxx                    xx',
                                'xx                     xx',
                                'xx                     xx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                            ],
                        }
                    },
                ]
            }
        ]
    },
];
