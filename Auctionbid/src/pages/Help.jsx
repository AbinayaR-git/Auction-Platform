import { useEffect } from "react";

export const Help = () => {
  useEffect(() => {
    document.title = "Help & Support";
    const favicon = document.querySelector("link[rel='icon']");
    const originalHref = favicon?.href;

    if (favicon) {
      favicon.href = "/help.svg"; 
    }
 
    return () => {
      if (favicon) {
        favicon.href = originalHref;
      }
    };
  }, []);

    return (      
      <div className="container my-3">
        <div className="text-center mb-5">
          <h1 className="text-warning fw-bold">
            <i className="bi bi-question-circle-fill me-2"></i> Help & Support 
          </h1>
          <p className="text-muted fs-5">
            Got questions? We've got answers. Whether you're buying, selling, or just browsing, we're here to guide you through every step.
          </p>
        </div>
  
        <div className="row g-5">
          <div className="col-md-6">
            <h4 className="text-danger mb-3">
               <span className="material-symbols-outlined text-danger me-2" style={{ fontSize: '28px' }}>
                 gavel
               </span>
             How to Place a Bid?
            </h4>
            <p className="text-secondary">
              Browse live auctions, click on a product you love, and place your bid in the field provided. Make sure you're logged in to participate. Watch the timer — once it hits zero, the highest bidder wins!
            </p>
          </div>
  
          <div className="col-md-6">
            <h4 className="text-danger mb-3">
              <i className="bi bi-box-arrow-up"></i> Selling Your Items
            </h4>
            <p className="text-secondary">
              Head to your Seller Dashboard, add item details (photos, title, description), and set your starting bid. Once submitted, your product goes live for bidding and exposure!
            </p>
          </div>
  
          <div className="col-md-6">
            <h4 className="text-danger mb-3">
              <i className="bi bi-clock-history"></i> Auction Timing
            </h4>
            <p className="text-secondary">
              Each auction has a countdown timer displayed on the product card. You can place bids until the timer reaches zero. Late bids may reset the timer slightly to allow fair competition.
            </p>
          </div>
  
          <div className="col-md-6">
            <h4 className="text-danger mb-3">
              <i className="bi bi-shield-lock"></i> Is My Data Safe?
            </h4>
            <p className="text-secondary">
              Absolutely. We use end-to-end encryption and secure payment gateways to protect all your personal and financial data. Privacy is our top priority.
            </p>
          </div>
  
          <div className="col-12">
            <h4 className="text-danger mb-3">
              <i className="bi bi-envelope-fill"></i> Still Need Help?
            </h4>
            <p className="text-secondary mb-4">
              No worries! Contact our friendly support team at <strong>support@auctionbid.com</strong> or chat with us using the message icon at the bottom of your screen.
            </p>
            <div className="text-center">
              <a href="/" className="btn btn-warning btn-lg px-4">
                <i className="bi bi-house-door-fill me-2"></i> Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  