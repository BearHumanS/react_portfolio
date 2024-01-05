export const getCount = async () => {
  try {
    const response = await fetch(
      'https://api.counterapi.dev/v1/bearhuman/counter/up',
    )
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('에러가 발생했습니다: ', error)
    throw error
  }
}
