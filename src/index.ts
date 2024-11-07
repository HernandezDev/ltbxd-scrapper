import "module-alias/register";
import { getPublicLists, getWatchlist } from "./user/user";
import { listByTitle } from "./lists/lists";
import { getMovieByTitle } from "./movie/movie";

const ltbxdScrapper = {
  getWatchlist,
  listByTitle,
  getPublicLists,
  getMovieByTitle,
};

async function testFunction() {
  // const userwatchlist = await ltbxdScrapper.getWatchlist({
  //   username: "maribelbhf",
  //   options: {
  //     posters: true,
  //   },
  // });

  // const publicList = await ltbxdScrapper.listByTitle({
  //   username: "maribelbhf",
  //   listTitle: "Peliculitas para asustarnos de manera uteana v1.0",
  //   options: {
  //     posters: false,
  //   },
  // });

  // const userLists = await ltbxdScrapper.getPublicLists({
  //   username: "maribelbhf",
  // });

  const searchForMovie = await ltbxdScrapper.getMovieByTitle({
    title: "SAW",
  });

  console.log(searchForMovie);
}

testFunction();
