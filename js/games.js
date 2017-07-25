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
                'name': 'heart',
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
                                    '++++            $     +++',
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
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++      ddd        +++',
                                '++                     ++',
                                '           m           ++',
                                '                       ++',
                                '+++     $              ++',
                                '+++             m      ++',
                                '+++                    ++',
                                '+++                   l++',
                                '++                     ++',
                                '++                     ++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++l                +++',
                                '++++        m          ++',
                                '+++                    ++',
                                '+++                 $  ++',
                                '+++                    ++',
                                '+++     m              ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++              m      ++',
                                '++                     ++',
                                '+++++++++++++++   +++++++',
                                '+++++++++++++++ddd+++++++',
                            ],
                        }
                    }
                ]
            }, {
                world_3: [
                    {
                        level_1: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++                   d',
                                '++++                    d',
                                '+++         m           d',
                                '+++                    ++',
                                '+++     $              ++',
                                '+++              m     ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++       m             ++',
                                '++                     ++',
                                '+++++++++++++++   +++++++',
                                '+++++++++++++++   +++++++',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++                    ',
                                '++++                     ',
                                '+++                      ',
                                '+++                 $  ++',
                                '+++    m               ++',
                                '+++                    ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                            ],
                        }
                    },
                ]
            }
        ]
    },
];
