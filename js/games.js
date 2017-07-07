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
                'permission': 'allowed'
            }, {
                'name': 'monster',
                'sign': 'm',
                'permission': 'allowed'
            }

        ]
    },
    {
        world1: [
            {
                level1: {
                    map: [
                        '+++++++++++++++++++++++++',
                        '+++++++++++++++++++++++++',
                        '+++++    ++    ++    ++++',
                        '+++++    ++    ++     +++',
                        '+++++                 +++',
                        '++++              m     d',
                        '+++                     d',
                        '+++                    ++',
                        '+++     $              ++',
                        '+++          m         ++',
                        '+++                    ++',
                        '+++                    ++',
                        '++                     ++',
                        '++                     ++',
                        '++    +++++++++++++++++++',
                        '++    +++++++++++++++++++',
                    ],
                    monster: 3,
                    hero: 1
                }
            }, {
                level2: {
                    map: [
                        '+++++++++++++++++++++++++',
                        '+++++++++++++++++++++++++',
                        '+++++                ++++',
                        '+++++                 +++',
                        '+++++     m           +++',
                        '++++                     ',
                        'd                        ',
                        'd                   $  ++',
                        '+++          m         ++',
                        '+++                    ++',
                        '+++                    ++',
                        '+++                    ++',
                        '++                     ++',
                        '++                     ++',
                        '++    +++++++++++++++++++',
                        '++    +++++++++++++++++++',
                    ],
                    monster: 2,
                    hero: 1
                }
            }, {
                level3: {
                    map: [
                        '+++++++++++++++++++++++++',
                        '+++++++++++++++++++++++++',
                        '+++++                   d',
                        '+++++            m      d',
                        '+++++++++++++         +++',
                        '+++++++++++++          ++',
                        '                       ++',
                        '                       ++',
                        '+++                    ++',
                        '+++                $   ++',
                        '+++          m         ++',
                        '+++                    ++',
                        '++                     ++',
                        '++                     ++',
                        '++    +++++++++++++++++++',
                        '++    +++++++++++++++++++',
                    ],
                    monster: 5,
                    hero: 1
                }
            }
        ],
    },
    {
        world2: [
            {
                level1: {
                    map: [
                        'xxxxxxxxxxxdddxxxxxxxxxxx',
                        'xxxxxxxxxxx   xxxxxxxxxxx',
                        '+++++    ++    ++    ++++',
                        'xxxxx    ++    ++     +++',
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
                    monster: 3,
                    hero: 1
                }
            }, {
                level2: {
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
                    monster: 2,
                    hero: 1
                }
            }, {
                level3: {
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
                    monster: 5,
                    hero: 1
                }
            }
        ]
    },{
        world3: [
            {
                level1: {
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
                    monster: 3,
                    hero: 1
                }
            }, {
                level2: {
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
                    monster: 2,
                    hero: 1
                }
            }, {
                level3: {
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
                    monster: 5,
                    hero: 1
                }
            }
        ]
    }

];
