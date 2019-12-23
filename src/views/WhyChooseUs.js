import React from 'react'

import Hero2 from '../assets/img/hero-background-2.png'
import Hero3 from '../assets/img/Hero3.png'

import { Grid, Typography } from '@material-ui/core'
import { YellowPaper } from '../components/Paper'
import { useStyles } from '../assets/classes'
import { BalooTypo, MonTypo } from '../components/FontStyles'

export default function PerformanceTest(){
    const classes = useStyles()
    return (
        <>
        <Grid container direction="row" style={{marginBottom: '5em'}}>
          <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
              <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
              <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
              </div>
          </div>
          <YellowPaper elevation={20} style={{borderRadius: '30px 0 0 30px', height: `auto`}}>
              <Grid container spacing={2} direction="row" justify="flex-end" alignItems="center" style={{padding: '1em', width: '100%'}}>
                <div id="apaini" style={{backgroundImage: `url(${Hero2})`, 
                                         backgroundSize: 'cover', width: '50%', 
                                         height: `calc(${window.innerHeight}px - 73px)`,
                                         borderRadius: '30px'
                                       }}>
                </div>
                <div style={{width: '50%', textAlign: 'right', padding: '3em', display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                    <BalooTypo style={{color:"white", fontSize: "3.25rem"}}> Why Choose Us? </BalooTypo>
                    <MonTypo style={{color:"white", fontSize:"1.5rem", width: '75%', marginTop: '5em'}}>
                    Lego berperan sebagai lock and key, sehingga dapak mngikat dan menjadi bangunan yang kokoh
                    </MonTypo>
                </div>
              </Grid>
              <Grid id="product" spacing={2} container direction="row" justify="center" alignItems="center" style={{padding: '2em 4em', paddingTop: '3em', width: '100%', height: `calc(${window.innerHeight}px - 12rem)`}}>
                  <Grid item justify="center" alignItems="center">
                    <BalooTypo style={{color:"#FFD85E", fontSize: "5rem"}}> Keunggulan </BalooTypo>
                    <div className={classes.line} style={{width: '30em'}}></div>
                  </Grid>
              </Grid>
          </YellowPaper>
      </Grid>
      <Grid container direction="row-reverse">
        <div style={{width: '5%', height: `calc(${window.innerHeight}px * 2)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '0 30px 30px 0', height: 'auto', padding: '5em', width: '100$'}}>
          {["Tahan Gempa", "Anti Air", "Ringan", "Kuat"].map(function(x, index){
            return (
              <Grid container direction="column" style={{width: 'auto', margin: '2em 0'}}>
                <Grid container direction={index % 2 === 0 ? "row" : "row-reverse"} spacing={2}>
                  <div style={{width: '50%', padding: '2em'}}>
                    <BalooTypo style={{color:"#FFD85E", fontSize:"2rem"}}> {x} </BalooTypo>
                    <MonTypo variant="subtitle1" component="p">Textured clay spotted with volcanic black sand, this vessel is made with remarkable sculptural forms to embody a deeper history of creativity.</MonTypo>
                  </div>
                  <img src={Hero3} alt="wow" style={{width: '50%'}}/>
                </Grid>
              </Grid>
            )
          })}
        </YellowPaper>
      </Grid>
      </>
    )
}