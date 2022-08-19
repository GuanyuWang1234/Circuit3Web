import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import './global.css'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xeqdqwdo");
  if (state.succeeded) {
      return <p>Thanks for contacting us!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div> 
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      </div>
      <div> 
      <label htmlFor="email">
        Message
      </label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <ContactForm />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`