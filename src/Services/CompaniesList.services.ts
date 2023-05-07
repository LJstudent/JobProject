// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { JobOfferResolver } from '../State/resolvers/JobOfferResolver'
import { CompaniesList } from '../Types/CompaniesList.Types'

// Define a service using a base URL and expected endpoints
export const jobProjectApi = createApi({
  reducerPath: 'jobProjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.2.8:3004' }),
  endpoints: (builder) => ({
    getJobOffers: builder.query<CompaniesList[], void>({
      query: () => `/job-offers`,
      transformResponse(response: []) {
        return JobOfferResolver(response)
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobOffersQuery } = jobProjectApi