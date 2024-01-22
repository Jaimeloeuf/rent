import type { Post } from '../types';

/**
 * Hardcoded post data
 */
const Posts: Record<string, Post> = {
  '01HHM9NMH72CSSRJ25KG7B7T1Q': {
    id: '01HHM9NMH72CSSRJ25KG7B7T1Q',
    createdAt: new Date().toISOString(),
    title: '1 bedroom',
    location: 'Choa Chu Kang Avenue 1',
    type: 'HDB',
    price: 1000,
    imgLinks: [
      'https://www.homates.com/Flat/sg/4905/flat_20200402145038_5e858b3e690db.jpg',
    ],
  },
  '01HH35P88NCQBKHY89N4YVSK60': {
    id: '01HH35P88NCQBKHY89N4YVSK60',
    createdAt: new Date().toISOString(),
    title: 'whole unit',
    location: 'Sunbird circle 12',
    type: 'Landed',
    price: 12000,
    imgLinks: [
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
    ],
  },
  '01HHM9NMH72CSSSRJ25KG7B7TQ11': {
    id: '01HHM9NMH72CSSSRJ25KG7B7TQ11',
    createdAt: new Date().toISOString(),
    title: '2 bedroom flat',
    location: 'Simei Avenue 1',
    type: 'HDB',
    price: 2000,
    imgLinks: ['https://uchify.com/wp-content/uploads/2023/07/image3.jpg'],
  },
  '01HH035P88NCQBKHY89N4YVSKE6': {
    id: '01HH035P88NCQBKHY89N4YVSKE6',
    createdAt: new Date().toISOString(),
    title: 'new condo',
    location: "J'Den",
    type: 'Condo',
    price: 7000,
    imgLinks: [
      'https://www.propertyhunt.sg/wp-content/uploads/2023/05/Jden-condo-1030x694.jpg',
    ],
  },
  '01HHM9NMH72CSSRJ25KG7B7T1Q1': {
    id: '01HHM9NMH72CSSRJ25KG7B7T1Q1',
    createdAt: new Date().toISOString(),
    title: '1 bedroom',
    location: 'Choa Chu Kang Avenue 1',
    type: 'HDB',
    price: 1000,
    imgLinks: [
      'https://www.homates.com/Flat/sg/4905/flat_20200402145038_5e858b3e690db.jpg',
    ],
  },
  '01HH35P88NCQBKHY89N4YVSK601': {
    id: '01HH35P88NCQBKHY89N4YVSK601',
    createdAt: new Date().toISOString(),
    title: 'whole unit',
    location: 'Sunbird circle 12',
    type: 'Landed',
    price: 12000,
    imgLinks: [
      'https://photos.zillowstatic.com/fp/473d7c134883616a2cded96363e04e40-p_e.jpg',
      'https://cdn.gobankingrates.com/wp-content/uploads/2018/06/rugged-old-house-shutterstock_412621738.jpg?webp=1&w=675&quality=75',
    ],
  },
  '01HHM9NMH72CSSSRJ25KG7B7TQ111': {
    id: '01HHM9NMH72CSSSRJ25KG7B7TQ111',
    createdAt: new Date().toISOString(),
    title: '2 bedroom flat',
    location: 'Simei Avenue 1',
    type: 'HDB',
    price: 2000,
    imgLinks: ['https://uchify.com/wp-content/uploads/2023/07/image3.jpg'],
  },
  '01HH035P88NCQBKHY89N4YVSKE61': {
    id: '01HH035P88NCQBKHY89N4YVSKE61',
    createdAt: new Date().toISOString(),
    title: 'new condo',
    location: "J'Den",
    type: 'Condo',
    price: 7000,
    imgLinks: [
      'https://www.propertyhunt.sg/wp-content/uploads/2023/05/Jden-condo-1030x694.jpg',
    ],
  },
};

/**
 * Return all hardcoded Post Data.
 */
export async function getPosts() {
  return Posts;
}

/**
 * Get a single Post. Can be null if post of postID not found.
 */
export async function getPost(postID: string): Promise<Post | null> {
  return Posts[postID];
}
