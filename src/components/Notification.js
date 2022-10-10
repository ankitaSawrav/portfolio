import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import { PropaneSharp } from '@mui/icons-material';

function Notification ({notify,setNotify}) {

    const handleClose = ()=>{
        setNotify({
            isOpen: false,
            message: "",
            type:""
        })
    }

    return(
        <Snackbar 

        open={notify.isOpen}
        autoHideDuration = {3000}
        anchorOrigin = {{vertical: 'top',
        horizontal: 'right'}}
        sx={{ marginTop: '5em' }}
        >
            <Alert 
                severity={notify.type} 
                variant= 'filled'
                onClose= {handleClose}
            
            >
                {notify.message}

            </Alert>
        </Snackbar>
    )
}

export default Notification