import React from 'react'

import {GreyPaper} from './Paper'
import {MonTypo} from './FontStyles'

export default function Footer() {
	return (
        <GreyPaper elevation={0} style={{borderRadius: '40px 40px 0 0', 
        height: '4rem', 
        marginTop:'5em', 
        textAlign:'center',
        display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <MonTypo variant="body2" style={{fontSize: '1rem',color:'white',opacity:'0.5',display:'flex',margin: '0 auto'}}> Copyright 2020 (C) Ganco | Powered by Ganco </MonTypo>
        </GreyPaper>
	)
}