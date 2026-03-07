export default function Header() {
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

      <div className="creatorTag">Quantum Cupcake Creation</div>
    </header>
  );
}
