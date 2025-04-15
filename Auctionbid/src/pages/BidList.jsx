import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../Components";
import { useAuth } from "../contexts/useAuth";



export const BidList = ({ title }) => {
  const [items, setItems] = useState([
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
  ]);

  const [upcomingItems] = useState([
    {
      id: 101,
      title: "Smart Drone",
      description: "A high-tech drone with 4K camera and GPS.Ideal for aerial photography, mapping, and outdoor adventures.",
      image: "/src/assets/drone.jpg",
      link: "/bid/101",
    },
    {
      id: 102,
      title: "Gaming Laptop",
      description: "Next-gen gaming laptop with lightning-fast performance and RTX graphics.Designed for immersive gameplay, multitasking, and high-end computing",
      image: "/src/assets/laptop.jpg",
      link: "/bid/102",
    },
  ]);
  

  useEffect(() => {
    document.title = title;
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      if (title === "Category") {
        favicon.href = "/category.svg"; 
      } else if (title === "Signup") {
        favicon.href = "/signup.svg"; 
      } else if (title === "Upcoming auction") {
        favicon.href = "/upcoming.svg"; 
      }  else if (title === "Treasure is On the way") {
        favicon.href = "/gavel.svg"; 
      } else {
        favicon.href = "/vite.svg"; 
      }
    }
  }, [title]);
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(3600);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 const hours = Math.floor(timeLeft / 3600);
 const minutes = Math.floor((timeLeft % 3600) / 60);
 const seconds = timeLeft % 60;
 const { isAuthenticated } = useAuth();

const handlePlaceBid = (link) => {
  if (isAuthenticated) {
    navigate(link);
  } else {
    alert("Please log in to place a bid.");
    navigate("/Auction/Login");
  }
};
             
  return (
    <div> 
      <main className="container">
        {title === "Treasure is On the way" && (          
          <> 
           <h5 className="text-danger py-2 border-bottom">
             {title}
           </h5>
      
          <div className="bg-body-tertiary p-5 border mb-5">
            <h3 className="text-warning">Welcome to Auction Bid</h3>
            <p className="lead">
              Where the bidding never stops! Auctions that inspire, treasures that delight!
              Bid, win, and fill your life with joy!
            </p>
            <button className="btn btn-warning" onClick={() => navigate("/Auction/upcoming")}>
              Explore Now
            </button>
          </div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade mb-5 " data-bs-ride="carousel" data-bs-interval="1000">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                   <img src="/src/assets/banner1.png" className="d-block w-100 " alt="Banner 1" />
                  </div>

                  <div className="carousel-item">
                    <img src="/src/assets/banner2.png" className="d-block w-100" alt="Banner 2" />
                  </div>

                  <div className="carousel-item">
                   <img src="/src/assets/banner3.png" className="d-block w-100" alt="Banner 3" />
                 </div>
             </div>

             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
             </button>

             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
             </button>
             </div>
          </>
        )}
         
          
        {title === "Category" && (
          <>
           <h5 className="text-danger py-2 border-bottom">{title}</h5>          
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 py-2">
            {items.map((item) => (
              <Card key={item.id} {...item} onPlaceBid={() => handlePlaceBid(item.link)} />
            ))}
          </div>
          </>
        )}

        {title === "Upcoming auction" && (
          <>
           <h5 className="text-danger py-2 border-bottom">{title}</h5> 
            <div className="mb-3 text-center">
              <h4 className="text ">
               Next auction starts in: <i class="bi bi-stopwatch-fill text-danger"></i>
               {String(hours).padStart(2, '0')}:
               {String(minutes).padStart(2, '0')}:
               {String(seconds).padStart(2, '0')}

              </h4>
            </div>
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 py-2">
           { upcomingItems.map((item) =>(
            <Card key={item.id} {...item} onPlaceBid={() => handlePlaceBid(item.link)} />
           ))}
          </div>
          </>
        )}
      </main>
    </div>
  );
};



