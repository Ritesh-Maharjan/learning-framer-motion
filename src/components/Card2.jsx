import React from 'react'
import { motion } from 'framer-motion'

const Card2 = () => {
    return (
        <div className='box-container'>
            <motion.div className="box"
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 }
                }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                whileTap={{
                    x: 500,
                    scale: 0.8,
                }}
            >
            </motion.div>
        </div>
    )
}

export default Card2