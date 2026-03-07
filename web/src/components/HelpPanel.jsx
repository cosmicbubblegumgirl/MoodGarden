export default function HelpPanel() {
  return (
    <section className="card">
      <h2 className="cardTitle">How to use MoodGarden</h2>
      <ul className="list">
        <li>Pick a mood seed that matches your brain-weather.</li>
        <li>Generate a plan and press Start.</li>
        <li>Use music as a “soft rail”—return to the beat when your mind wanders.</li>
        <li>Complete the session to save it in history.</li>
      </ul>
      <p className="disclaimer">
        Not medical advice. If anxiety or ADHD symptoms are interfering with daily life, consider
        getting support from a qualified professional.
      </p>
    </section>
  );
}
