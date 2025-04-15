import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../Components";
import AOS from "aos";
import "aos/dist/aos.css";
const allProducts = [
  {
    id: 1,
    title: "Vintage Watch",
    description: "A rare antique watch from the 19th century. Crafted with precision and elegance.",
    image: "/src/assets/watch.jpg",
    link: "/bid/1",
  },
  {
    id: 2,
    title: "Classic Painting",
    description: "An original masterpiece by a famous artist. A blend of history and artistic brilliance.",
    image: "/src/assets/classic painting.jpg",
    link: "/bid/2",
  },
  {
    id: 3,
    title: "Luxury Car",
    description: "Limited edition sports car in mint condition. Own a piece of automotive excellence.",
    image: "/src/assets/luxury car.jpg",
    link: "/bid/3",
  },
  {
    id: 4,
    title: "Gold Necklace",
    description: "A stunning 24K gold necklace with diamonds. A timeless piece of luxury and beauty.",
    image: "/src/assets/necklace.jpg",
    link: "/bid/4",
  },
  {
    id: 5,
    title: "Rare Coin Collection",
    description: "A set of ancient coins from different eras. Perfect for numismatics and history lovers.",
    image: "/src/assets/coins.jpg",
    link: "/bid/5",
  },
  {
    id: 6,
    title: "Signed Baseball",
    description: "Autographed by a legendary baseball player. A collector’s dream and sports memorabilia.",
    image: "/src/assets/baseball.jpg",
    link: "/bid/6",
  },
  {
    id: 7,
    title: "Antique Furniture Set",
    description: "Exquisite handcrafted wooden furniture. A blend of tradition, art, and craftsmanship.",
    image: "/src/assets/furniture.jpg",
    link: "/bid/7",
  },
  {
    id: 8,
    title: "Vintage Camera",
    description: "A classic film camera in perfect working condition. Capture nostalgia with every click.",
    image: "/src/assets/camera.jpg",
    link: "/bid/8",
  },
  {
    id: 9,
    title: "Rare Stamp Collection",
    description: "A collection of historical stamps from around the world. A philatelist’s prized possession.",
    image: "/src/assets/stamps.jpg",
    link: "/bid/9",
  },
  {
    id: 10,
    title: "Handcrafted Persian Rug",
    description: "A beautiful and intricate Persian rug. Each thread tells a story of tradition and art.",
    image: "/src/assets/rug.jpg",
    link: "/bid/10",
  },
  {
    id: 11,
    title: "Luxury Handbag",
    description: "A designer handbag in pristine condition. A symbol of elegance, fashion, and status.",
    image: "/src/assets/handbag.jpg",
    link: "/bid/11",
  },
  {
    id: 12,
    title: "Diamond Ring",
    description: "A dazzling diamond ring with pure brilliance. A perfect choice for collectors or lovers.",
    image: "/src/assets/ring.jpg",
    link: "/bid/12",
  },
  {
    id: 13,
    title: "Antique Grandfather Clock",
    description: "A classic wooden grandfather clock from the 1800s. A functional piece of history and elegance.",
    image: "/src/assets/clock.jpg",
    link: "/bid/13",
  },
  {
    id: 14,
    title: "Vintage Vinyl Records",
    description: "A rare collection of vinyl records from legendary artists. Experience music in its purest form.",
    image: "/src/assets/vinyl.jpg",
    link: "/bid/14",
  },
  {
    id: 15,
    title: "Collector’s Edition Comic Book",
    description: "A first-edition comic book in mint condition. A must-have for superhero and comic enthusiasts.",
    image: "/src/assets/comic.jpg",
    link: "/bid/15",
  }
];

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q")?.toLowerCase() || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setResults(filtered);
  }, [query]);

  return (
    <div className="container mt-1 ">
      <div className="bg-light py-5 text-center rounded shadow-sm mb-4">
       <h2 className="text-warning">
        <i className="bi bi-search me-2"></i>
         Search Results
       </h2>
       <p className="text-muted">Explore treasures that match your query: <strong>{query}</strong></p>
      </div>

      <h3 className="text-dark mb-4">Search Results for: "{query}"</h3>
      {results.length > 0 ? (
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {results.map((item) => (
            <div key={item.id} data-aos="fade-up">
             <Card {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
         <img src="/src/assets/page.webp" alt="Not Found" className="img-fluid" style={{ maxWidth: "300px" }} />
           <h4 className="text-danger mt-3">Oops! No matching products found.</h4>
         <p className="text-secondary">Try a different keyword or browse our <a href="/Auction/Category">Categories</a>.</p>
        </div>

      )}
    </div>
  );
};

export default Search;
