export const changeLangPath = (pathname: string, lang: string) => {
  const path = pathname.split('/')
  path[1] = lang
  return path.join('/')
}
