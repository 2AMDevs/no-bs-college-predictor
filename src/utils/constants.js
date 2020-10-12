const categories = [
  'OPEN',
  'OPEN (PwD)',
  'GEN-EWS',
  'GEN-EWS(PwD)',
  'OBC-NCL',
  'OBC-NCL(PwD)',
  'SC',
  'SC (PwD)',
  'ST',
  'ST (PwD)',
]

const quotas = [
  'All',
  'AI',
  'HS',
  'OS',
  'AP',
  'GO',
]

const courseDuration = [
  'All',
  '4 Years',
  '5 Years',
]

const seatTypes = ['All', 'Gender-Neutral', 'Female-Only']

const columns = [
  {
    title: 'Institute name',
    property: 'institute',
  },
  {
    title: 'Program',
    property: 'program',
  },
  {
    title: 'Quota',
    property: 'quota',
    data: quotas,
  },
  {
    title: 'Categories',
    property: 'category',
    data: categories,
  },
  {
    title: 'Seat Type',
    property: 'seat',
    data: seatTypes,
  },
  {
    title: 'Opening Rank',
    property: 'openingRank',
  },
  {
    title: 'Closing Rank',
    property: 'closingRank',
  },
  {
    title: 'College Type',
    property: 'type',
  },
  {
    title: 'Course Duration',
    property: 'courseDuration',
    data: courseDuration,
  },
]

export { categories, seatTypes, columns }
