/*
 * File Created: Tuesday, 3rd August 2021 9:26:54 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 9:26:54 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { NavBarComponent } from '../components/NavBarComponent';
import HelpListScreen from './HelpListScreen';

export const HomeScreen = () => {
  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <HelpListScreen></HelpListScreen>
    </div>
  );
};
