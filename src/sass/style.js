import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    'textRendering': 'optimizeLegibility',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'btn': {
    'borderRadius': '40px',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 35 }],
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'textDecoration': 'none',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.198)' }]
  },
  'btnbtn-solid': {
    'background': '#000',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'transition': 'all ease-in-out .2s'
  },
  'btnbtn-solid:hover': {
    'background': '#EA5F57',
    'borderColor': '#EA5F57',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.278)' }]
  },
  'btnbtn-outline': {
    'background': 'none',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'color': '#000',
    'transition': 'all ease-in-out .2s'
  },
  'btnbtn-outline:hover': {
    'background': '#000',
    'borderColor': '#000',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.278)' }]
  },
  'mr-10': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'mr-20': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'ml-10': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'mt-10': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'mb-10': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'mh-10': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '1000'
  },
  'header header__content': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 92 }],
    'display': 'flex',
    'WebkitBoxAlign': 'center',
    'alignItems': 'center',
    'WebkitBoxPack': 'justify',
    'justifyContent': 'space-between',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'header nav': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'header nav span a': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 16 }],
    'textDecoration': 'none',
    'color': '#EA5F57'
  },
  'header header__right a': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 6 }]
  },
  'header header__right a img': {
    'opacity': '0.3'
  },
  'header header__right a:hover img': {
    'opacity': '1'
  },
  'heroku': {
    // background-color: #f9f2db;
    'backgroundSize': '100% auto'
  },
  'heroku heroku__content': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'left',
    'WebkitBoxAlign': 'center',
    'alignItems': 'center',
    'WebkitBoxPack': 'justify',
    'justifyContent': 'space-between',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'heroku heroku__content h2': {
    'fontSize': [{ 'unit': 'em', 'value': 3.7 }],
    'fontWeight': '400',
    'width': [{ 'unit': 'px', 'value': 600 }],
    'fontStyle': 'italic',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'heroku heroku__content h4': {
    'width': [{ 'unit': 'px', 'value': 600 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.7 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'color': '#EA5F57',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.222)' }]
  }
});
