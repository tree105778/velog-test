import React from 'react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import styles from '../../pages/PostWrite.module.css';

const MarkdownPreview = ({ markdown, title }) => {
  const [html, setHtml] = React.useState('');

  React.useEffect(() => {
    const processMarkdown = async () => {
      if (!markdown) {
        setHtml('');
        return;
      }

      try {
        // 마크다운을 HTML로 변환
        const result = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeRaw)
          .use(rehypeStringify)
          .process(markdown);

        setHtml(String(result));
      } catch (error) {
        console.error('마크다운 변환 오류:', error);
      }
    };

    processMarkdown();
  }, [markdown]);

  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewContainer}>
        {title && <h1 className={styles.previewTitle}>{title}</h1>}

        {html ? (
          <div
            className={styles.previewContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className={styles.previewPlaceholder}>
            <p>당신의 이야기를 적어보세요...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownPreview;
