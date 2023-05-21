import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";



class App extends Component {

    state = {
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
      };
    
      handleSubmit = data => {
        const equalName = this.state.contacts.find(
          el => el.name.toLowerCase() === data.name.toLowerCase()
        );
        if (equalName) return alert(equalName.name + ' is already in contacts.');
    
        data.id = nanoid();
        this.setState(prev => ({ contacts: [data, ...prev.contacts] }));
      };
    
      changeFilter = e => {
        // e.preventDefault();
        this.setState({ filter: e.currentTarget.value });
      };
    
      getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      deleteContacts = id => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
      };

    render(){
        const { filter, contacts } = this.state;

        return(
            <div className="container">
                <h1 className="title_heading">
                Phonebook
                </h1>
            <ContactForm onSubmit={this.handleSubmit} />
            <h2>Contacts</h2>
            {contacts.length ? (
          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContacts}
          />
        ) : (
          <p>No any contacts</p>
        )}
            </div>
        )
    }
}

export default App;