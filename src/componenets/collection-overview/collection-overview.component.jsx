import React from 'react';
import {selectCollectionsForPreview}  from '../../redux/shop/shop.selector'

import { connect } from 'react-redux';
import CollectionPreview   from '../preview-component/collection-preview.component'
import './collections-overview.styles.scss'

import { createStructuredSelector} from 'reselect';

const collectionOverview = ({collections}) => (
    <div className='collections-overview'>
    
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }

        
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
 })

 export default connect(mapStateToProps)(collectionOverview);