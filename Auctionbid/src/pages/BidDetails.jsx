import { useParams } from "react-router-dom";
import { useState } from "react";
import backup from "../assets/backup.jpg";

const dummyData = [
    {
      id: 1,
      title: "Vintage Watch",
      description: "A rare antique watch from the 19th century.\nTimeless elegance with historic craftsmanship.\nPerfect for collectors of classic luxury.",
      image: "/src/assets/watch.jpg",
      bidPrice: 5000,
      seller: "John's Antiques",
    },
    {
      id: 2,
      title: "Classic Painting",
      description: "An original masterpiece by a renowned artist.\nRich colors and masterful brushstrokes.\nIdeal for fine art enthusiasts and investors.",
      image: "/src/assets/classic painting.jpg",
      bidPrice: 12000,
      seller: "Gallery House",
    },
    {
      id: 3,
      title: "Luxury Car",
      description: "Limited edition sports car in pristine shape.\nPowerful performance meets stylish design.\nDrive or display a true automotive gem.",
      image: "/src/assets/luxury car.jpg",
      link: "/bid/3",
      seller: "Elite Motors",
      bidPrice: 120000,
    },
    {
      id: 4,
      title: "Gold Necklace",
      description: "A stunning 24K gold necklace with diamonds.\nRadiates elegance, beauty, and luxury.\nA centerpiece for any premium collection.",
      image: "/src/assets/necklace.jpg",
      link: "/bid/4",
      seller: "Golden Grace",
      bidPrice: 7500,
    },
    {
      id: 5,
      title: "Rare Coin Collection",
      description: "Ancient coins from different civilizations.\nFull of historical and collectible value.\nA treasure trove for numismatics fans.",
      image: "/src/assets/coins.jpg",
      link: "/bid/5",
      seller: "Coin Legacy",
      bidPrice: 4300,
    },
    {
      id: 6,
      title: "Signed Baseball",
      description: "Autographed by a legendary player.\nCherished piece of sports history.\nA dream collectible for baseball lovers.",
      image: "/src/assets/baseball.jpg",
      link: "/bid/6",
      seller: "Collector's Den",
      bidPrice: 2200,
    },
    {
      id: 7,
      title: "Antique Furniture Set",
      description: "Handcrafted wooden pieces with intricate detail.\nBlends tradition, utility, and design.\nIdeal for vintage-themed interiors.",
      image: "/src/assets/furniture.jpg",
      link: "/bid/7",
      seller: "Vintage Woods",
      bidPrice: 15000,
    },
    {
      id: 8,
      title: "Vintage Camera",
      description: "Classic film camera, fully functional.\nCapture moments with retro charm.\nGreat for collectors and photography lovers.",
      image: "/src/assets/camera.jpg",
      link: "/bid/8",
      seller: "Retro Snap",
      bidPrice: 1800,
    },
    {
      id: 9,
      title: "Rare Stamp Collection",
      description: "Stamps from different eras and nations.\nEach one tells a story of time and place.\nA valuable set for serious philatelists.",
      image: "/src/assets/stamps.jpg",
      link: "/bid/9",
      seller: "StampWorld",
      bidPrice: 3700,
    },
    {
      id: 10,
      title: "Handcrafted Persian Rug",
      description: "Intricately designed traditional Persian rug.\nA fine example of textile artistry.\nAdds warmth, culture, and class to any room.",
      image: "/src/assets/rug.jpg",
      link: "/bid/10",
      seller: "Oriental Rugs Co.",
      bidPrice: 9800,
    },
    {
      id: 11,
      title: "Luxury Handbag",
      description: "Designer bag in flawless condition.\nElegance that complements any style.\nA must-have fashion icon for collectors.",
      image: "/src/assets/handbag.jpg",
      link: "/bid/11",
      seller: "Fashion Elite",
      bidPrice: 6300,
    },
    {
      id: 12,
      title: "Diamond Ring",
      description: "Brilliantly cut diamond with dazzling shine.\nSymbolizes love, power, and prestige.\nPerfect for proposals or personal pride.",
      image: "/src/assets/ring.jpg",
      link: "/bid/12",
      seller: "Jewel Palace",
      bidPrice: 11000,
    },
    {
      id: 13,
      title: "Antique Grandfather Clock",
      description: "Wooden clock from the 1800s.\nFunctional and visually majestic.\nTick-tocks with historic charm.",
      image: "/src/assets/clock.jpg",
      link: "/bid/13",
      seller: "Time & Tradition",
      bidPrice: 5100,
    },
    {
      id: 14,
      title: "Vintage Vinyl Records",
      description: "A collection of classic vinyl records.\nIconic hits from legendary musicians.\nTrue analog sound for audiophiles.",
      image: "/src/assets/vinyl.jpg",
      link: "/bid/14",
      seller: "Sound Legacy",
      bidPrice: 2700,
    },
    {
      id: 15,
      title: "Collector’s Edition Comic Book",
      description: "First-edition comic in pristine state.\nA rare find for fans and investors.\nCelebrate superhero legacy in print.",
      image: "/src/assets/comic.jpg",
      link: "/bid/15",
      seller: "Comic Vault",
      bidPrice: 4400,
    }
  ];
  

export const BidDetails = () => {
  const { id } = useParams();
  const itemData = dummyData.find((item) => item.id === parseInt(id));

  const [currentItem, setCurrentItem] = useState(itemData);
  const [userBid, setUserBid] = useState("");
  const [message, setMessage] = useState("");
  const [isBidPlaced, setIsBidPlaced] = useState(false);

  if (!currentItem) {
    return <div className="container py-5"><h3>Product not found</h3></div>;
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();

    const bidValue = parseFloat(userBid);
    if (isNaN(bidValue) || bidValue <= currentItem.bidPrice) {
      setMessage(" Your bid must be higher than the current bid.");
    } else {
      setCurrentItem({ ...currentItem, bidPrice: bidValue });
      setMessage(" Your bid was successfully placed!");
      setUserBid("");
      setIsBidPlaced(true);
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={currentItem.image || backup}
            alt={currentItem.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-danger">{currentItem.title}</h2>
          <p>{currentItem.description}  </p>   
          <p><strong>Current Bid Price:</strong> ${currentItem.bidPrice}</p>
          <p><strong>Seller:</strong> {currentItem.seller}</p>

          <form onSubmit={handleBidSubmit} className="mt-4">
            <label className="form-label">Enter your bid amount:</label>
            <input
              type="number"
              className="form-control mb-2"
              value={userBid}
              onChange={(e) => setUserBid(e.target.value)}
              placeholder={`More than $${currentItem.bidPrice}`}
              min={currentItem.bidPrice + 1}
              required
            />
            <button type="submit" className="btn btn-warning w-100" disabled={isBidPlaced}>
              {isBidPlaced ? " Bid Placed" : "Place Bid"}
            </button>
          </form>

          {message && (
            <div className="alert mt-3" style={{ color: message.includes("") ? "green" : "red" }}>
              {message}
            </div>
          )}
          <div className="mt-4">
           <a href="/Auction/Category" className="btn btn-outline-secondary w-100">
             ⬅ Back to Category
           </a>
          </div>
        </div>
      </div>
    </div>
  );
};
