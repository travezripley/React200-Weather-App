import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {

export default connect(mapStoreToProps)(Search);