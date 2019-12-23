import React from 'react'

import Hero2 from '../assets/img/hero-background-2.png'
import Hero3 from '../assets/img/Hero3.png'

import {BalooTypo, MonTypo} from '../components/FontStyles'
import {useStyles} from '../assets/classes'
import { Grid, Typography } from '@material-ui/core'
import {YellowPaper} from '../components/Paper'

export default function AboutUs() {
	const classes = useStyles()
	return (
      <>
      <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '30px 0 0 30px', height: `auto`}}>
          	<Grid container spacing={2} direction="row" justify="flex-end" alignItems="center" className={classes.GridColoredPaper} style={{backgroundImage: `url(${Hero2})`, backgroundSize: 'cover', width: 'initial', height:  `calc(${window.innerHeight}px - 3em)`}}>
            	<div id="apaini" className={classes.disp}>
              		<BalooTypo style={{color:"white", fontSize:"72px"}}> Hasil Test </BalooTypo>
            	</div>
          	</Grid>
            <Grid id="product" spacing={2} container direction="row" justify="felx-start" alignItems="flex-start" style={{padding: '2em 4em', paddingTop: '3em', width: "100%"}}>
              	<Grid item xs justify="flex-start" alignItems="flex-start">
                	<BalooTypo style={{color:"#FFD85E", fontSize: "3rem"}}> About Us </BalooTypo>
                	<div className={classes.line}></div>
              	</Grid>
              	<Grid item xs style={{borderLeft: '1px solid white'}}>
                	<MonTypo style={{color:"white", fontSize:"1rem"}}> Starting business since 2012 as mushroom gourmet producers, our team realize that mushroom can save the world. After one year growing mushroom medium, we found  mushroom grown bag are become harden and hard to breakdown. Since then we initiate a research to develop this kind of phenomenon from our kitchen by borrowing mom’s pressure cooker. Luckily we don’t have to break many mom’s kitchen tools after had a full access to mycology lab of Indonesian government owned  research agency and world class laboratories in Singapore and Switzerland. Since that we are developing this material from scratch from lab scale into pilot scale. Our mission is to deliver sustainable material from renewable resources with affordability. </MonTypo>
              	</Grid>
            </Grid>
        </YellowPaper>
      </Grid>
        <Grid container direction="row-reverse" style={{marginTop: '4em'}}>
            <div style={{width: '5%', height: `calc(${window.innerHeight}px * 2)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
                <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
                <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
                </div>
            </div>
            <YellowPaper elevation={20} style={{borderRadius: '0 30px 30px 0', height: 'auto', padding: '5em'}}>
            <Grid container>
                <Grid item direction="column" style={{marginBottom: '3rem'}}>
                <BalooTypo style={{color:"#FFD85E", fontSize:"3rem"}}> Our Co-Founders </BalooTypo>
                    <div className={classes.line} style={{width: '32em', marginLeft: '3rem'}}></div>
                <MonTypo style={{color:"white",fontSize:"1.75rem"}}> All the co-founders are also the owners of this company. </MonTypo>
                </Grid>
            </Grid>
            <Grid container spacing={4}  style={{marginTop: '3rem'}}>
            {[0,1,1,1,1].map(function(x, index){
                return (
                <Grid item container xs={6} alignItems="center" direction="column" style={{width: 'auto', margin: '2em auto', paddingRight: '10em'}}>
                    <BalooTypo style={{color:"#FFD85E", fontSize:"2rem", position: 'absolute'}}> Samsul Bahrie </BalooTypo>
                    <Grid container direction="row" spacing={2}>
                    <div style={{width: '45%', paddingTop: '3rem', paddingRight: '1em', textAlign: 'right'}}>
                        <MonTypo style={{color:"white",fontSize:"1rem"}} variant="h1"> CEO and Founder </MonTypo>
                    </div>
                    <img src={Hero3} alt="wow" style={{width: '45%', height: '14em'}}/>
                    </Grid>
                </Grid>
                )
            })}
            </Grid>
            </YellowPaper>
        </Grid>
    </>
	)
}