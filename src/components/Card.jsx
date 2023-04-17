import React from "react";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div href="hello">
        <img
          class="rounded-t-lg h-96 w-full object-cover"
          src={data.imgSrc}
          alt=""
          style={{ maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
      <div class="p-5">
        <div href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.desc}
        </p>
        <view className="w-full flex flex-row justify-between">
          <view
            onClick={() => {
              window.open(data.linkOfWebsite);
            }}
            href="hello"
            class="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Web-Link
          </view>
          <view
            onClick={() => {
              window.open(data.linkOfGithub);
            }}
            href="hello"
            class="cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Github link
          </view>
        </view>
      </div>
    </motion.div>
  );
};

export default Card;
