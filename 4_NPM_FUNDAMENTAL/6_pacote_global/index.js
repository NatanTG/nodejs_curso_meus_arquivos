import lodash from 'lodash';

const a = [1, 2, 3, 2, 3, 4, 3, 4, 5];


const uniq = lodash.sortedUniq(a);

console.log(uniq);