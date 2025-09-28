import { data } from "./data"

const homepageOrders = [
  "Iliona (15).jpg",
  "BLANK - hero",
  "Selena (22).jpg",  
  "Alana (21).jpg",
  "Alfred (1).jpg",
  "Jason Fuckboy (17).jpg",
  "Jason Fuckboy (11).jpg",
  "ZozoLouvres (21).jpg",
  "Selena (7).jpg",
  "Mathilde (13).jpg",
  "sirehsn (3).jpg",
  "sirehsn & dameeljo (1).jpg",
]

function getArray(orders: string[]) {
  const res = orders.map(
    (file) => data.find((item) => item.file === file) || null,
  )
  return res.filter((item) => item !== null)
}

export const homepage = getArray(homepageOrders)
