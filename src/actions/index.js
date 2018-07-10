export function selectBook(book) {
  // is action creator, needs to return an action (js object with a type property)
  // basically a type and a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
