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
      profitwell('start', { 'user_email': email });
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
      (function (i, s, o, g, r, a, m, n) {
            n = s.createElement("script");
            n.setAttribute("id", "profitwell-js");
            n.setAttribute("data-pw-auth", authToken);
    
            i[o] = i[o] || function () { (i[o].q = i[o].q || []).push(arguments) };
                a = s.createElement(g); m = s.getElementsByTagName(g)[0]; 
                m.parentNode.insertBefore(n, m);
                
                a.async = 1; a.src = r + '?auth=' +
                s.getElementById(o + '-js').getAttribute('data-pw-auth'); 
                m.parentNode.insertBefore(a, m);
        })
            (
                window,
                document,
                'profitwell',
                'script',
                'https://public.profitwell.com/js/profitwell.js',
            );    
    /* eslint-enable */
  }
  render() {
    return null;
  }
}

export default Profitwell;
