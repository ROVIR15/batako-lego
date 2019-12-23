import React from 'react'

import Hero2 from '../assets/img/hero-background-2.png'
import Hero3 from '../assets/img/Hero3.png'

import { Grid, Typography } from '@material-ui/core'
import { YellowPaper, ProductPaper, ProductPaperSmall } from '../components/Paper'
import { useStyles } from '../assets/classes'
import { BalooTypo, MonTypo } from '../components/FontStyles'

import {ReactComponent as BaSmall} from '../assets/img/batako-small.svg'

export default function PerformanceTest(){
    const classes = useStyles()
    return (
      <>
      <Grid container direction="row">
        <div style={{width: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '30px 0 0 30px'}}>
          <Grid container spacing={2} direction="row" justify="flex-end" alignItems="center" className={classes.GridColoredPaper} style={{backgroundImage: `url(${Hero2})`, backgroundSize: 'cover', height: `calc(${window.innerHeight}px - 3em)`, width: 'initial'}}>
            <div id="apaini" className={classes.disp} >
              <BalooTypo style={{color:"white", fontSize:"72px"}}> Hasil Test </BalooTypo>
            </div>
          </Grid>
            <Grid id="product" container direction="row" justify="center" alignItems="center" className={classes.GridColoredPaper}>
              <div>
              <BalooTypo style={{textAlign: 'center', color: "#FFD85E"}} variant="h2" component="h1"> Massa </BalooTypo>
              <div className={classes.line}></div>
              </div>
              <Grid container direction="row" style={{margin: '3em 0'}} item spacing={5} direction="row" justify="center" alignItems="center">
                  <Grid item justify="center" style={{width: '18%', margin: '0 1em'}}>
                    <ProductPaperSmall style={{margin: '0'}}><BaSmall style={{width: "12em", height: 'inherit'}}/></ProductPaperSmall>
                    <div style={{textAlign: 'center', marginTop: '1em'}}>
                      <BalooTypo variant="body2" style={{color: 'white', fontWeight: 'bold', fontSize: '1rem'}}>Batako Logo </BalooTypo>
                      <BalooTypo variant="body2" style={{color: 'white', fontSize: '0.85rem'}}> 3,12 <br/> kg </BalooTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '20%', margin: '0 1em'}}>
                    <ProductPaper style={{margin: '0', backgroundColor: 'white'}}><BaSmall style={{width: "15em"}}/></ProductPaper>
                    <div style={{textAlign: 'center', marginTop: '0.5em'}}>
                      <BalooTypo variant="body2" style={{color: 'white', fontWeight: 'bold', fontSize: '1.75rem'}}>Batako Logo </BalooTypo>
                      <BalooTypo variant="body2" style={{color: 'white', fontSize: '1.5rem'}}> 3,12 <br/> kg </BalooTypo>
                    </div>
                  </Grid>
                  <Grid item justify="center" style={{width: '18%', margin: '0 2em'}}>
                    <ProductPaperSmall style={{margin: '0'}}><BaSmall style={{width: "12em", height: 'inherit'}}/></ProductPaperSmall>
                    <div style={{textAlign: 'center', marginTop: '1em'}}>
                      <BalooTypo variant="body2" style={{color: 'white', fontWeight: 'bold', fontSize: '1rem'}}>Batako Logo </BalooTypo>
                      <BalooTypo variant="body2" style={{color: 'white', fontSize: '0.85rem'}}> 3,12 <br/> kg </BalooTypo>
                    </div>
                  </Grid>
              </Grid>
            </Grid>
        </YellowPaper>
      </Grid>
        <Grid container direction="row-reverse" style={{marginTop: '5em'}}>
        <div style={{width: '5%', height: `calc(${window.innerHeight}px * 2)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '1em'}}>
            <Typography variant="subtitle1" component="p" style={{transform: 'rotate(270deg)', width: 'max-content'}}> Hasil Test </Typography>
            <div style={{borderRight: '3px solid #707070', height: '7em', marginTop: '3em'}}>
            </div>
        </div>
        <YellowPaper elevation={20} style={{borderRadius: '0 30px 30px 0', height: `auto`}}>
          <Grid container spacing={2} direction="column" justify="flex-start" alignItems="center" className={classes.GridColoredPaper} style={{height: 'auto'}}>
              <div style={{width: 'inherit', textAlign: 'right'}}><BalooTypo style={{color:"#FFD85E", fontSize:"3rem"}}> Hasil Uji Sifat Hidrofobik </BalooTypo></div>
              <div style={{backgroundImage: `url(${Hero3})`, backgroundSize: 'cover', width: '-webkit-fill-available', height: '30em', margin: '1em 0'}}></div>
              <MonTypo style={{color:"white",fontSize:"0.85rem"}}> Utilising only mycelium and bamboo, the structure represents a provocative vision of how we may move beyond the mining of our construction materials from the earth’s crust to their cultivation and urban growth; how achieving stability through geometry rather than through material strength opens up the possibility of using weaker materials structurally and safely; and, ultimately, how regenerative resources in combination with informed structural design have the potential to propose an alternative to established, structural materials for a more sustainable building industry. </MonTypo>
          </Grid>
          <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center" className={classes.GridColoredPaper}>
            <BalooTypo style={{color:"#FFD85E", fontSize:"3rem"}}> Hasil Uji Kuat Tekan </BalooTypo>
              <div style={{backgroundImage: `url(${Hero3})`, backgroundSize: 'cover', width: '-webkit-fill-available', height: '30em', margin: '1em 0'}}></div>
            <MonTypo style={{color:"white",fontSize:"0.85rem"}}> Utilising only mycelium and bamboo, the structure represents a provocative vision of how we may move beyond the mining of our construction materials from the earth’s crust to their cultivation and urban growth; how achieving stability through geometry rather than through material strength opens up the possibility of using weaker materials structurally and safely; and, ultimately, how regenerative resources in combination with informed structural design have the potential to propose an alternative to established, structural materials for a more sustainable building industry. </MonTypo>
          </Grid>
        </YellowPaper>
      </Grid>
      <div style={{margin: '2em 0'}}></div>
    </>
    )
}