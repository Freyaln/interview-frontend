import { api } from '@services';
import { PhotosDefinitionI } from './photos.types';

export const photosApi = api.injectEndpoints({
    endpoints: (builder) => ({
        photos: builder.mutation<PhotosDefinitionI[], void>({
            query: () => ({
                url: 'photos?_limit=100',
                method: 'GET'
            })
        })
    })
})

export const { usePhotosMutation } = photosApi;