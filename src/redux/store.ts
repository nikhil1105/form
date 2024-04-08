import { configureStore } from '@reduxjs/toolkit';
import Data from './Data'

export default configureStore({
  reducer: {
    Data:Data,
  },
});
