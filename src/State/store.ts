import { configureStore } from '@reduxjs/toolkit'
import { jobProjectApi } from '../Services/CompaniesList.services'
import companyReducer from './slices/company/companySlice';

export const store = configureStore({
  reducer: {
    selectedCompany: companyReducer,
    // Add the generated reducer as a specific top-level slice
    [jobProjectApi.reducerPath]: jobProjectApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobProjectApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch