import './services.css';
import ImageSlider from './ImageSlider.js';
import { SliderData } from './SliderData';

import Servicescard from './servicescard.js'

function ServiceApp() {
  return (
  <div>
    <div>
      <h1>
      PUBLIC FINANCIAL MANAGEMENT
      </h1>
      <p className="servecepar">
      The public sector has a very important role in the economic development of
any country. We understand the world is under increased pressure to become
more receptive, open and accountable, and build institutions that are
responsive to the emerging improvement programs in public sector.
      </p>
    </div>
  <ImageSlider slides={SliderData} />;
  <Servicescard/>
  </div>
)};

export default ServiceApp;