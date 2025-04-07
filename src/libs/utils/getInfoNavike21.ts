type TInfoNavike21 = {
  numberOfYears: number
  numberOfProjects: number
  numberOfClients: number
}

export const getInfoNavike21 = (): TInfoNavike21 => {
  const startDate = new Date('2021-06-01')
  const currentDate = new Date()
  const diffInYears = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  )
  return {
    numberOfYears: diffInYears,
    numberOfProjects: 120,
    numberOfClients: 50
  }
}
