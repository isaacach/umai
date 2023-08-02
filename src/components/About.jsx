
export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-title">
          <h1>ABOUT</h1>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Umai is a recipe search engine that allows users to search for
              recipes based on ingredients, meal type, and cuisine. Umai is
              powered by the Spoonacular API.
            </p>
          </div>
          <div className="about-img">

            <img src="src/images/umai.png" alt="umai" />
          </div>
        </div>
      </div>
    </div>
  );
}