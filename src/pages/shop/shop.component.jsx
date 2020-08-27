import React from 'react'
import CollectionPage from '../collection/collection.component'

import { Route } from 'react-router-dom'
import  CollectionOverview from '../../componenets/collection-overview/collection-overview.component'
const ShopPage = ({match})=>{

console.log('im here totally look me up please')
console.log(match)
        return(
        
<div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

        </div>)};



export default ShopPage;