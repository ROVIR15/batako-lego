import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    fontHeader: {
      fontSize: '1.25rem',
    },
    fontBody: {
      fontColor: '#e6e6e6',
      margin: '0.95em 0',
      fontSize: '0.75rem'
    },
    line: {
      borderBottom: '5px solid #AF1E09',
      width: '12em',
      marginRight: '6em',
      marginTop: '0.2em'
    },
    conf: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '0 3em',
      width: '50%'
    },
    disp: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '0 3em',      
    },
    GridColoredPaper: {
      margin: 0, 
      width: "inherit", 
      padding: '3em', 
    }
}))