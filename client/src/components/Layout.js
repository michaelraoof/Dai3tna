import { useEffect } from "react";
import Headtags from "./Headtags";
import nprogress from "nprogress";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const startProgress = () => {
      nprogress.start();
    };

    const doneProgress = () => {
      nprogress.done();
    };

    startProgress();
    doneProgress();

    return () => {
      doneProgress();
    };
  }, [location]);

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
