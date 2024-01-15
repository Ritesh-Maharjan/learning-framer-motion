import React from 'react'
import { motion } from 'framer-motion'

const Card3 = () => {

    const boxVariants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.9
            },
        }
    }

    const childVariants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                // delay: 1
            },
        }
    }

    return (
        <div className='box-container'>
            <motion.div
                className="box"
                variants={boxVariants}
                initial='hidden'
                animate='visible'
            >
                {
                    [1, 2, 3].map((item, index) => {
                        return (<motion.li key={index} className='box-item' variants={childVariants}></motion.li>)
                    })
                }
            </motion.div>
        </div>
    )
}

export default Card3