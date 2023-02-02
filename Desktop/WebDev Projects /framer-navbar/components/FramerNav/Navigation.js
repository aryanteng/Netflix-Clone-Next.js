import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },

  {
    name: "Services",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {items.map((item, i) => (
      <MenuItem item={item.name} url={item.url} key={i} />
    ))}
  </motion.ul>
);
