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
                'name': 'link',
                'sign': 'l',
                'permission': 'none'
            }, {
                'name': 'monster',
                'sign': 'm',
                'permission': 'none'
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
                                    '+++++    ++    ++    ++++',
                                    '+++++    ++    ++     +++',
                                    '+++++                 +++',
                                    '++++                    d',
                                    '+++                     d',
                                    '+++                    ++',
                                    '+++     $              ++',
                                    '+++          m         ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '++                     ++',
                                    '++                 m   ++',
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
                                    '+++++                ++++',
                                    '+++++                 +++',
                                    '+++++     m           +++',
                                    '++++                     ',
                                    'd                        ',
                                    'd                   $  ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '+++                    ++',
                                    '++          m          ++',
                                    '++                     ++',
                                    '++    +++++++++++++++++++',
                                    '++    +++++++++++++++++++',
                                ],
                            }
                    }, {
                        level_3: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++                   d',
                                '+++++            m      d',
                                '+++++++++++++         +++',
                                '+++++++++++++          ++',
                                '                       ++',
                                '     m                 ++',
                                '+++                    ++',
                                '+++                $   ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                '++    +++++++++++++++++++',
                                '++    +++++++++++++++++++',
                            ],
                        }
                    }, {
                        level_4: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++                   d',
                                '+++++            m      d',
                                '+++++++++++++         +++',
                                '+++++++++++++          ++',
                                '                       ++',
                                '     m                 ++',
                                '+++                    ++',
                                '+++                $   ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                '++    +++++++++++++++++++',
                                '++    +++++++++++++++++++',
                            ],
                        }
                    }
                ],
            }, {
                world_2: [
                    {
                        level_1: {
                            map: [
                                'xxxxxxxxxxxdddxxxxxxxxxxx',
                                'xxxxxxxxxxx   xxxxxxxxxxx',
                                '+++++    ++    ++        ',
                                'xxxxx    ++    ++        ',
                                '+++++                 +++',
                                '++++                   ++',
                                '+++        m           ++',
                                '+++                    ++',
                                '+++     $              ++',
                                '+++             m      ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                'xx      xxxxxxxxxxxxxxxxx',
                                'xx      xxxxxxxxxxxxxxxxx',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                'xxxxxxxxxx     xxxxxxxxxx',
                                'xxxxxxxxxx     xxxxxxxxxx',
                                'xxxxx                xxxx',
                                'xxxxx                 +++',
                                'xxxxx                 +++',
                                'xxxx        m          ++',
                                '+++                    ++',
                                '+++                 $  ++',
                                '+++                    ++',
                                '+++    m               ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                'xxxxxxxxxxxxxxx   xxxxxxx',
                                'xxxxxxxxxxxxxxxdddxxxxxxx',
                            ],
                        }
                    }, {
                        level_3: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx                xxxx',
                                'xxxxx         m      xxxx',
                                'xxxxxxxxxxxx      xxxxxxx',
                                'xxxxxxxxx          xxxxxx',
                                '+++                    ++',
                                'd                      ++',
                                'd         m            ++',
                                '+++                $   ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                'xx      xxxxxxx   xxxxxxx',
                                'xx      xxxxxxx   xxxxxxx',
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
                                '+++++    ++    ++    ++++',
                                'xxxxx    ++    ++     +++',
                                '+++++                 +++',
                                '++++                   ++',
                                '+++         m          ++',
                                '+++                    ++',
                                '+++     $              ++',
                                '+++              m     ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++       m             ++',
                                '++                     ++',
                                '++        xxxxxxxxxxxxxxx',
                                '++    +++++++++++++++++++',
                            ],
                        }
                    }, {
                        level_2: {
                            map: [
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxxxxxxxxxxxxxxxxxxxxxx',
                                'xxxxx                xxxx',
                                'xxxxx                 +++',
                                'xxxxx        m        +++',
                                'xxxx                   ++',
                                '+++                    ++',
                                '+++                 $  ++',
                                '+++    m               ++',
                                '+++                    ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                '++    +++++++++++++++++++',
                                '++    +++++++++++++++++++',
                            ],
                        }
                    }, {
                        level_3: {
                            map: [
                                '+++++++++++++++++++++++++',
                                '+++++++++++++++++++++++++',
                                '+++++                ++++',
                                '+++++         m       +++',
                                '++++    xxxxxxxx      +++',
                                '++++    xxxxxxxx       ++',
                                '+++                    ++',
                                '+++                    ++',
                                '+++      m             ++',
                                '+++                $   ++',
                                '+++                    ++',
                                '+++                    ++',
                                '++                     ++',
                                '++                     ++',
                                '++    +++++++++++++++++++',
                                '++    +++++++++++++++++++',
                            ],
                        }
                    }
                ]
            }
        ]
    },
];
