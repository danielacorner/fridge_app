import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Recipes = ({ data }) => {
  const { edges: recipes } = data.allMarkdownRemark;
  const RecipeCard = styled.div`
    width: 100%;
    background: #888;
  `;

  console.log(recipes);
  return (
    <Layout>
      <h1>Recipes!</h1>
      {recipes.map(rec => {
        const { id } = rec.node;
        const { title } = rec.node.frontmatter;
        return <RecipeCard key={id}>{title}</RecipeCard>;
      })}
    </Layout>
  );
};

export default Recipes;
export const recipesQuery = graphql`
  query RecipePages {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { templateKey: { eq: "recipe-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            templateKey
          }
        }
      }
    }
  }
`;
