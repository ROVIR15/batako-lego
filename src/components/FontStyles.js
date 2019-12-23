import React from 'react'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

export const BalooTypo = withStyles({root: {
	fontFamily: "'Baloo', cursive"
}})(Typography)

export const MonTypo = withStyles({root: {
	fontFamily: "'Montserrat', sans-serif"
}})(Typography)