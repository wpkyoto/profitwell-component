import React from 'react';

class Profitwell extends React.Component {
  state = {
    hasInit: false
  }
  componentDidUpdate() {
    const { profitwell } = window;
    const { hasInit } = this.state;
    if (!profitwell || hasInit) return;
    const { email } = this.props;
    if (email) {
      profitwell('user_email', email);
      this.setState({
        hasInit: true
      })
    }
  }
  componentDidMount() {
    const { shouldNotLoad, authToken } = this.props
    if (shouldNotLoad) return;
    if (!authToken) {
      console.error('ERROR: property authToken is required')
      return
    }
    // Beginning of Profitwell Awesomeness Code (which loads totally asynchronously)
    /* eslint-disable */
    (function(i, s, o, g, r, a, m) {
      i.ProfitWellObject = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      'script',
      'https://dna8twue3dlxq.cloudfront.net/js/profitwell.js',
      'profitwell',
    );
    /* eslint-enable */
    if (window.profitwell) window.profitwell('auth_token', authToken)
  }
  render() {
    return null;
  }
}

export default Profitwell;