import { connect } from 'react-redux';
import DoneList from '../components/DoneList';

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;
