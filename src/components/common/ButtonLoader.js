import { LoadingButton } from "@mui/lab"
import { CircularProgress } from "@mui/material"


const ButtonLoader = () => {
    return (
        <LoadingButton
            loading
            variant="outlined"
            sx={{ width: '169px', height: '40px', mb: '13px' }}
            loadingIndicator={<CircularProgress color="error" size={30} />}
        />
    )
}

export default ButtonLoader