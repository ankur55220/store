import {takeLatest, call, put,all} from 'redux-saga/effects'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {ShopActionsTypes}  from './shop.types'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'
export function* fetchCollections(){
    yield console.log('i am fired');

    try{
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
       yield put(fetchCollectionsFailure(error.message))
    }
    
    // collectionRef.get().then(snapshot =>{
    //    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //    dispatch(fetchCollectionsSuccess(collectionsMap))
    //    this.setState({loading:false})
    //  }).catch(error =>dispatch(fetchCollectionsFailure(error.message)))
}
export function* fetchCollectionsStatrt() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollections
        )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStatrt)])
}