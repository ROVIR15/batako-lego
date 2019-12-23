import React from 'react'

import Hero2 from '../assets/img/hero-background-2.png'
import Hero3 from '../assets/img/Hero3.png'

import { Grid, Typography } from '@material-ui/core'
import { YellowPaper } from '../components/Paper'
import { useStyles } from '../assets/classes'
import { BalooTypo, MonTypo } from '../components/FontStyles'

export default function ContactUs(){
    const classes = useStyles();
    return (
    <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)'}}> SOMETHING </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper style={{borderRadius: '42px 0 0 42px', height: `calc((${window.innerHeight}px * 3) - 6rem)`}}>
          <Grid container spacing={2} direction="row" justify="flex-end" alignItems="center" className={classes.GridColoredPaper} style={{backgroundImage: `url(${Hero2})`, backgroundSize: 'cover', height: `calc(${window.innerHeight}px - 4rem)`, width: 'initial'}}>
            <div id="apaini" className={classes.conf}>
              <BalooTypo style={{color:'white'}} variant="h2"> Contact Us </BalooTypo>
            </div>
          </Grid>
            <div style={{backgroundImage: `url(${Hero3})`, backgroundSize: 'cover', 
                         width: '85%', height:'44em',
                         margin: '2em auto'
                        }}>              
            </div>
            <Grid container style={{margin: '3em 0', width: '100%'}} item spacing={5} direction="row" justify="center" alignItems="center">
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <BalooTypo variant="body2" style={{fontWeight: 'bold',fontSize: '1.75rem',color:'#FFD85E'}}>PT Batako Gonco </BalooTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <BalooTypo variant="body2" style={{fontWeight: 'bold', fontSize: '1.75rem',color:'#FFD85E'}}>Lokasi Retailer </BalooTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <BalooTypo variant="body2" style={{fontWeight: 'bold', fontSize: '1.75rem',color:'#FFD85E'}}>Ganco Store </BalooTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                    </div>
              </Grid>
            </Grid>
            <Grid container style={{margin: '3em 0', width: '100%'}} item spacing={5} direction="row" justify="center" alignItems="center">
                    <div style={{textAlign: 'center'}}>
                      <BalooTypo variant="body2" style={{fontWeight: 'bold', fontSize: '2rem',color:'#FFD85E'}}>Our Email </BalooTypo>
                      </div>
                  </Grid>
                  <Grid container style={{margin: '3em 0', width: '100%'}} item spacing={5} direction="row" justify="center" alignItems="center">
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <MonTypo variant="body2" style={{fontSize: '1.2rem',color:'white'}}> General Inquiry : </MonTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> ganco@gmail.com </MonTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <MonTypo variant="body2" style={{fontSize: '1.2rem',color:'white'}}> Business Inquiry : </MonTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> ganco@gmail.com </MonTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <div style={{textAlign: 'center'}}>
                      <MonTypo variant="body2" style={{fontSize: '1.2rem',color:'white'}}> Career Inquiry : </MonTypo>
                      <MonTypo variant="body2" style={{fontSize: '0.85rem',color:'white'}}> ganco@gmail.com </MonTypo>
                    </div>
              </Grid>
            </Grid>
        </YellowPaper>
    </Grid>
    )
}