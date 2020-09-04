import {createStore} from 'redux';

const initialState = {
  players: [
    {
      id: 1,
      name: 'Hector',
      photo:
        'https://s3.amazonaws.com/uifaces/faces/twitter/charlesrpratt/128.jpg',
    },
    {
      id: 2,
      name: 'Geraldine',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/jpenico/128.jpg',
    },
    {
      id: 3,
      name: 'Alec',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg',
    },
    {
      id: 4,
      name: 'Wilfrid',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg',
    },
    {
      id: 5,
      name: 'Javier',
      photo:
        'https://s3.amazonaws.com/uifaces/faces/twitter/craighenneberry/128.jpg',
    },
    {
      id: 6,
      name: 'Maybell',
      photo:
        'https://s3.amazonaws.com/uifaces/faces/twitter/sydlawrence/128.jpg',
    },
    {
      id: 7,
      name: 'Hortense',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/nicklacke/128.jpg',
    },
    {
      id: 8,
      name: 'Jaquelin',
      photo:
        'https://s3.amazonaws.com/uifaces/faces/twitter/estebanuribe/128.jpg',
    },
    {
      id: 9,
      name: 'Alexander',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/vinciarts/128.jpg',
    },
    {
      id: 10,
      name: 'Peter',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/smaczny/128.jpg',
    },
    {
      id: 11,
      name: 'Jerrold',
      photo:
        'https://s3.amazonaws.com/uifaces/faces/twitter/oksanafrewer/128.jpg',
    },
    {
      id: 12,
      name: 'Fannie',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/mattlat/128.jpg',
    },
    {
      id: 13,
      name: 'Lempi',
      photo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ratbus/128.jpg',
    },
  ],
  titulares: [],
  substitutes: [],
};
const reducerManger = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id),
      };
    case 'ADD_SUBSTITUTE':
      return {
        ...state,
        substitutes: state.substitutes.concat(action.player),
        players: state.players.filter(player => player.id !== action.player.id),
      };
    case 'QUIT_TITULAR':
      return {
        ...state,
        players: state.players.concat(action.player),
        titulares: state.titulares.filter(
          player => player.id !== action.player.id
        ),
      };
    case 'QUIT_SUBSTITUTE':
      return {
        ...state,
        players: state.players.concat(action.player),
        substitutes: state.substitutes.filter(
          player => player.id !== action.player.id
        ),
      };
    default:
      return state;
  }
};

export default createStore(reducerManger);
