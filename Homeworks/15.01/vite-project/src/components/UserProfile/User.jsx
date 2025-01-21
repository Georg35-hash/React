
export default function User({ user }) {
    return (
        
        <div >
            <img src={user.picture.large} alt="picture" />
            <p>{user.name.first } {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}
