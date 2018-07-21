import React from 'react';

class QuoteDisplay extends React.Component {
  render() {
    const quote = this.props.quote;

    return (
      <div className="quoteDisplay">
        <div>
          {quote.text}
        </div>
      </div>
    );
  }
}

export default QuoteDisplay;
