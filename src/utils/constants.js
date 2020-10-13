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
    style: { width: '30%' },
  },
  {
    title: 'Program',
    property: 'program',
    style: { width: '65%' },
  },
  {
    title: 'Quota',
    property: 'quota',
    data: quotas,
    style: { width: '5%' },
  },
  {
    title: 'Categories',
    property: 'category',
    data: categories,
    style: { width: '5%' },
  },
  {
    title: 'Seat Type',
    property: 'seat',
    data: seatTypes,
    style: { width: '5%' },
  },
  {
    title: 'Opening Rank',
    property: 'openingRank',
    style: { width: '5%' },
  },
  {
    title: 'Closing Rank',
    property: 'closingRank',
    style: { width: '5%' },
  },
  {
    title: 'College Type',
    property: 'type',
    style: { width: '5%' },
  },
  {
    title: 'Course Duration',
    property: 'courseDuration',
    data: courseDuration,
    style: { width: '5%' },
  },
]

export { categories, seatTypes, columns }
