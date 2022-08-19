import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero3.module.css'

const Hero3 = ({ image, title, content }) => (
  <div className={styles.hero}>
  
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
    {image && (
      <StaticImage
        className={styles.image}
        alt={title}
        src="https://i.imgur.com/64L5jx4.jpg"
      />
    )}
  </div>
)

export default Hero3
