import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from '../__mocks__/axios'
import fetchGifs, { FETCH_GIFS_FULLFILLED } from '../components/actions/gifs'

jest.mock('./store')

test('Search for keyword', async () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore()
  
    // Mock Data
    const mockData = [
        {
            url: "https://giphy.com/gifs/nba-expression-nop-BWp2BQzQfBSTZYQBrv",
            username: "Test Username 1",
            title: "Test Title 1"
        },
        {
            url: "https://giphy.com/gifs/nba-expression-nop-BWp2BQzQfBSTZYQBrv",
            username: "Test Username 2",
            title: "Test Title 2"
        }
    ]
  
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: {
        data: mockData
      } }),
    )
    
    const expectedActions = [
      { type: FETCH_GIFS_FULLFILLED, payload: mockData },
    ]
  
    await store.dispatch(fetchGifs('man'))
  
    // Assertions and Expects
    expect(store.getActions()).toEqual(expectedActions)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })