import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import ClockIcon from '@material-ui/icons/AccessTime';
import PeopleIcon from '@material-ui/icons/SupervisedUserCircle';
import Button from '@material-ui/core/Button';

class Recipes extends React.Component {
  render() {
    const { edges: recipes } = this.props.data.allMarkdownRemark;

    const randomPastelColour = () => {
      return `hsl(${Math.random() * 255},25%,90%)`;
    };

    const Header = styled.div`
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: end;
      padding: 8px 40px 0 40px;
      h1 {
        width: 100%;
        font-size: 36px;
      }
      button {
        height: 40px;
        border: none;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
        background: lightpink;
        font-size: 16px;
        font-weight: 500;
        padding: 4px 14px;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          background: #ffd7dd;
        }
      }
    `;

    const Grid = styled.div`
      padding: 20px;
      display: grid;
      /* grid-gap: 10px; */
      grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
      width: 100%;
    `;

    const RecipeCard = styled.div`
      width: 100%;
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
            transition: all 0.5s cubic-bezier(0.02, 0.85, 0.21, 0.98);
          }
          transition: all 0.5s cubic-bezier(0.02, 0.85, 0.21, 0.98);
        }
        transition: all 0.5s cubic-bezier(0.02, 0.85, 0.21, 0.98);
        &:hover {
          .image_div {
            box-shadow: 0px 3px 11px 1px #00000087;
            img {
              transform: scale(1.05);
            }
            .img_overlay {
              transform: translateX(0);
            }
          }
          h3::after {
            transform: translateX(0);
          }
        }
        overflow: hidden;
        h3 {
          font-size: 20px;
          font-style: italic;
          display: inline;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
            transform: translateX(400%);
            transition: all 0.5s cubic-bezier(0.74, 0.31, 0.13, 1.01);
          }
        }
        .details {
          display: grid;
          grid-template-columns: repeat(2, auto);
          width: 100%;
          justify-items: center;
          justify-content: space-between;
          align-items: center;
          span {
            display: grid;
            grid-template-columns: auto auto;
            height: 100%;
            align-items: center;
            svg {
              height: 18px;
            }
          }
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
        transform: translateX(-101%);
        transition: all 0.3s ease-in-out;
      }
    `;

    console.log(recipes);
    return (
      <Layout>
        <Header>
          <h1>Recipes!</h1>
          <Link to="new-recipe">
            <Button>Submit a Recipe</Button>
          </Link>
        </Header>
        <Grid>
          {recipes.map(rec => {
            const { id } = rec.node;
            const { title, image, description } = rec.node.frontmatter;
            const maxTitleChars = 20;
            const maxDescChars = 59;
            return (
              <RecipeCard key={id} style={{ background: randomPastelColour() }}>
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
                  <div>
                    <h3>
                      {title.length < maxTitleChars
                        ? title
                        : title.substr(0, maxTitleChars) + '...'}
                    </h3>
                  </div>
                  <div className="details">
                    <span>
                      <ClockIcon /> 10 min
                    </span>
                    <span>
                      <PeopleIcon />
                      10 servings
                    </span>
                  </div>
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
  }
}

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
