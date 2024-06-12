const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
console.log(friends.join(','));
// 3
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
const cardToRemove = cards.splice(0, 3);
console.log(cards);
console.log(cardToRemove);
const cardToInsert = (5, 1, 'Карточка-6');
console.log(cardToInsert);
const cardToUpdate = (3, 1, 'Карточка-4');

