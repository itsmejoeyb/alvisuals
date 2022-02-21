import { motion } from "framer-motion";

type AnimateProps = {
    line1: string
    line2: string
}

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: .5,
            staggerChildren: .02,
            ease: [0, 0, .58, 1]
        }
    }
}

const letter = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
}

const AnimatedText = ({ line1, line2 }: AnimateProps) => {
    let words1: string[] = []
    let words2: string[] = []
    line1.split(" ").map(word => words1.push(word.concat("\u00A0")))
    line2.split(" ").map(word => words2.push(word.concat("\u00A0")))

    return (
        <>
            <motion.h1
                className="text-5xl sm:text-[6rem] lg:text-[7rem] leading-[1.1] break-normal"
                style={{fontFamily: 'Playfair Display'}}
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {words1.map(word => word.split('').map((char, index) => {
                    return (
                        <span
                            className="overflow-hidden inline-block align-top -m-[0.2em] p-[0.2em]"
                            key={index}
                        >
                            <motion.span className="inline-block" key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        </span>    
                    )
                }))}
                <br />
                {words2.map(word => word.split('').map((char, index) => {
                    return (
                        <span
                            className="overflow-hidden inline-block align-top -m-[0.2em] p-[0.2em]"
                            key={index}
                        >
                            <motion.span className="inline-block align-top" key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        </span>
                    )
                }))}
            </motion.h1>
        </>
    );
}

export default AnimatedText;