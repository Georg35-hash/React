
import { connect } from 'react-redux';

const User = ({ name, status }) => (
    <div>
        <h2>Имя: {name}</h2>
        <p>Статус: {status}</p>
    </div>
);

const mapStateToProps = (state) => ({
    name: state.name,
    status: state.status
});

export default connect(mapStateToProps)(User);