import React from 'react'

import {Paper, withStyles} from '@material-ui/core';

export const YellowPaper = withStyles({
  root: {
    background: 'linear-gradient(180deg, rgba(231,28,7,1) 0%, rgba(255,70,0,1) 100%)',
	height: `auto`,
    width: `95%`,
  },
  rounded: {
    borderRadius: '30px 0 0 30px'
  }
})(Paper)

export const GreyPaper = withStyles({
  root: {
    background: '#707070',
    height: `auto`
  },
  rounded: {
    borderRadius: '30px 30px 0 0'
  }
})(Paper)

export const WhitePaperBorder = withStyles({
  root: {
    background: 'white',
	height: `auto`,
    width: `95%`
  },
  rounded: {
    borderRadius: '30px 0 0 30px'
  }
})(Paper)

export const PlainPaper = withStyles({
  root: {
    boxShadow: 'unset',
	height: `auto`,
    width: `calc(${window.innerWidth}px - 73px)`,
  },
  rounded: {
    borderRadius: '30px 0 0 30px'
  }
})(Paper)

export const CirclePaper = withStyles({
  root: {
    height: `4em`,
    width: `4em`,
    position: 'absolute',
    margin: '0 7.5%',
    backgroundColor: 'red',
  },
  rounded: {
    borderRadius: '30px'
  }
})(Paper)

export const ValuesPaper = withStyles({
  root: {
    backgroundColor: 'white',
    margin: '2em 0',
    border: '1px solid #707070', 
    padding: '2em',
    minHeight: '14em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  rounded: {
    borderRadius: '30px'
}})(Paper)

export const ProductPaper = withStyles({
  root: {
    boxShadow: 'unset',
    backgroundColor: 'white',
    margin: '2em 0',
    padding: '2em',
    minHeight: '14em',
    maxHeight: '14.5em',
    textAlign: 'center',
    backgroundColor: 'orange'
  },
  rounded: {
    borderRadius: '30px'
}})(Paper)

export const ProductPaperSmall = withStyles({
  root: {
    boxShadow: 'unset',
    backgroundColor: 'white',
    margin: '2em 0',
    padding: '2em',
    paddingTop: '3em',
    minHeight: '12em',
    maxHeight: '12.5em',
    textAlign: 'center',
  },
  rounded: {
    borderRadius: '30px'
}})(Paper)

export const TestiPaper = withStyles({
  root: {
    boxShadow: 'unset',
    backgroundColor: 'white',
    margin: '2em 0',
    padding: '2em',
    minHeight: '14em',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  rounded: {
    borderRadius: '30px',
    border: '1px solid black'
}})(Paper)