import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';

const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({
            name: name ? '' : 'Введите имя',
            status: status ? '' : 'Введите статус'
        });
        if (name && status) {
            setUserInfo({ name, status });
            setName('');
            setStatus('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Введите статус" />
            {errors.status && <p style={{ color: 'red' }}>{errors.status}</p>}
            <button type="submit">Обновить</button>
        </form>
    );
};

export default connect(null, { setUserInfo })(UserForm);
