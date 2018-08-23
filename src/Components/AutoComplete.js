import React from 'react';
import ReactAutocomplete from "react-autocomplete";
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

const DB = require("/Users/Roger/skills-app/src/DB.js");

let n = Math.floor(Math.random() * Math.floor(DB.length - 1));

const menuStyle = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%',
    zIndex: '998',
};

class MyInput extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
    this.items = props.list.map((el, idx) => {
        let obj = {};
        obj.label = el;
        obj.id = idx;
        return obj;
      });
    this.keyPressHandler = props.keyPressHandler;
  }

  render() {

    return (
      <LocalContext.Consumer>
           { localData  =>

        <ReactAutocomplete
            items={this.items}
            inputProps={{ placeholder: `i.e. ${this.items[n].label}`,
            onKeyPress: this.keyPressHandler }}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, isHighlighted) =>
              <p key={item.id} style={{ backgroundColor: isHighlighted ? '#d8d8d8' : '#ffffff', color: "black", padding: "6px" }}>
                    {item.label}
              </p>
            }
            value={this.state.value}
            onChange={ev => this.setState({ value: ev.target.value })}
            onSelect={value => this.setState({ value })}
            menuStyle={menuStyle}
            wrapperStyle={{ position: 'relative'}}
          />
        }
    </LocalContext.Consumer>
    )
  }
}

export default MyInput;
