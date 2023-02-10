import { Component } from "react";
import { motion } from 'framer-motion';
class Homepage extends Component {
  render() {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 1 }}
        exite={{ x:window.innerWidth,transition:{duration:0.2} }}
      >
        <div>this the Homepage page</div>
      </motion.div>
    );
  }
}

export default Homepage;
