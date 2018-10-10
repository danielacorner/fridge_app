import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: recipes } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Recipes</h1>
            </div>
            {recipes.map(({ node: recipe }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={recipe.id}
              >
                <p>
                  <Link
                    className="has-text-primary"
                    to={recipe.frontmatter.path}
                  >
                    {recipe.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{recipe.frontmatter.date}</small>
                </p>
                <p>
                  {recipe.description}
                  <br />
                  <br />
                  <Link
                    className="button is-small"
                    to={recipe.frontmatter.path}
                  >
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            image
            templateKey
          }
        }
      }
    }
  }
`;
