import { connect }  from 'react-redux'

import { compose }  from 'redux';

import { createStructuredSelector} from 'reselect'
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from '../../componenets/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageConatiner = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)


export default CollectionPageConatiner;