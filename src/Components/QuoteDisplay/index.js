import React from 'react';
import './index.scss';

class QuoteDisplay extends React.Component {
  render() {
    const quote = this.props.quote;

    return (
      <div className="quote-display">
        <h2>
          {quote.text}
        </h2>
      </div>
    );
  }
}

export default QuoteDisplay;
