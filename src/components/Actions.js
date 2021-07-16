import React from 'react'
import Button from '@material-ui/core/Button'


export default function Actions({action, text, ...other}) {
    return (
        <Button 
            {...other}
            onClick={action}
            variant="contained"
            color="primary"
        >{text}
        </Button>
    )
}
