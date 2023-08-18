import Calculator from "./Calculator";
export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-background mx-5 mx-0-md"></div>
        <div className="body-container">
          <div className="columns hero-main">
            <div className="column is-5-fullhd is-half-desktop is-12-tablet has-text-centered-touch">
              <h1 className="my-4 my-3-md">Body Mass Index Calculator</h1>
              <p className="my-4 my-3-md">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <div className="column p-4 is-5-fullhd is-half-desktop is-12-tablet">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
