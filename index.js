// @flow
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { findAll } from 'highlight-words-core';

/**
* Highlights all occurrences of search terms (searchText) within a string (textToHighlight).
* This function returns an array of strings and <Text> elements (wrapping highlighted words).
*/
class HighlightText extends Component {
  static propTypes = {
    autoEscape: PropTypes.bool,
    textToHighlight: PropTypes.string.isRequired,
    sanitize: PropTypes.func,
    style: Text.propTypes.style,

    searchWords: PropTypes.arrayOf(PropTypes.string),
    highlightStyle: Text.propTypes.style,
    highlightFontWeight: PropTypes.string,

    secondarySearchWords: PropTypes.arrayOf(PropTypes.string),
    secondaryHighlightStyle: Text.propTypes.style,
    secondaryHighlightFontWeight: PropTypes.string,
  };

  static defaultProps = {
    searchWords: [],
    secondarySearchWords: [],
  };

  highlightText(
    highlightStyle: any,
    highlightFontWeight: string,
    textToHighlight: string,
    searchWords: string[],
    callback: Function
  ) {
    const { autoEscape, sanitize } = this.props;
    const chunks = findAll({
      textToHighlight,
      searchWords,
      sanitize,
      autoEscape,
    });
    return chunks.map((chunk, index) => {
      const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

      if (chunk.highlight) {
        return (
          <Text
            key={index}
            style={chunk.highlight && highlightStyle}
            fontWeight={chunk.highlight && highlightFontWeight}
          >
            {text}
          </Text>
        );
      }
      return callback(text);
    });
  }

  render() {
    const {
      autoEscape,
      textToHighlight,
      sanitize,
      style,

      searchWords,
      highlightStyle,
      highlightFontWeight,

      secondarySearchWords,
      secondaryHighlightStyle,
      secondaryHighlightFontWeight,
      ...props
    } = this.props;

    return (
      <Text style={style} {...props}>
        {this.highlightText(
          highlightStyle,
          highlightFontWeight,
          textToHighlight,
          searchWords,
          text => {
            return this.highlightText(
              secondaryHighlightStyle,
              secondaryHighlightFontWeight,
              text,
              secondarySearchWords,
              finalText => finalText
            );
          }
        )}
      </Text>
    );
  }
}

export default HighlightText;
