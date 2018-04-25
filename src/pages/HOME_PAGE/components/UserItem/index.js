import React, { Component } from "react";
import styles from "./UserItem.scss";

export default class UserItem extends Component {
  render() {
    return (
      <div className={styles.user}>
        <div className={styles.user__avatar}>
          <img src={this.props.info.profile_image} alt="" />
        </div>
        <div className={styles.user__info}>
          <b>{this.props.info.first_name} {this.props.info.last_name}</b>
        </div>
      </div>
    );
  }
}
