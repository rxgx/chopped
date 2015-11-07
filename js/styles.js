function merge(obj1, obj2) {
  var result = {};
  for (var prop in obj1) result[prop] = obj1[prop];
  for (var prop in obj2) result[prop] = obj2[prop];
  return result;
}

var inlineMixin = {
  display: 'inline-block',
  verticalAlign: 'middle'
};

var styles = {
  button: {
    border: '1px solid lightgray',
    padding: '.5em 1em',
    backgroundColor: '#39f',
    color: 'white',
    display: 'inline-block'
  },

  content: {
    marginTop: '3em',
    textAlign: 'center'
  },

  separator: merge(inlineMixin, {
    margin: '0 1em',
    fontSize: '1.25rem',
    fontFamily: 'serif',
    fontStyle: 'italic'
  }),

  output: merge(inlineMixin, {
    border: '1px solid #39f',
    padding: '.5em .75em',
    fontSize: '1.75em',
    fontWeight: '300',
    lineHeight: '1.75rem'
  })
};
