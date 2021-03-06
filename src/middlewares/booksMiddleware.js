import { bookActionsNames, bookActions } from '../actions';
import api from '../api/api';

const booksMiddleware = store => next => async action => {
  const {
    FETCH_BOOK_DATA,
    REMOVE_BOOK,
    UPDATE_BOOK_PROGRESS,
    CREATE_BOOK,
  } = bookActionsNames;

  const { addBookData } = bookActions;

  switch (action.type) {
    case FETCH_BOOK_DATA: {
      next(action);

      try {
        const response = await api.get('/books/');
        const { data } = response;
        store.dispatch(addBookData(data));
      } catch (error) {
        throw new Error(error);
      }

      break;
    }

    case CREATE_BOOK: {
      next(action);
      const { book } = action;

      try {
        await api.post('/books', book);
      } catch (error) {
        throw new Error(error);
      }

      break;
    }

    case REMOVE_BOOK: {
      next(action);

      const { id } = action;

      try {
        await api.delete(`/books/${id}`);
      } catch (error) {
        throw new Error(error);
      }

      break;
    }

    case UPDATE_BOOK_PROGRESS: {
      next(action);
      const { id, progress } = action;

      try {
        await api.put(`/books/${id}`, { progress });
      } catch (error) {
        throw new Error(error);
      }

      break;
    }

    default:
      next(action);
  }
};

export default booksMiddleware;
