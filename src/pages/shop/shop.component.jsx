import React,{useEffect} from 'react'
import CollectionPageContainer from '../collection/collection.container'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import  CollectionOverview from '../../componenets/collection-overview/collection-overview.component'
import {fetchCollectionsStart}  from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../componenets/collection-overview/collections-overview.container'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
const ShopPage=({match,fetchCollectionsStart})=> {

        
      useEffect(()=>{
        fetchCollectionsStart();
      },[fetchCollectionsStart])

        
                
                
                return(
        
                        <div className="shop-page">
                                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                        
                                </div>)

}
       


const mapDispatchToProps =  dispatch =>({
 fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})
export default connect(null,mapDispatchToProps)(ShopPage);