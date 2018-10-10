import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
// import { Link } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewRecipe extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
      grid-template-rows: repeat(auto-fill, minmax(225px, 1fr));
      width: 100%;
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
            id="outlined-name"
            label="Name"
            className="textField"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            className="textField"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            className="textField"
            margin="normal"
            helperText="hello"
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
            className="textField"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />
          <Button>Submit</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewRecipe;
