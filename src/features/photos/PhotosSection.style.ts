import { makeStyles } from 'tss-react/mui';

const usePhotosStyle = makeStyles()(() => {
    return {
        container: {
            padding: '25px 0px 25px 30px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
        },
    };
});
export default usePhotosStyle;