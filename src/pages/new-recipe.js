import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
// import { Link } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

class NewRecipe extends React.Component {
  state = {
    templateKey: 'recipe-page',
    title: '',
    serves: '',
    minutes: '',
    description: '',
    image: '',
    ingredients: [
      { id: 0, ingredient: '', measure: '', quantity: '' },
      { id: 1, ingredient: '', measure: '', quantity: '' }
    ],
    instructions: [{ id: 0, instruction: '' }, { id: 1, instruction: '' }],
    tags: []
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleAddIngredient = () => {
    const newIngredient = {
      id:
        this.state.ingredients.reduce((curr, accum) => {
          return curr.id > accum.id ? curr.id : accum.id;
        }, 0) + 1,
      ingredient: '',
      measure: '',
      quantity: ''
    };
    this.setState({
      ingredients: [...this.state.ingredients, newIngredient]
    });
  };

  handleAddInstruction = () => {
    const newInstruction = {
      id:
        this.state.instructions.reduce((curr, accum) => {
          return curr.id > accum.id ? curr.id : accum.id;
        }, 0) + 1,
      instruction: ''
    };
    this.setState({
      instructions: [...this.state.instructions, newInstruction]
    });
  };

  handleRemoveIngredient = index => {
    this.setState({
      ingredients: [
        ...this.state.ingredients.slice(0, index),
        ...this.state.ingredients.slice(index + 1)
      ]
    });
  };
  handleRemoveInstruction = index => {
    this.setState({
      instructions: [
        ...this.state.ingredients.slice(0, index),
        ...this.state.ingredients.slice(index + 1)
      ]
    });
  };

  render() {
    const Header = styled.div`
      display: grid;
      grid-template-columns: 1fr;
      align-items: end;
      padding: 8px 40px 0 40px;
      h1 {
        width: 100%;
        font-size: 36px;
      }
    `;

    const Form = styled.form`
      padding: 20px;
      display: grid;
      grid-gap: 10px;
      width: 100%;
      .numbersGrid {
        display: grid;
        grid-auto-flow: column;
        justify-content: start;
        grid-gap: 20px;
      }
      .numField {
        display: inline-block;
      }
      h3 {
        font-size: 24px;
      }
      .ingGrid,
      .instGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) 130px;
        align-items: start;
        grid-column-gap: 20px;
        button {
          align-self: center;
          margin-bottom: 20px;
          background: lightpink;
          &:hover {
            background: #ffd7dd;
          }
        }
      }
      .addIngBtn,
      .addInstBtn {
        margin-top: 10px;
        background: lightpink;
        &:hover {
          background: #ffd7dd;
        }
      }

      .ingredientsGrid {
        margin: 20px 0;
      }

      .instructionsGrid {
        margin: 20px 0;
        .instGrid {
          span.step {
            margin-bottom: -10px;
            font-size: 18px;
            font-weight: 500;
          }
          grid-template-columns: 1fr 130px;
          align-items: center;
          button {
            align-self: center;
            margin-bottom: -10px;
          }
        }
      }

      .submitDiv {
        display: grid;
        justify-items: end;
        button {
          background: lightpink;
          &:hover {
            background: #ffd7dd;
          }
        }
      }
    `;

    return (
      <Layout>
        <Header>
          <h1>Submit a Recipe</h1>
        </Header>
        <Form
          noValidate
          autoComplete="off"
          name="new-recipe"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <TextField
            required
            label="Name"
            className="textField"
            onChange={() => this.handleChange('title')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            label="Image URL"
            className="textField"
            onChange={() => this.handleChange('image')}
            margin="normal"
            variant="outlined"
          />
          <div className="numbersGrid">
            <TextField
              required
              label="Servings"
              type="number"
              className="textField numField"
              onChange={() => this.handleChange('serves')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              label="Time (minutes)"
              type="number"
              onChange={() => this.handleChange('minutes')}
              className="textField numField"
              margin="normal"
              variant="outlined"
            />
          </div>
          <TextField
            label="Description"
            multiline
            rowsMax="4"
            onChange={() => this.handleChange('description')}
            className="textField"
            margin="normal"
            helperText="Write a short description for your recipe"
            variant="outlined"
          />
          <div className="ingredientsGrid">
            <h3>Ingredients</h3>
            {this.state.ingredients.map((ing, index) => {
              return (
                <div className="ingGrid" key={ing.id}>
                  <TextField
                    label="Ingredient"
                    onChange={() =>
                      this.handleChange(`ingredients[${index}].ingredient`)
                    }
                    className="textField"
                    margin="normal"
                    helperText="Please use the singular form: onion, tomato, etc."
                    variant="outlined"
                  />
                  <TextField
                    type="number"
                    label="Quantity"
                    onChange={() =>
                      this.handleChange(`ingredients[${index}].quantity`)
                    }
                    className="textField"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Measure"
                    onChange={() =>
                      this.handleChange(`ingredients[${index}].measure`)
                    }
                    className="textField"
                    margin="normal"
                    helperText="unit: tbsp, tsp, cup, g, etc."
                    variant="outlined"
                  />
                  <Button
                    className="remIngBtn"
                    onClick={() => this.handleRemoveIngredient(index)}
                    variant="outlined"
                  >
                    Remove <CloseIcon style={{ margin: '0 -5 0 5' }} />
                  </Button>
                </div>
              );
            })}
            <Button
              className="addIngBtn"
              onClick={this.handleAddIngredient}
              variant="outlined"
            >
              Add Ingredient <AddIcon style={{ margin: '0 -5 0 5' }} />
            </Button>
          </div>
          <div className="instructionsGrid">
            <h3>Instructions</h3>
            {this.state.instructions.map((inst, index) => {
              return (
                <div className="instGrid" key={inst.id}>
                  <TextField
                    label={`step ${index + 1}`}
                    onChange={() =>
                      this.handleChange(`instructions[${index}].instruction`)
                    }
                    className="textField"
                    multiline
                    max-rows="6"
                    margin="normal"
                    variant="outlined"
                  />
                  <Button
                    className="remInstBtn"
                    onClick={() => this.handleRemoveInstruction(index)}
                    variant="outlined"
                  >
                    Remove <CloseIcon style={{ margin: '0 -5 0 5' }} />
                  </Button>
                </div>
              );
            })}
            <Button
              className="addInstBtn"
              onClick={this.handleAddInstruction}
              variant="outlined"
            >
              Add Step <AddIcon style={{ margin: '0 -5 0 5' }} />
            </Button>
          </div>
          <div className="submitDiv">
            <Button type="submit" size="large" variant="contained">
              Submit
            </Button>
          </div>
        </Form>
      </Layout>
    );
  }
}

export default NewRecipe;
