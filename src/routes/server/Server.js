/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Server.css';

const title = 'React Starter Kit';

function Server({ user, serverId }, context) {
  // const avatarURL = `https://discordapp.com/api/users/85257659694993408/avatars/${user.avatar}.jpg`;
  const guild = user.guilds.find(guild => serverId === guild.id);
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>{guild.name}'s Settings</h1>
      </div>
    </div>
  );
}

Server.propTypes = {
  user: PropTypes.object,
  serverId: PropTypes.string,
};

Server.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Server);
