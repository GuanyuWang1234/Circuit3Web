import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero2.module.css'

const Hero2 = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <StaticImage
        className={styles.image}
        alt={title}
        src="https://i.imgur.com/qnGrjMY.jpg"
      />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero2
