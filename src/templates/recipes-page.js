import React from 'react';
import PropTypes from 'prop-types';
import { graphql /* Link */ } from 'gatsby';
import Layout from '../components/Layout';
import Recipe from '../components/Recipe';
import Content, { HTMLContent } from '../components/Content';

export const RecipesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PageContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

RecipesPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func
};

const RecipesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RecipesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      {<Recipe />}
    </Layout>
  );
};

RecipesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default RecipesPage;

export const RecipesPageQuery = graphql`
  query RecipesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
