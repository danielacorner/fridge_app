import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

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
    max-height: 325px;
    margin: 40px;
    background: #eaeaea;
    .card_contents {
      padding: 15px;
      width: 100%;
      height: 100%;
      display: grid;
      grid-gap: 5px;
      grid-template-rows: 1fr auto auto;
      grid-row: 1/-1;
      grid-column: 1/-1;
      .image_div {
        overflow: hidden;
        display: grid;
        min-height: 200px;
        img {
          grid-row: 1/-1;
          grid-column: 1/-1;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        transition: all 0.3s ease-out;
        &:hover {
          box-shadow: 0px 3px 11px 1px #00000087;
          .img_overlay {
            transform: translateY(0);
          }
        }
      }
      h3 {
        font-size: 20px;
        font-style: italic;
      }
      p {
        font-size: 14px;
      }
    }
    .img_overlay {
      grid-column: 1/-1;
      grid-row: 1/-1;
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-content: center;
      /* grid-template: 1/3; */
      background: rgba(63, 72, 125, 0.6);
      button,
      a {
        cursor: pointer;
        background: none;
        border: 2px solid rgba(255, 255, 255, 0.9);
        color: white;
        text-transform: uppercase;
        background: (0, 0, 0, 0.7);
        padding: 5px 10px;
        margin: 5px 0;
        font-size: 14px;
        transition: all 0.2s ease-out;
        &:hover {
          box-shadow: 0px 3px 7px 1px #00000087;
        }
      }
      transform: translateY(100%);
      transition: all 0.3s ease-in-out;
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
          const maxTitleChars = 20;
          const maxDescChars = 59;
          return (
            <RecipeCard key={id}>
              <div className="card_contents">
                <div className="image_div">
                  <img src={image} alt={title} />
                  <div className="img_overlay">
                    <Link to={id}>View Recipe</Link>
                    <button onClick={() => console.log('add')}>
                      Add to Grocery List
                    </button>
                    <button onClick={() => console.log('save')}>
                      Save for Later
                    </button>
                  </div>
                </div>
                <h3>
                  {title.length < maxTitleChars
                    ? title
                    : title.substr(0, maxTitleChars) + '...'}
                </h3>
                <p>
                  {description.length < maxDescChars
                    ? description
                    : description.substr(0, maxDescChars) + '...'}
                </p>
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
            description
            path
            templateKey
          }
        }
      }
    }
  }
`;
