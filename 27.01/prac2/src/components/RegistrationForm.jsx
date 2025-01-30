import {useForm} from 'react-hook-form'

export default function RegistrationForm() {
    const { register } = useForm();
    return (
        <form action="">
            <label htmlFor="login">
                Login:
            </label>
            <input id='login' type="text" placeholder='Login' {...register('login', {required: true})}/>
            <label htmlFor="email">
            </label>
            <input type="email" placeholder='E-Mail' {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/})} />

            <label htmlFor="password">
            </label>
            <input type="password" placeholder='Password'  {...register('password', { required: true, minLength:6})}/>

            <button>Register</button>
        </form >
    );
}