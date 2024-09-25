import Alert from '@mui/material/Alert';

function NoEmptyErrors ({msg}){
    if (!msg){
    return;
    }

    return(
        <Alert servirty="error">{msg}</Alert>
    )
}

export default NoEmptyErrors
