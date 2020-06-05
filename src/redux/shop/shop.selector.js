import {createSelector} from 'reselect'

const COLLECTTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectCollection = collectionsUrlParam => 
createSelector(
    [selectCollections],
    collections => collections.find(
       collection => collection.id === COLLECTTION_ID_MAP[collectionsUrlParam]
    )
)