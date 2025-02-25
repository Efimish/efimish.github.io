import getReadingTime from 'reading-time';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

export default (text: string) => {
    const root = fromMarkdown(text);
    const str = toString(root);
    const time = getReadingTime(str);
    return time.text;
}