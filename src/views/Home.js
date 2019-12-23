import React from 'react'

import Hero2 from '../assets/img/hero-background-2.png'

import { Button, Grid, Typography } from '@material-ui/core'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import { CirclePaper, WhitePaperBorder, YellowPaper, PlainPaper, TestiPaper, ProductPaper, ProductPaperSmall, ValuesPaper } from '../components/Paper'
import { useStyles } from '../assets/classes'
import { BalooTypo, MonTypo } from '../components/FontStyles'

import {ReactComponent as Icon1} from '../assets/img/flash-21.svg'
import {ReactComponent as Icon2} from '../assets/img/vector.svg'
import {ReactComponent as Icon3} from '../assets/img/layers-3.svg'
import {ReactComponent as BaLarge} from '../assets/img/batako-large.svg'
import {ReactComponent as BaSmall} from '../assets/img/batako-small.svg'
import Back from '../assets/img/Back.png'

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(255,70,0,1) 0%, rgba(231,28,7,1) 100%)',
    color: '#fff',
    borderRadius: '30px',
    margin: '0.5em 0',
    width: '10em'
  },
  label: {
    fontFamily: "'Montserrat', sans-serif"
  }
})(Button)

export default function Home(){
  const classes = useStyles();
  return(
      <>
      <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)'}}> SOMETHING </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '30px 0 0 0'}}>
          <Grid container spacing={2} direction="row" className={classes.GridColoredPaper}>
            <div id="apaini" className={classes.conf}>
              <BalooTypo variant="h2"> Batako Lego </BalooTypo>
              <MonTypo variant="body1" style={{marginTop: '0.5em'}}> Terbuat dari limbah sabut kelapa dan ampas tebu berbasis resin. </MonTypo>
              <StyledButton> Learn More </StyledButton>
            </div>
            <div style={{width: '50%', textAlign: 'right'}}>
                <BaLarge width={255} height={605}/>
            </div>
          </Grid>
        </YellowPaper>
      </Grid>
      <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', height: `${window.innerHeight}px`}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)'}}> SOMETHING </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '0 0 0 30px', backgroundImage: `url(${Back})`, backgroundSize: 'cover', height: `calc(${window.innerHeight}px - 72px)`}}>
        <Grid id="purpose" container justify="center" alignItems="center" style={{padding: '3em', height: `inherit`, textAlign: 'center'}}>
            <div style={{width: '33em'}}>
                <BalooTypo variant="h6" component="h1" style={{marginBottom: '5em', marginLeft: '2em'}}> The 21St Century Will Face A Radical Paradigm Shift In  How We Produce Materials For The  Construction Of Our Habitat. </BalooTypo>
            </div>
        </Grid>
        </YellowPaper>
      </Grid>
        <Grid container direction="row-reverse">
          <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '1em'}}>
              <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)'}}> SOMETHING </Typography>
              <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
              </div>
          </div>
          <WhitePaperBorder style={{borderRadius: '0 30px 0 0', 
            borderTop: '1px solid #707070', 
            borderRight: '1px solid #707070'
          }}>
            <Grid id="our-values" container direction="column" justify="center" alignItems="center" className={classes.GridColoredPaper}>
              <BalooTypo style={{textAlign: 'center'}} variant="h2" component="h1"> Our Value </BalooTypo>
              <div className={classes.line}></div>
              <Grid container style={{margin: '4rem 0'}} item spacing={3} direction="row" justify="center" alignItems="center">
                  <Grid item justify="center" style={{width: '24%'}}>
                    <CirclePaper elevation={2} style={{backgroundColor: 'white', padding: "0.5em", textAlign: 'center'}}><Icon2 width={30}/></CirclePaper>
                    <ValuesPaper>
                      <Typography className={classes.fontHeader} variant="body1" component="h1"> Kuat </Typography>
                      <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                    </ValuesPaper>
                  </Grid>
                  <Grid item justify="center" style={{width: '24%'}}>
                    <CirclePaper elevation={20} style={{padding: "0.5em", textAlign: 'center'}}><Icon1 width={30} height={37}/></CirclePaper>
                    <ValuesPaper elevation={20}>
                      <Typography className={classes.fontHeader} variant="body1" component="h1"> Tahan Lama </Typography>
                      <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                    </ValuesPaper>
                  </Grid>
                  <Grid item justify="center" style={{width: '24%'}}>
                    <CirclePaper elevation={2} style={{backgroundColor: 'white', padding: "0.5em", textAlign: 'center'}}><Icon3 width={30}/></CirclePaper>
                    <ValuesPaper >
                      <Typography className={classes.fontHeader} variant="body1" component="h1"> Kokoh </Typography>
                      <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                    </ValuesPaper>
                  </Grid>
              </Grid>
            </Grid>
          </WhitePaperBorder>
        </Grid>
      <Grid container direction="row-reverse">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)'}}> SOMETHING </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <WhitePaperBorder style={{borderRadius: '0 0 30px 0',
            borderBottom: '1px solid #707070', 
            borderRight: '1px solid #707070',
            marginBottom: '3em'
        }}>
          <Grid id="product" container direction="column" justify="center" alignItems="center" className={classes.GridColoredPaper}>
            <BalooTypo style={{textAlign: 'center'}} variant="h2" component="h1"> Produk </BalooTypo>
            <div className={classes.line}></div>
            <Grid container style={{margin: '3em 0'}} item spacing={5} direction="row" justify="center" alignItems="center">
                <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                  <ProductPaper style={{margin: '0'}}><BaSmall style={{width: "15em"}}/></ProductPaper>
                  <div style={{textAlign: 'center'}}>
                    <MonTypo variant="body2" style={{fontWeight: 'bold'}}>Batako Logo </MonTypo>
                    <MonTypo variant="body2" style={{fontSize: '0.65rem'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                  </div>
                </Grid>
                <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                  <ProductPaper style={{margin: '0'}}><BaSmall style={{width: "15em"}}/></ProductPaper>
                  <div style={{textAlign: 'center'}}>
                    <MonTypo variant="body2" style={{fontWeight: 'bold'}}>Batako Logo </MonTypo>
                    <MonTypo variant="body2" style={{fontSize: '0.65rem'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                  </div>
                </Grid>
                <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                  <ProductPaper style={{margin: '0'}}><BaSmall style={{width: "15em"}}/></ProductPaper>
                  <div style={{textAlign: 'center'}}>
                    <MonTypo variant="body2" style={{fontWeight: 'bold'}}>Batako Logo </MonTypo>
                    <MonTypo variant="body2" style={{fontSize: '0.65rem'}}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </MonTypo>
                  </div>
                </Grid>
            </Grid>          
          </Grid>
        </WhitePaperBorder>
      </Grid>
          <Grid container direction="row">
            <PlainPaper style={{borderRadius: '0 30px 30px 0'}}>
              <Grid id="testimoni" container direction="column" justify="center" alignItems="center" className={classes.GridColoredPaper}>
                <BalooTypo style={{textAlign: 'center'}} variant="h2" component="h1"> TESTIMONI </BalooTypo>
                <div className={classes.line}></div>
                <Grid container style={{margin: '3em 0'}} item spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item justify="center" style={{width: '24%', margin: '0 1em'}}>
                      <CirclePaper elevation={2} style={{margin: '0'}}/>
                      <TestiPaper>
                        <Typography className={classes.fontHeader} variant="body1" component="h1"> Si Anto </Typography>
                        <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                      </TestiPaper>
                    </Grid>
                    <Grid item justify="center" style={{width: '24%', margin: '0 1em'}}>
                      <CirclePaper elevation={2} style={{margin: '0'}}/>
                      <TestiPaper >
                        <Typography className={classes.fontHeader} variant="body1" component="h1"> Si Asep </Typography>
                        <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                      </TestiPaper>
                    </Grid>
                    <Grid item justify="center" style={{width: '24%', margin: '0 1em'}}>
                      <CirclePaper elevation={2} style={{margin: '0'}}/>
                      <TestiPaper >
                        <Typography className={classes.fontHeader} variant="body1" component="h1"> Si Akang </Typography>
                        <Typography variant="body2" className={classes.fontBody}> Nemo enim ipsam voluptatem voluptears aspernatur aut odit fugit, consequuntur magni dolores anescriunts. </Typography>
                      </TestiPaper>
                    </Grid>
                </Grid>
              </Grid>
            </PlainPaper>
          </Grid>
      </>
  )
}