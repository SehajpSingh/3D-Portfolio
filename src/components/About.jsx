/*import React from 'react'

const About = () => {
  return (
    <div> About </div>
  )
}
export default About 

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
*/


import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';

const textVariant = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
});

const simpleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={simpleVariants}
      className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px">
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
          I'm a skilled worker.
      </motion.p>
      

      </>
  );
}

export default About;


