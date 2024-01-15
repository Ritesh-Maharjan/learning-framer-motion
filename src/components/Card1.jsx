import React from 'react'
import { motion } from 'framer-motion'

const Card1 = () => {

    const [isAnimate, setIsAnimate] = React.useState(false);
    return (
        <div className='box-container'>
            <motion.div className="box"
                animate={{
                    x: isAnimate ? 500 : 0,
                    opacity: isAnimate ? 1 : 0.5,
                    rotate: isAnimate ? 360 : 0
                }}
                // initial={{
                //     opacity: 0
                // }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                }}
                onClick={() => { setIsAnimate(!isAnimate) }}
            >

            </motion.div>
        </div>
    )
}

export default Card1