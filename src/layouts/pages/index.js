import React from 'react'
import {mainRoutes} from '../../routes/'
import { Redirect, Route, Switch } from 'react-router-dom'

export const pages = (
        <Switch>
            {mainRoutes.map(function(route){
                if(route.redirect) return (<Redirect from="/" to="/home"/>)
                return (<Route path={route.path} component={route.component}/>)
            })}
        </Switch>
)