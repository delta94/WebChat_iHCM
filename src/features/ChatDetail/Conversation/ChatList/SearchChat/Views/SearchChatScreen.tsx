import React from 'react';
import MessageFoundScreen from '../../ContextChat/MessageFound/Views/MessageFoundScreen';
import './SearchChatScreen.css';

function SearchChatScreen(props : any) {

  return (
    <div className="searchmessage-container">
      {
        props.query ? (
          <>
            <MessageFoundScreen query={ props.query }></MessageFoundScreen>
          </>
        ) : (
          <div></div>
        )
      }

    </div>
  );
}

export default SearchChatScreen;
