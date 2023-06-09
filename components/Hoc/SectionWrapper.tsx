import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const StarWrapper = (Component: any, idName: any) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`relative z-0`}
			>
				<span id={idName}>
				</span>
				<Component />
			</motion.section>
		);
	};

export default StarWrapper;