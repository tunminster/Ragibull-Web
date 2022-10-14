
import { LoadingButton } from "@mui/lab"
import { CircularProgress } from "@mui/material"
import "./loader.scss"

const ScreenLoader=()=>{
    return (
        <>
        <div className="screenLoad">   
        <LoadingButton
            loading
            loadingIndicator={<CircularProgress color="error" size={40} />}
        />
        </div>
        </>
    )
}

export default ScreenLoader