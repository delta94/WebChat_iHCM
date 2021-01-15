import React from "react";
import { Skeleton } from "./LoadingSkeletons";


function SkeletonNavbarDetailScreen(props: any) {
//   const [width, height] = useWindowSize();

    // const renderUserImage = () => {
    //     let widthAva="48px";
    //     let heightAva="48px";
    //     if (width < 768) {
    //     widthAva="40px";
    //     heightAva="40px";
    //     }
    //     return (
    //         <CircleAvatarScreen
    //             class=""
    //             width={ widthAva }
    //             height={ heightAva }
    //             src={props.avatar}
    //             alt="avatar"
    //             isOnline={props.isOnline}
    //         />
    //     );
    // };

  return (
    <div
      className={"userchat-container" }
    >
      <div className="userchat-image2">
        <Skeleton borderRadius={25} />
      </div>
      <div className="userchat-context">
        <div className="userchat-context-top">
          <span
            className={ "userchat-username2" }
          >
            <Skeleton borderRadius={25} />
          </span>
        </div>
        <div className="userchat-context-bottom">
            <h3 className="userchat-contextoflastmess">
              <Skeleton borderRadius={25} />
            </h3>
          </div>
      </div>
    </div>
  );
}

export default SkeletonNavbarDetailScreen;
