/**
 * 读取sessionStorage
 */
export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key)
}

/**
 * 设置sessionStorage
 */
export const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value)
}

/**
 * 将数字转化为千分位按照逗号,分割
 */
export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}