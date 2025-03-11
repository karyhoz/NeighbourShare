import PostImage from "../assets/PostItemsimage.jpeg"
import BrowseItem from "../assets/BrowseCategories.jpeg"
import RequestItem from "../assets/RequestItems.jpeg"
import "./Features.css";
const Features = () => {
  return (
    <div className="main-container">
        <div className="features-container">
            <div className="feature-header-content">
                <p className="feature-header-text">Explore the main features of NeighborShare like posting items, browsing categories, and requesting items.</p>
                <h2 className="feature-header">Discover NeighborShare Features</h2>
            </div>
            <div className="feature-flex-container">
                <div className="features post-items">
                    <h3>Post Items</h3>
                    <p>Easily post items you no longer need with your neighbors by posting them on NeighborShare. Simply upload a photo, describe the item, and set the availability.</p>
                    <img src={PostImage} alt="Post Image" className="post-image" />
                    <p className="bottom-txt">Help your neighbors by sharing items you no longer need. It&apos;s quick and easy to post an item.</p>
                </div>
                <div className="features browse-items">
                    <h3>Browse Categories</h3>
                    <p>Browse through various categories to find items that match your needs. From electronics to furniture,tools, books, and clothing.</p>
                    <img src={BrowseItem} alt="Browse item image" className="browse-image" />
                    <p className="bottom-txt">Discover a variety of items in different categories. NeighborShare makes it easy to find what you need.</p>
                </div>
                <div className="features request-item">
                    <h3>Request Items</h3>
                    <p>If you need an item but don&apos;t see it on NeighborShare, you can request it. Simply describe the item you need, and your neighbors will be notified.</p>
                    <img src={RequestItem} alt="Request item image" className="request-image" />
                    <p className="bottom-txt">Request items with ease and get in touch with your neighbors to arrange a pickup.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features