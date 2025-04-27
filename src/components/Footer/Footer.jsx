import './footer.css';
// IMPORTERE SwipeBar greier her
import SwipeNav from '../SwipeNavigation/SwipeNavigation';

function Footer() {

  return (
   <> 
      <section className="footer-section">
          {/* lese inn SwipeNav komponenten her */}
        <SwipeNav/> 
      </section>
    </>
  );
}

export default Footer;
