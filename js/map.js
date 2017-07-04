var map = {
  tiles: [
    '++++++++++++++++++++++++++++++++++++++++',
    '++++++++++++++++++++++++++++++++++++++++',
    '+++++    ++    ++    +++++++++++++++++++',
    '+++++ $  ++ ++ ++ ++  ++++++++++++++++++',
    '+++++       ++    ++  ++++++++++++++++++',
    '++++++++++++++++++++   +++++++++++++++++',
    '+++++++++++++++++++    +++++++++++++++++',
    '++++++++++++++++++       +++++++++++++++',
    '+++++++++   ++++            ++++++++++++',
    '+++++++                      +++++++++++',
    '+++++                         ++++++++++',
    '+++                                   ++',
    '++                                    ++',
    '++                                   +++',
    '++                                  ++++',
    '++                                ++++++',
    '++                                ++++++',
    '++++++++                             +++',
    '++++++++                   ++++++       ',
    '++++++++                   ++++++       ',
    '+++++++                    ++++++    +++',
    '++++++++                   +++++   +++++',
    '+++++++++++                 +++   ++++++',
    '++++++++++++++      +++++       ++++++++',
    '+++++++++++++++    ++++++++    +++++++++',
    '++++    +++++++    +++++++++++++++++++++',
    '+++       +++++    +++++++++++++++++++++',
    '++  ++++           +++++++++++++++++++++',
    '++  ++++++++++++++++++++++++++++++++++++',
    '++  ++++++++++++++++++++++++++++++++++++',
  ],
/*types: {
    '+': 'bush',
    ' ': 'soil',
    '$': 'stone',
    'x': 'mud',
  },*/
  types: [
    {
			'name': 'bush',
			'sign': '+',
			'permission': 'forbidden'
		},
		{
			'name': 'soil',
			'sign': ' ',
			'permission': 'allowed'
		},
		{
			'name': 'stone',
			'sign': '$',
			'permission': 'allowed'
		},
		{
			'name': 'mud',
			'sign': 'x',
			'permission': 'allowed'
		}
	]
};