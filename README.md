# React Native Highlight Text
React Native component used to highlight words within a larger body of text. This is a fork of [react-native-highlight-words](https://github.com/clauderic/react-native-highlight-words) which is a port of [react-highlight-words](https://github.com/bvaughn/react-highlight-words).

## Installation
Using [npm](https://www.npmjs.com/package/@bam.tech/react-native-highlight-text):
```
yarn add @bam.tech/react-native-highlight-text
```

## Usage

To use it, just provide it with an array of search terms and a body of text to highlight:

```jsx
import HighlighText from 'r@bam.tech/react-native-highlight-text';

<HighlighText
  highlightStyle={{backgroundColor: 'yellow'}}
  searchWords={['and', 'or', 'the']}
  textToHighlight='The dog is chasing the cat. Or perhaps they're just playing?'
/>
```

And the `HighlighText` component will highlight all occurrences of search terms within the text:

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://cloud.githubusercontent.com/assets/29597/11914033/e3c319f6-a629-11e5-896d-1a5ce22c9ea2.png">


## Props

| Property        | Type          | Required? | Description                                                                          |
|:----------------|:--------------|:---------:|:------------------------------------------------------------------------------------------------------------------------|
| autoEscape      | Boolean       |           | Escape characters which are meaningful in regular expressions                        |
| style           | Object        |           | Styles applied to the text wrapper                                                   |
| sanitize        | Function      |           | Process each search word and text to highlight before comparing (eg remove accents) signature `(text: string): string` |
| searchWords     | Array<String> |     ✓     | Array of search words                                                                |
| textToHighlight | String        |     ✓     | Text to highlight matches in                                                         |
| highlightStyle  | Object        |           | Styles applied to highlighted text                                                   |
| secondarySearchWords     | Array<String> |     X     | Array of search words for a secondary kind of highlights                                                               |
| secondaryHighlightStyle           | Object        |     X     | Styles applied to the text wrapper for a secondary kind of highlights                                                    |
| secondaryTextToHighlight | String        |     X     | Text to highlight matches in  for a secondary kind of highlights                                                            |

## License
MIT License - fork, modify and use however you want.


