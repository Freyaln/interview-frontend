import {Box, ImageList, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import usePhotosStyle from "@features/photos/PhotosSection.style";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {PhotosDefinitionI} from "@services";
import {usePhotosMutation} from "@services/photos.api";
import {LoadingPage} from "@pages";

function PhotosPage () {

    const [ photos, setPhotos ] = useState<PhotosDefinitionI[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ fetchPhotos ] = usePhotosMutation();

    const { classes } = usePhotosStyle();
    const { t } = useTranslation();

    useEffect(() => {(
        async () => {
            const photosDatas = await fetchPhotos();
            //TODO fix the TS error
            setPhotos(photosDatas.data)
            setIsLoading(false)
        })
    ();
    }, [fetchPhotos]);

    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.my-photos')}
                </Typography>
            </>
            { isLoading ?
                <LoadingPage/>
                :
                <ImageList cols={ 4 } rowHeight={ 600 }>
                    { photos.map((i) => (
                        <ImageListItem key={ i.id }>
                            <img src={ `${i.url}?w=auto&fit=crop` }
                                 alt={ i.title }
                                 loading="lazy"/>
                            <ImageListItemBar
                                title={i.title}>
                            </ImageListItemBar>
                        </ImageListItem>
                    ))
                    }
                </ImageList>
            }
        </Box>
    )
}

export default PhotosPage;