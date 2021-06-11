import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  locale: 'en-us',
  charts: [],

  items: [
    {
      id: 1,
      itemTitle: 'Visits'
    },

    {
      id: 2,
      itemTitle: 'Unique'
    },

    {
      id: 3,
      itemTitle: 'Pageviews'
    },

    {
      id: 4,
      itemTitle: 'New Users'
    },

    {
      id: 5,
      itemTitle: 'Bounce Rate'
    }
  ]
}

const changeState = (state = initialState, { type, locale, id, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }

    case 'set-locale':
      return { ...state, locale: locale }

    case 'add-chart':
      if (state.charts.length < 6) {
        let stateCopy = {
          ...state,
          charts: state.charts.map((i, idx) => ({ ...i, id: idx + 1 }))
        };

        stateCopy.charts.push({
          id: state.charts.length + 1,
          chartType: 'chart-line',
          chartTitle: '',
          day: true,
          month: false,
          year: false
        });

        return stateCopy;
      }

      return state;

    case 'remove-chart':
      return {
        ...state,
        charts: state.charts.filter(i => (i.id === id) ? false : true)
      }

    case 'find-chart':
      return {
        ...state,
        charts: state.charts.map(i => i.id === id ? { ...i, ...rest } : i)
      }

    case 'set-chart-day':
      return {
        ...state,
        charts: state.charts.map(i => i.id === id ? {
          ...i,
          day: true,
          month: false,
          year: false
        } : i)
      }

    case 'set-chart-month':
      return {
        ...state,
        charts: state.charts.map(i => i.id === id ? {
          ...i,
          day: false,
          month: true,
          year: false
        } : i)
      }

    case 'set-chart-year':
      return {
        ...state,
        charts: state.charts.map(i => i.id === id ? {
          ...i,
          day: false,
          month: false,
          year: true
        } : i)
      }

    case 'set-chart-type':
      return {
        ...state,
        charts: state.charts.map(i => i.id === id ? { ...i, ...rest } : i)
      }

    case 'find-item':
      return {
        ...state,
        items: state.items.map(i => i.id === id ? { ...i, ...rest } : i)
      }

    default:
      return state
  }
}

const store = createStore(changeState)
export default store