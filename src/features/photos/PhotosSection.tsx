import {Box, Typography} from "@mui/material";
import usePhotosStyle from "@features/photos/PhotosSection.style";
import {useTranslation} from "react-i18next";

function PhotosPage () {
    const { classes } = usePhotosStyle();
    const { t } = useTranslation();
    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.my-photos')}
                </Typography>
            </>
        </Box>
    );
}

export default PhotosPage;