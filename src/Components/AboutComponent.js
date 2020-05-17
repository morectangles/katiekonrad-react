import React, { Component } from 'react';
import { motion } from 'framer-motion';


class About extends Component {


    render() {

        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }

        const list = { hidden: { opacity: 0 }, visible: { opacity: 1} }
        const item = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} }
        const item2 = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} }

        return(
            <div>
                <motion.ul style={{ listStyleType: 'none', fontSize: 40 }} initial='hidden' animate="visible" variants={list} transition={{ duration: 2, staggerChildren: true }} >
                    <motion.li variants={item} fontSize={300} >{`Katie is an educator,`}</motion.li>
                    <motion.li variants={item}>{`artist,`}</motion.li>
                    <motion.li variants={item}>{`and junior developer`}</motion.li><motion.li variants={item}>{` living in Pittsburgh, PA.`}</motion.li>
                </motion.ul>
                {/*
                <motion.div initial="hidden"
                    animate="visible"
                    //variants={variants}
                    >
                    <h1 className="mx-left">
                        {`Katie is an educator,`}
                    </h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}>
                    <h1 className="mx-auto">
                        {`artist,`}
                    </h1>
                </motion.div>
                <h1 className="mx-right">
                    {`and front end developer living in Pittsburgh, PA.`}
                </h1>
                <p>
                    paragraph?
                </p>
                */}
            </div>
        );
    }
}
/*
const styles = StyleSheet.create(
    {
        listItems: {
            list-style: none,
            fontSize: 600
        }
    }
)
*/
export default About;