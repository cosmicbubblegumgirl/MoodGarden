export default function Header({ user, onLogin, onLogout }) {
  return (
    <header className="header">
      <div className="headerStars" aria-hidden="true">
        <span className="star starOne">*</span>
        <span className="star starTwo">*</span>
        <span className="star starThree">*</span>
      </div>

      <div>
        <h1 className="title">MoodGarden</h1>
        <p className="subtitle">
          A whimsical music companion for focus and calm (ADHD + GAD-friendly routines).
        </p>
      </div>

      <div className="headerRight">
        {user ? (
          <div className="userBadge">
            <span className="userAvatar">{(user.display_name || user.username)[0].toUpperCase()}</span>
            <span className="userName">{user.display_name || user.username}</span>
            <button type="button" className="btnGhost userLogout" onClick={onLogout}>Sign out</button>
          </div>
        ) : (
          <button type="button" className="btnGhost headerLoginBtn" onClick={onLogin}>Sign in</button>
        )}
      </div>
    </header>
  );
}
