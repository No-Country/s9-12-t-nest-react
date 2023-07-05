import dbProduct from './db_stockJSON'

const getData = async () => {
  const response = await fetch(dbProduct)
  const data = await response.json()
  return data
}

export default getData
