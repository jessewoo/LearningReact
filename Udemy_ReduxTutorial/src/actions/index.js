// Action Creator, make sure Action Creator is wired up to Redux
// Can't just do a onclick handler
// Export it - so other files can use it.
export function selectBook(book) {
  // console.log('A book has been selected: ', book.title);
  // SelectBook is an ActionCreator, it needs to return an action
  // An Object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
