import React from 'react';
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPageContainer from '../collection/collection.container'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);