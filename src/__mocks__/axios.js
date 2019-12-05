// import jest from 'jest'

const mockAxios = jest.genMockFromModule('axios')

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios