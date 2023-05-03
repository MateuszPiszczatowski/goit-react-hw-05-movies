const API_KEY = "257d3002876fa504627cffb9f7223956";

export const getTrending = () => {
  return [
    { title: "title1", id: "id1" },
    { title: "title2", id: "id2" },
    { title: "title3", id: "id3" },
  ];
};

export const getByTitle = (title) => {
  const titles = [];
  if (title !== "") {
    for (let i = 0; i < 15; i++) {
      titles.push({ title: `${title}${i + 1}`, id: i });
    }
  }
  return titles;
};

export const getMovieDataById = (id) => {
  return {
    title: "Movie with id: " + id,
    id: id,
    imageLink: "",
    score: 100,
    year: 2000,
    overview: "some overview: " + id,
    genres: ["genre1", "genre2", "genre3"],
  };
};

export const getMovieReviewsById = (id) => {
  return [
    { author: "author1", review: "review", score: 100 },
    { author: "author2", review: "review", score: 100 },
    { author: "author3", review: "review", score: 100 },
  ];
};

export const getMovieCastById = (id) => {
  return [
    { name: "name1", photo: "src1", character: "role1" },
    { name: "name2", photo: "src2", character: "role2" },
    { name: "name3", photo: "src3", character: "role3" },
  ];
};
