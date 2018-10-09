import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Recipes = ({ data }) => {
  const { edges: recipes } = data.allMarkdownRemark;

  const PageTitle = styled.h1`
    display: grid;
    width: 100%;
    justify-items: center;
    font-size: 36px;
    text-decoration: underline;
  `;

  const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  `;

  const RecipeCard = styled.div`
    width: 100%;
    margin: 40px;
    background: #eaeaea;
    display: grid;
    grid-template: 1/1;
    overflow: hidden;
    .card_contents {
      padding: 15px;
      grid-column: 1/-1;
      grid-row: 1/-1;
      width: 100%;
      height: 100%;
    }
    .card_overlay {
      grid-column: 1/-1;
      grid-row: 1/-1;
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-content: center;
      /* grid-template: 1/3; */
      background: rgba(63, 72, 125, 0.6);
      button {
        background: none;
        border: 2px solid rgba(255, 255, 255, 0.9);
        color: white;
        text-transform: uppercase;
        background: (0, 0, 0, 0.7);
        padding: 5px;
        margin: 5px 0;
      }
      transform: translateY(100%);
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      .card_overlay {
        transform: translateY(0);
      }
    }
  `;

  console.log(recipes);
  return (
    <Layout>
      <PageTitle>Recipes!</PageTitle>
      <Grid>
        {recipes.map(rec => {
          const { id } = rec.node;
          const { title, image, description } = rec.node.frontmatter;
          return (
            <RecipeCard key={id}>
              <div className="card_contents">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div className="card_overlay">
                <button>View Recipe</button>
                <button>Add to Grocery List</button>
                <button>Save for Later</button>
              </div>
            </RecipeCard>
          );
        })}
      </Grid>
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
            image
            path
            minutes
            serves
            templateKey
          }
        }
      }
    }
  }
`;
