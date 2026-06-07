import React from 'react';

function App() {
  return (
    <div className="pizza-house-container">
      {/* 1. Navigation Header */}
      <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
        <div className="container px-4">
          <a className="navbar-brand navbar-brand-custom text-white" href="/">
            Pizza Tam Quân
          </a>

          <div className="navbar-collapse" id="pizzaNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link nav-link-custom active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#contact">Contact</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-0 border-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn search-btn-custom rounded-0" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* 2. Slide Carousel (Standard Bootstrap 5 Data Attributes) */}
      <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div
            className="carousel-item carousel-item-custom active"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&auto=format&fit=crop&q=80)' }}
          >
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-custom text-white">
              <h2>Neapolitan Pizza</h2>
              <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
          <div
            className="carousel-item carousel-item-custom"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1600&auto=format&fit=crop&q=80)' }}
          >
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-custom text-white">
              <h2>Margherita Pizza</h2>
              <p>Simple, yet delicious. Sliced fresh mozzarella, tomatoes, and sweet basil leaves.</p>
            </div>
          </div>
          <div
            className="carousel-item carousel-item-custom"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&auto=format&fit=crop&q=80)' }}
          >
            <div className="carousel-overlay"></div>
            <div className="carousel-caption-custom text-white">
              <h2>Hawaiian Pizza</h2>
              <p>A perfect blend of sweet pineapple slices and savory ham over fresh cheese.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev border-0 bg-transparent"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next border-0 bg-transparent"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 3. Our Menu Section */}
      <section className="container py-4" id="home">
        <h2 className="section-title text-start text-white">Our Menu</h2>

        <div className="row">
          {/* Card 1: Margherita */}
          <div className="col-3 mb-4">
            <div className="card pizza-card h-100">
              <div className="pizza-card-img-wrapper">
                <span className="pizza-badge">SALE</span>
                <img
                  src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&auto=format&fit=crop&q=60"
                  className="pizza-card-img card-img-top"
                  alt="Margherita Pizza"
                />
              </div>
              <div className="pizza-card-body">
                <h5 className="pizza-card-title">Margherita Pizza</h5>
                <div className="mb-3">
                  <span className="pizza-price-original">$40.00</span>
                  <span className="pizza-price-discount">$24.00</span>
                </div>
                <button className="btn btn-buy-pizza">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 2: Mushroom */}
          <div className="col-3 mb-4">
            <div className="card pizza-card h-100">
              <div className="pizza-card-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1571066811602-71683a3f680d?w=600&auto=format&fit=crop&q=60"
                  className="pizza-card-img card-img-top"
                  alt="Mushroom Pizza"
                />
              </div>
              <div className="pizza-card-body">
                <h5 className="pizza-card-title">Mushroom Pizza</h5>
                <div className="mb-3">
                  <span className="pizza-price-regular">$25.00</span>
                </div>
                <button className="btn btn-buy-pizza">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 3: Hawaiian */}
          <div className="col-3 mb-4">
            <div className="card pizza-card h-100">
              <div className="pizza-card-img-wrapper">
                <span className="pizza-badge">NEW</span>
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60"
                  className="pizza-card-img card-img-top"
                  alt="Hawaiian Pizza"
                />
              </div>
              <div className="pizza-card-body">
                <h5 className="pizza-card-title">Hawaiian Pizza</h5>
                <div className="mb-3">
                  <span className="pizza-price-regular">$30.00</span>
                </div>
                <button className="btn btn-buy-pizza">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 4: Pesto */}
          <div className="col-3 mb-4">
            <div className="card pizza-card h-100">
              <div className="pizza-card-img-wrapper">
                <span className="pizza-badge">SALE</span>
                <img
                  src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&auto=format&fit=crop&q=60"
                  className="pizza-card-img card-img-top"
                  alt="Pesto Pizza"
                />
              </div>
              <div className="pizza-card-body">
                <h5 className="pizza-card-title">Pesto Pizza</h5>
                <div className="mb-3">
                  <span className="pizza-price-original">$50.00</span>
                  <span className="pizza-price-discount">$30.00</span>
                </div>
                <button className="btn btn-buy-pizza">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Book Your Table Section */}
      <section className="container py-4" id="contact">
        <h2 className="section-title text-center text-white">Book Your Table</h2>

        <div className="booking-form-container mx-auto">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row mb-3">
              <div className="col-4 mb-3">
                <input
                  type="text"
                  className="form-control booking-input"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="col-4 mb-3">
                <input
                  type="email"
                  className="form-control booking-input"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="col-4 mb-3">
                <select className="form-select booking-input">
                  <option value="">Select a Service</option>
                  <option value="dine-in">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Home Delivery</option>
                </select>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <textarea
                  className="form-control booking-input"
                  rows="5"
                  placeholder="Please write your comment"
                ></textarea>
              </div>
            </div>

            <div className="text-start">
              <button type="submit" className="btn btn-booking-submit text-uppercase">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer / Credits */}
      <footer className="pizza-footer text-center text-muted py-4">
        <div className="container">
          <p className="mb-0">&copy; 2026 Pizza House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;