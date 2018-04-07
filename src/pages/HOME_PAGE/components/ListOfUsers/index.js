import React, { Component } from 'react';
import users from '../../../../utils/users-list.js';
import UserItem from '../UserItem';

export default class ListOfUsers extends Component {
    render() {
        return (
            <section className="users">
                <article className="users__user">
                    { users.map((item) => (
                        <UserItem key={item.id} info={item}/>
                    )) }
                </article>
            </section>
        );
    }
}