/* eslint-disable max-len */
const IMG_URL_KITTY_VEYRON = `https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg`
const IMG_URL_NEBULA_CAT = `https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg`
/* eslint-enable max-len */

const mocks = {
  Track: () => ({
    id: () => `track_01`,
    title: () => `Astro Kitty, Space Explorer`,
    author: () => ({
      name: `Grumpy Cat`,
      photo: IMG_URL_KITTY_VEYRON,
    }),
    thumbnail: () => IMG_URL_NEBULA_CAT,
    length: () => 1210,
    modulesCount: () => 6,
  }),
}

export default mocks
