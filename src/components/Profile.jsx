import { useAuth0 } from "@auth0/auth0-react";
import '../css/profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="profile-wrapper">
        <div>Loading ...</div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="profile-wrapper">
        <div className="profile">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
