import React, { Component } from "react";
import UserItem from "../UserItem";
import { AppContext } from "../../../../contexts/app-context";

export default class ListOfUsers extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context ? (
            <section className="users">
              <article className="users__user">
                {context.users.map(item => (
                  <UserItem key={item.id} info={item} />
                ))}
              </article>
            </section>
          ) : null
        }
      </AppContext.Consumer>
    );
  }
}
