import React from "react";

const Card = ({ subject, price }) => {
  return (
    <div className="w-60 m-4 flex flex-col rounded-xl bg-black text-white min-h-[19rem] border-2 ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold ">Monkey</h1>
          <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>{subject}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
