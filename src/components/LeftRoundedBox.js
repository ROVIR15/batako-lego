import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import {MonTypo, BalooTypo} from './FontStyles'
 
export default function LeftRoundedBox(){
	return (
      <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '30px 0 0 30px'}}>
          <Grid container spacing={2} direction="row" justify="flex-end" alignItems="center" className={classes.GridColoredPaper} style={{backgroundImage: `url(${Hero2})`, backgroundSize: 'cover', width: 'initial'}}>
            <div id="apaini" className={classes.disp} style={{height:  `${window.innerHeight}`}}>
              <BalooTypo style={{color:"white", fontSize:"72px"}}> Hasil Test </BalooTypo>
            </div>
          </Grid>
            <Grid id="product" spacing={2} container direction="row" justify="felx-start" alignItems="flex-start" style={{padding: '2em 4em', paddingTop: '3em'}}>
              <Grid item xs justify="flex-start" alignItems="flex-start">
                <BalooTypo style={{color:"#FFD85E", fontSize: "3rem"}}> About Us </BalooTypo>
                <div className={classes.line}></div>
              </Grid>
              <Grid item xs style={{borderLeft: '1px solid white'}}>
                <MonTypo style={{color:"white", fontSize:"1.4rem"}}> Starting business since 2012 as mushroom gourmet producers, our team realize that mushroom can save the world. After one year growing mushroom medium, we found  mushroom grown bag are become harden and hard to breakdown. Since then we initiate a research to develop this kind of phenomenon from our kitchen by borrowing mom’s pressure cooker. Luckily we don’t have to break many mom’s kitchen tools after had a full access to mycology lab of Indonesian government owned  research agency and world class laboratories in Singapore and Switzerland. Since that we are developing this material from scratch from lab scale into pilot scale. Our mission is to deliver sustainable material from renewable resources with affordability. </MonTypo>
              </Grid>
            </Grid>
        </YellowPaper>
      </Grid>
	)
}