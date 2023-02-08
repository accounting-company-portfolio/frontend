import './services.css';
import ImageSlider from './ImageSlider.js';
import { SliderData } from './SliderData';

import Servicescard from './servicescard.js'

function ServiceApp() {
  return (
    <div className="page_container">
  <ImageSlider slides={SliderData} />;
  <Servicescard/>
  </div>
)};

export default ServiceApp;