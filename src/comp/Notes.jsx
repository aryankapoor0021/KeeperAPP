import React from 'react';
import notes from '../notes.js'
import Entry from './Entry'

function give(e)
{
 return (
  <Entry
   key={e.key}
   title={e.title}
   content={e.content}
  />);
}
function Notes() {
	return (
	<div >
	{notes.map(give)}
	</div> );
}

export default Notes;