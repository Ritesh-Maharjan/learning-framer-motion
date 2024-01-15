import React from 'react'
import { motion } from 'framer-motion'

const Card3 = () => {
    return (
        <div className='box-container'>
            <motion.div
                className="box"
                animate={{
                    scale: [1.4, 1, 0.6],
                    borderRadius: ["20%", "50%", "20%"],
                    rotate: [0, 0, 270],
                }}
                transition={{ duration: 1 }}
            >
            </motion.div>
        </div>
    )
}

export default Card3