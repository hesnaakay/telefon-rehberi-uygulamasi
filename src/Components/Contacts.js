import React, {Component} from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
    }
    state = {
        contacts:[
            {
                name:'Esra',
                phone:'2342342343',
            },
            {
                name:'Feyza',
                phone:'546787876'
            }
        ]
    };

    addContact(contact){
      const{contacts} = this.state;
      contacts.push(contact);
      this.setState(
          {
              contacts
          }
      );
    }

    render() {
        return (
            <div>
                <List contacts={this.state.contacts}/>
                <Form addContact={this.addContact}/>
            </div>
        );
    }
}

export default Contacts;
