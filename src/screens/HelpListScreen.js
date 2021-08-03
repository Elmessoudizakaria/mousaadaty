/*
 * File Created: Tuesday, 3rd August 2021 9:24:30 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 9:24:31 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { HelpItemComponent } from '../components/HelpItemComponent';

const HelpListScreen = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: 24 }}>
        قائمة الحالات الإنسانية التي تحتاج للمساعدة{' '}
      </h3>
      <div className="list">
        <HelpItemComponent></HelpItemComponent>
        <HelpItemComponent></HelpItemComponent>
        <HelpItemComponent></HelpItemComponent>
      </div>
    </div>
  );
};

export default HelpListScreen;
