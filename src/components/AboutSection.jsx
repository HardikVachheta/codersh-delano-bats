import { sectionVariants } from "../App";
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
      <section id="about" className="py-20 bg-red-700">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
              <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-white"
              >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                  <h3 className="text-3xl md:text-2xl font-bold mb-6">Delano Bat Company</h3>
                  <p className="text-gray-300 mb-6">
                      Delano is a small company with a big vision - to bring innovation to the great game of baseball while staying true to the unique roots, traditions and history of America's Pastime.
                  </p>
                  <p className="text-gray-300">
                      Delano’s first bat was spun in 2012. As an 8th grader in Delano, Minnesota, Peter Kruse was trying to keep busy during a rainy and cold spring break. Peter had long wanted to make his own wood bat. After watching several YouTube videos, Peter and his brother Andrew built their own drill-powered lathe. They turned their first bat using a screwdriver and a chisel. Delano Bat Company was born.
                  </p>
              </motion.div>
              <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center justify-center" // Added for centering
              >
                  <img src="./book2.jpg" className="w-130 h-80 text-gray-400" />
              </motion.div>
          </div>
      </section>
  );
};