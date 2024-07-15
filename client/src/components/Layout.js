import React, { createRef, useEffect } from "react";
import Headtags from "./Headtags";
import nprogress from "nprogress"; //for the red progress bar at the top. We can change the color of the progress bar by opening nprogress.css in the public folder and changing the background color

// import Search from "../Layout/Search";
// import SideMenu from "../Layout/SideMenu";

//we'll receive user object here as well as we spread it on the Layout object in _app.js
function Layout({ children, user }) {
  const contextRef = createRef();

  useEffect(() => {
    const startProgress = () => {
      nprogress.start();
    };

    const doneProgress = () => {
      nprogress.done();
    };

    const removeProgress = () => {
      nprogress.remove();
    };

    // Add event listeners using document.addEventListener
    document.addEventListener("page:fetch", startProgress);
    document.addEventListener("page:change", doneProgress);
    document.addEventListener("page:restore", removeProgress);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("page:fetch", startProgress);
      document.removeEventListener("page:change", doneProgress);
      document.removeEventListener("page:restore", removeProgress);
    };
  }, []);

  return (
    <>
      <Headtags />
      {children}
    </>
  );
}

export default Layout;

// {user ? (
//     <>
//       <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
//         <Ref innerRef={contextRef}>
//           <Grid>
//             {!messagesRoute ? (
//               <>
//                 <Grid.Column floated="left" width={2}>
//                   {/*Sticky is used to wrap non scrollable stuff */}
//                   <Sticky context={contextRef}>
//                     <SideMenu user={user}></SideMenu>
//                   </Sticky>
//                 </Grid.Column>

//                 <Grid.Column width={10}>
//                   {/*Scrollable columns are wrapped with visibility */}
//                   <Visibility context={contextRef}>{children}</Visibility>
//                 </Grid.Column>

//                 <Grid.Column floated="left" width={4}>
//                   <Sticky context={contextRef}>
//                     <Segment basic>
//                       <Search></Search>
//                     </Segment>
//                   </Sticky>
//                 </Grid.Column>
//               </>
//             ) : (
//               <>
//                 <Grid.Column floated="left" width={1} />
//                 <Grid.Column width={15}>{children}</Grid.Column>
//               </>
//             )}
//           </Grid>
//         </Ref>
//       </div>
//     </>
//   ) : (
//     <>
//       {" "}
//       <Navbar />
//       <Container style={{ paddingTop: "1rem" }} text>
//         {children}
//       </Container>
//     </>
//   )}
