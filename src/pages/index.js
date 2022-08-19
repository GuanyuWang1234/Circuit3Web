import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Hero2 from '../components/hero2'
import Hero3 from '../components/hero3'
import Hero4 from '../components/hero4'
import Hero5 from '../components/hero5'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author1]= get(this, 'props.data.firstEntry.nodes')
    const [author2]= get(this, 'props.data.secondEntry.nodes')
    const [author3]= get(this, 'props.data.thirdEntry.nodes')
    const [author4]= get(this, 'props.data.fourthEntry.nodes')
    const [author5]= get(this, 'props.data.fifthEntry.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image
          title={author1.name}
          content={author1.shortBio}
        />
       <Hero2
          image
          title={author2.name}
          content={author2.shortBio}
        />
        <Hero3
          image
          title={author3.name}
          content={author3.shortBio}
        />
        <Hero4
          image
          title={author4.name}
          content={author4.shortBio}
        />
         <Hero5
          image
          title={author5.name}
          content={author5.shortBio}
        />

        {/* <ArticlePreview posts={posts} /> */}
      </Layout>
    )
  }
}



export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        description {
          raw
        }
      }
    }
    firstEntry: allContentfulPerson(filter: {title: {eq: "1000"}}) {
        nodes {
          name
          shortBio {
            raw
          }
        }
      }
    secondEntry: allContentfulPerson(filter: {title: {eq: "1001"}}) {
        nodes {
          name
          shortBio {
            raw
          }
        }
      }
      thirdEntry: allContentfulPerson(filter: {title: {eq: "1003"}}) {
        nodes {
          name
          shortBio {
            raw
          }
        }
      }
      fourthEntry: allContentfulPerson(filter: {title: {eq: "1004"}}) {
        nodes {
          name
          shortBio {
            raw
          }
        }
      }
      fifthEntry: allContentfulPerson(filter: {title: {eq: "1002"}}) {
        nodes {
          name
          shortBio {
            raw
          }
        }
      }
  }
`
